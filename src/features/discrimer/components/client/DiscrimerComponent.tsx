'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

import { containerVariants, itemVariants } from '@/shared/libs/motion';

export const DiscrimerComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">免責事項</h2>
            <div className="mx-auto mb-6 h-1 w-44 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-56" />
          </motion.div>
          {/* Title、Description end */}

          {/* Content start */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-4xl space-y-4 text-sm md:space-y-8 md:text-base"
          >
            <div className="space-y-2 md:space-y-4">
              <div>
                <p>
                  当サイト
                  <Link
                    href="/"
                    className="text-blue-600 underline"
                  >
                    https://yoshi0518.com
                  </Link>
                  （以下、「当サイト」）のコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
                </p>
                <p>
                  当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
                </p>
                <p>当サイトで掲載している料金表記について、予告なく変更されることがあります。</p>
              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <div className="font-semibold">リンク</div>
              <div>
                <p>
                  当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いします。
                </p>
                <p>
                  ただし、画像ファイルへの直リンク、インラインフレームを使用したHTMLページ内で表示する形でのリンクはご遠慮ください。
                </p>
              </div>
            </div>
          </motion.div>
          {/* Content end */}
        </motion.div>
      </div>
    </section>
  );
};
