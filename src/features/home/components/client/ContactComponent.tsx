'use client';

import { useRef } from 'react';
import { Mail } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { containerVariants, itemVariants } from '@/shared/libs/motion';

export const ContactComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="contact"
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          className="mx-auto"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hiden'}
        >
          {/* Title、Description start */}
          <motion.div
            variants={itemVariants}
            className="mb-16 text-center"
          >
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">Contact</h2>
            <div className="mx-auto mb-6 h-1 w-28 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-32" />
            <p className="mx-auto text-base md:text-lg">仕事の相談や問合せはこちらからお願いします。</p>
          </motion.div>
          {/* Title、Description end */}

          {/* Contact start */}
          <motion.div
            variants={itemVariants}
            className="my-6 text-center"
          >
            <Button
              size="lg"
              className="w-xs cursor-pointer rounded-sm bg-linear-to-br from-blue-600 to-purple-600 px-32 py-6 hover:opacity-70"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-4 w-4" />
                お問い合わせ
              </Link>
            </Button>
          </motion.div>
          {/* Contact end */}
        </motion.div>
      </div>
    </section>
  );
};
