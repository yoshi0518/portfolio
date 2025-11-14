'use server';

import { parseWithZod } from '@conform-to/zod';
import { redirect } from 'next/navigation';

import { contactTable } from '@/db/schema';
import { ContactSchema } from '@/features/contact/types';
import { env } from '@/shared/libs/env';
import { db } from '@/shared/libs/neon';
import { verifyRecaptcha } from '@/shared/libs/recaptcha';
import { sendMail } from '@/shared/libs/resend';
import { getCurrentDt } from '@/shared/libs/utils';

import type { ContactCreateType } from '@/features/contact/types';
import type { SendMailType } from '@/shared/types/resend';

const createContact = async (request: ContactCreateType) => {
  if (env.DEBUG) console.log('[t_contact] 追加リクエスト', request);

  const response = await db.insert(contactTable).values(request).returning({ id: contactTable.id });

  if (env.DEBUG) console.log('[t_contact] 追加レスポンス', response);

  if (response.length === 0) return { status: false, message: 'DB登録失敗' };

  return { status: true, message: 'DB登録成功' };
};

export const submitAction = async (_: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, { schema: ContactSchema });
  const recaptchaToken = formData.get('recaptchaToken') as string;

  if (submission.status !== 'success') return submission.reply();
  const { name, tel, email, message } = submission.value;

  // === reCAPTCHA検証 Start ===
  const recaptchaResult = await verifyRecaptcha(recaptchaToken);

  if (!recaptchaResult.status) {
    return submission.reply({
      formErrors: [recaptchaResult.message],
    });
  }
  // === reCAPTCHA検証 End ===

  // === DBデータ追加 Start ===
  const requestDb: ContactCreateType = {
    name,
    tel,
    email,
    message,
    createdAt: getCurrentDt(),
    updatedAt: getCurrentDt(),
  };
  const responseDb = await createContact(requestDb);

  if (!responseDb.status)
    return submission.reply({
      formErrors: [responseDb.message],
    });
  // === DBデータ追加 End ===

  // === メール送信 Start ===
  const text = `========================================
送信内容
========================================

【お名前】
${name}

【電話番号】
${tel ?? '　'}

【メールアドレス】
${email}

【お問い合わせ内容】
${message}`;

  const requestUserMail: SendMailType = {
    from: env.RESEND_FROM,
    to: [email],
    subject: '【yoshi0518】お問い合わせありがとうございます',
    text: `※このメールは自動送信されていますので、返信はご遠慮ください。

${name} 様

お問い合わせ頂き、誠にありがとうございます。
内容確認後にご返信いたします。しばらくお待ち頂きますようお願いします。

${text}

========================================
※このメールにお心当たりのない場合は、お手数ですがメール削除をお願いします。

yoshi0518
    `,
  };

  const requestAdminMail: SendMailType = {
    from: env.RESEND_FROM,
    to: [env.RESEND_ADMIN],
    subject: '【yoshi0518】問合せがありました',
    text: `※このメールは自動送信されていますので、返信はご遠慮ください。

ポートフォリオサイトに問合せがありました。

${text}
    `,
  };
  const [responseUserMail, responseAdminMail] = await Promise.all([
    sendMail(requestUserMail),
    sendMail(requestAdminMail),
  ]);

  if (!responseUserMail.status || !responseAdminMail.status) {
    return submission.reply({
      formErrors: [responseUserMail.message, responseAdminMail.message],
    });
  }
  // === メール送信 End ===

  // 送信完了ページへ遷移
  redirect('/contact/complete');
};
