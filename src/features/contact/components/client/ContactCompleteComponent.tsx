'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { containerVariants, itemVariants } from '@/shared/libs/motion';

export const ContactCompleteComponent = () => {
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">お問い合わせ完了</h2>
            <div className="mx-auto mb-6 h-1 w-44 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-56" />
          </motion.div>
          {/* Title、Description end */}

          {/* Content start */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-4xl space-y-4 text-sm md:space-y-8 md:text-base"
          >
            <Card className="mx-auto max-w-3xl py-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <CardContent className="space-y-5 px-4 md:px-10">
                <div className="text-center text-gray-600 text-sm md:text-base">
                  <p>お問い合わせ頂き、誠にありがとうございます。</p>
                  <p>内容確認後にご返信いたします。しばらくお待ち頂きますようお願いします。</p>
                </div>
                <div className="text-center">
                  <Button
                    type="button"
                    className="mr-0 mb-2 w-[120px] cursor-pointer rounded-sm bg-gray-300 px-20 py-6 text-black hover:text-gray-100 hover:opacity-70 md:mr-4 md:mb-0"
                    asChild
                  >
                    <Link href="/">戻る</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Content end */}
        </motion.div>
      </div>
    </section>
  );
};
