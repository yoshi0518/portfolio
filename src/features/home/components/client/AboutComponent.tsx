'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';

import { Card, CardContent } from '@/shared/components/ui/card';
import { containerVariants, itemVariants } from '@/shared/libs/motion';

type AboutProps = {
  about: string;
};

export const AboutComponent = ({ about }: AboutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="bg-white py-16"
    >
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">About this site</h2>
            <div className="mx-auto mb-6 h-1 w-44 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-56" />
            <p className="mx-auto text-base md:text-lg">
              このページはエンジニアyoshi0518のポートフォリオサイトです。
              <br />
              これまでの成果物、スキルなどを不定期で更新します。
            </p>
          </motion.div>
          {/* Title、Description end */}

          {/* Card start */}
          <motion.div variants={itemVariants}>
            <Card className="mx-auto max-w-xl shadow-md transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 pt-0 md:p-0 md:pr-6 md:pl-2">
                <div className="grid grid-cols-1 items-center md:grid-cols-3">
                  <Image
                    src="/icon-512x512.png"
                    alt="yoshi0518"
                    width={100}
                    height={100}
                    className="mx-auto md:col-span-1"
                  />
                  <div className="col-span-1 mx-auto max-w-2xl space-y-4 text-gray-600 text-sm md:col-span-2 md:text-base">
                    <h3 className="text-center font-semibold text-gray-900 text-xl md:text-left">Yoshi0518</h3>
                    <div
                      className="space-y-4"
                      dangerouslySetInnerHTML={{ __html: about }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Card end */}
        </motion.div>
      </div>
    </section>
  );
};
