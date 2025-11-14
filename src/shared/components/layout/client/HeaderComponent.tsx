'use client';

import { useEffect, useState } from 'react';
import { CodeXml, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { MAIN_MENU_ITEMS } from '@/shared/constants';
import { cn } from '@/shared/libs/utils';

export const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-md' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 py-2 md:py-4">
        <div className="flex items-center justify-between">
          {/* Title start */}
          <Link
            className="flex cursor-pointer items-center gap-1"
            href="/"
          >
            <CodeXml className="h-6 w-6 text-blue-600" />
            <motion.div className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text font-medium text-transparent text-xl">
              Yoshi0518
            </motion.div>
          </Link>
          {/* Title end */}

          {/* Desktop Menu start */}
          <div className="hidden space-x-8 md:flex">
            {MAIN_MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.includes('https') ? '_blank' : undefined}
                rel={item.href.includes('https') ? 'noopener noreferrer' : undefined}
                className="cursor-pointer font-medium transition-colors hover:text-blue-500"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* Desktop Menu end */}

          {/* Mobile Menu Button start */}
          <button
            type="button"
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          {/* Mobile Menu Button end */}
        </div>

        {/* Mobile Menu start */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 rounded-lg bg-white p-4 shadow-lg md:hidden"
          >
            {MAIN_MENU_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 transition-colors hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
        {/* Mobile Menu end */}
      </nav>
    </motion.header>
  );
};
