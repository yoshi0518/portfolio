'use client';

import { useActionState, useRef, useState, useTransition } from 'react';
import { getFormProps, getInputProps, getTextareaProps, useForm } from '@conform-to/react';
import { getZodConstraint, parseWithZod } from '@conform-to/zod';
import { motion, useInView } from 'motion/react';
import Script from 'next/script';

import { submitAction } from '@/features/contact/actions';
import { ContactSchema } from '@/features/contact/types';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { Textarea } from '@/shared/components/ui/textarea';
import { containerVariants, itemVariants } from '@/shared/libs/motion';
import { cn } from '@/shared/libs/utils';

export const ContactComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [lastResult, dispatch] = useActionState(submitAction, null);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isRecaptcha, setIsRecaptcha] = useState(true);
  const [isPending, startTransition] = useTransition();
  const [form, fields] = useForm({
    // 初期値
    defaultValue: {
      name: '',
      tel: '',
      email: '',
      message: '',
      check: '',
    },
    // action実行後の値
    lastResult,
    // バリデーションスキーマ
    onValidate: ({ formData }) => parseWithZod(formData, { schema: ContactSchema }),
    // 初回のバリデーション実行タイミング
    shouldValidate: 'onBlur',
    // 2回目以降のバリデーション実行タイミング
    shouldRevalidate: 'onInput',
    // Zodスキーマをもとに各フィールドのバリデーション属性を自動設定
    constraint: getZodConstraint(ContactSchema),
    // Submit
    onSubmit: (event, { formData }) => {
      event.preventDefault();

      // reCAPTCHAトークンを取得
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '', {
          action: 'submit',
        })
        .then((recaptchaToken: string) => {
          formData.append('recaptchaToken', recaptchaToken);

          startTransition(() => {
            dispatch(formData);
          });
        });
    },
  });

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        async
        defer
      />

      <section className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <motion.div
            className="mx-auto mb-16 space-y-20"
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Title、Description start */}
            <motion.div
              variants={itemVariants}
              className="mb-16 text-center"
            >
              <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">お問い合わせ</h2>
              <div className="mx-auto mb-6 h-1 w-44 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-56" />
            </motion.div>
            {/* Title、Description end */}

            {/* Content start */}
            <motion.div
              variants={itemVariants}
              className="mx-auto max-w-4xl space-y-4 text-sm md:space-y-8 md:text-base"
            >
              <form
                {...getFormProps(form)}
                onSubmit={form.onSubmit}
                noValidate
              >
                <Card className="mx-auto max-w-3xl py-8 shadow-md transition-all duration-300 hover:shadow-lg">
                  <CardContent className={cn('px-4 md:px-10', isConfirm ? 'hidden' : 'block')}>
                    <div className="space-y-5 text-base text-gray-600">
                      <div className="space-y-2">
                        <Label
                          htmlFor={fields.name.id}
                          className="gap-1 font-semibold"
                        >
                          お名前
                          <span className="text-red-500 text-xs">※</span>
                        </Label>
                        <Input
                          {...getInputProps(fields.name, { type: 'text' })}
                          key={fields.name.key}
                          placeholder="鈴木 太郎"
                          defaultValue={(lastResult?.initialValue?.name as string) ?? form.initialValue?.name}
                        />
                        <p
                          id={fields.name.errorId}
                          className="text-red-500 text-xs"
                        >
                          {fields.name.errors}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor={fields.tel.id}
                          className="gap-1 font-semibold"
                        >
                          電話番号
                        </Label>
                        <Input
                          {...getInputProps(fields.tel, { type: 'tel' })}
                          key={fields.tel.key}
                          placeholder="090-1234-5678"
                          defaultValue={(lastResult?.initialValue?.tel as string) ?? form.initialValue?.tel}
                        />
                        <p
                          id={fields.tel.errorId}
                          className="text-red-500 text-xs"
                        >
                          {fields.tel.errors}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor={fields.email.id}
                          className="gap-1 font-semibold"
                        >
                          メールアドレス
                          <span className="text-red-500 text-xs">※</span>
                        </Label>
                        <Input
                          {...getInputProps(fields.email, { type: 'email' })}
                          key={fields.email.key}
                          placeholder="xxxxx@example.com"
                          defaultValue={(lastResult?.initialValue?.email as string) ?? form.initialValue?.email}
                        />
                        <p
                          id={fields.email.errorId}
                          className="text-red-500 text-xs"
                        >
                          {fields.email.errors}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor={fields.message.id}
                          className="gap-1 font-semibold"
                        >
                          お問い合わせ内容
                          <span className="text-red-500 text-xs">※</span>
                        </Label>

                        <Textarea
                          {...getTextareaProps(fields.message)}
                          key={fields.message.key}
                          placeholder="お問い合わせ内容をご記入ください"
                          defaultValue={(lastResult?.initialValue?.message as string) ?? form.initialValue?.message}
                          className="min-h-56"
                        />
                        <p
                          id={fields.message.errorId}
                          className="text-red-500 text-xs"
                        >
                          {fields.message.errors}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Input
                          {...getInputProps(fields.check, { type: 'hidden' })}
                          key={fields.check.key}
                          defaultValue={(lastResult?.initialValue?.check as string) ?? form.initialValue?.check}
                        />
                        {fields.check.errors && <p className="error">{fields.check.errors}</p>}
                      </div>

                      {!isRecaptcha && (
                        <div className="space-y-2">
                          <p>reCAPTCHAがまだ読み込まれていません。もう一度お試しください。</p>
                        </div>
                      )}

                      {form.errors && (
                        <div className="space-y-2">
                          {form.errors.map((error) => (
                            <p
                              key={error}
                              className="text-red-500 text-xs"
                            >
                              {error}
                            </p>
                          ))}
                        </div>
                      )}

                      <div className="text-center">
                        <Button
                          type="button"
                          onClick={() => {
                            form.validate();
                            if (!form.valid) return;

                            // reCAPTCHA読み込み未完了
                            if (!window.grecaptcha) {
                              setIsRecaptcha(false);
                              return;
                            }

                            setIsConfirm(true);
                          }}
                          className="w-[120px] cursor-pointer rounded-sm bg-linear-to-br from-blue-600 to-purple-600 px-20 py-6 hover:opacity-70"
                        >
                          確認する
                        </Button>
                      </div>
                    </div>
                  </CardContent>

                  <CardContent className={cn('px-4 md:px-10', !isConfirm ? 'hidden' : 'block')}>
                    <div className="space-y-5 text-base text-gray-600">
                      <div className="text-center text-sm">
                        <p>入力内容をご確認の上、「送信する」ボタンをクリックしてください。</p>
                        <p>誤りがあった場合は、「戻る」ボタンをクリックし、再度ご訂正ください。</p>
                      </div>

                      <div className="space-y-2">
                        <Label className="mb-1 gap-1 font-semibold">
                          お名前
                          <span className="text-red-500 text-xs">※</span>
                        </Label>
                        <p>{fields.name.value}</p>
                      </div>

                      <div className="space-y-2">
                        <Label className="mb-1 gap-1 font-semibold">電話番号</Label>
                        <p>{fields.tel.value ?? '　'}</p>
                      </div>

                      <div className="space-y-2">
                        <Label className="mb-1 gap-1 font-semibold">
                          メールアドレス
                          <span className="text-red-500 text-xs">※</span>
                        </Label>
                        <p>{fields.email.value}</p>
                      </div>

                      <div className="space-y-2">
                        <Label className="mb-1 gap-1 font-semibold">
                          お問い合わせ内容
                          <span className="text-red-500 text-xs">※</span>
                        </Label>
                        {fields.message.value?.split('\n').map((item) => (
                          <p
                            key={item}
                            className="mb-0"
                          >
                            {item}
                          </p>
                        ))}
                      </div>

                      <div className="text-center">
                        <Button
                          type="button"
                          disabled={isPending}
                          className="mr-0 mb-2 w-[120px] cursor-pointer rounded-sm bg-gray-300 px-20 py-6 text-black hover:text-gray-100 hover:opacity-70 md:mr-4 md:mb-0"
                          onClick={() => {
                            setIsConfirm(false);
                          }}
                        >
                          戻る
                        </Button>
                        <Button
                          type="submit"
                          disabled={isPending}
                          className="w-[120px] cursor-pointer rounded-sm bg-linear-to-br from-blue-600 to-purple-600 px-20 py-6 hover:opacity-70"
                        >
                          送信する
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </motion.div>
            {/* Content end */}
          </motion.div>
        </div>
      </section>
    </>
  );
};
