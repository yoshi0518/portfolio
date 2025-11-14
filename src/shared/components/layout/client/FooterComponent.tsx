'use client';

import { CodeXml } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { MAIN_MENU_ITEMS, SUB_MENU_ITEMS } from '@/shared/constants';

export const FooterComponent = () => (
  <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-gray-300">
    <div className="mx-auto max-w-7xl px-4 pt-8 pb-2 sm:px-6 lg:px-8">
      <div className="grid space-y-4 md:grid-cols-3 md:space-y-0">
        {/* Title start */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <Link
              className="flex cursor-pointer items-center justify-center gap-1"
              href="/"
            >
              <CodeXml className="h-6 w-6 text-blue-600" />
              <motion.div className="bg-linear-to-br from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent text-xl">
                Yoshi0518
              </motion.div>
            </Link>
          </motion.div>
        </div>
        {/* Title end */}

        {/* Main Menu start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-gray-600 md:border-l"
        >
          <ul className="space-y-2 text-center">
            {MAIN_MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.href.includes('https') ? '_blank' : undefined}
                  rel={item.href.includes('https') ? 'noopener noreferrer' : undefined}
                  className="cursor-pointer text-sm transition-colors hover:text-blue-500 md:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Main Menu end */}

        {/* Sub Menu start */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-gray-600 md:border-l"
        >
          <ul className="space-y-2 text-center">
            {SUB_MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  target={item.href.includes('https') ? '_blank' : undefined}
                  rel={item.href.includes('https') ? 'noopener noreferrer' : undefined}
                  className="cursor-pointer text-sm transition-colors hover:text-blue-500 md:text-base"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      {/* Sub Menu end */}

      {/* Copyright start */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 border-gray-600 border-t pt-4 text-center text-xs"
      >
        Copyright © 2025 yoshifumi nakamura All Rights Reserved.
      </motion.div>
      {/* Copyright end */}
    </div>
  </footer>
);
