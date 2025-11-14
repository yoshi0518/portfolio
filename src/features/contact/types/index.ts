import { z } from 'zod';

import type { contactTable } from '@/db/schema';

export const ContactSchema = z.object({
  name: z.string({ message: 'お名前は必須です' }),
  tel: z
    .string()
    .optional()
    .refine(
      (value) => {
        if (!value || value.trim() === '') return true;
        return /^\d{2,5}-\d{1,4}-\d{3,4}$|^\d{10,11}$/.test(value);
      },
      { message: '電話番号の書式に誤りがあります' },
    ),
  email: z.string({ message: 'メールアドレスは必須です' }).email('無効なメールアドレスです'),
  message: z.string({ message: 'お問い合わせ内容は必須です' }),
  check: z.optional(z.string().refine((value) => value === '')),
});

export type ContactCreateType = typeof contactTable.$inferInsert;
export type ContactReadType = typeof contactTable.$inferSelect;
