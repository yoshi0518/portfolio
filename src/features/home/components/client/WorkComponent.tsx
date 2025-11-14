'use client';

import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Card, CardContent } from '@/shared/components/ui/card';
import { cardVariants, containerVariants, itemVariants } from '@/shared/libs/motion';
import { cn } from '@/shared/libs/utils';

import type { WorkType } from '@/features/home/types';

type WorkProps = {
  works: WorkType[];
};

export const WorkComponent = ({ works }: WorkProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="works"
      className="bg-gray-50 py-16"
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">Works</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-26" />
            <p className="mx-auto text-base md:text-lg">これまでの個人制作物です。</p>
          </motion.div>
          {/* Title、Description end */}

          {/* Grid start */}
          <div
            className={cn(
              'mx-auto grid max-w-sm grid-cols-1 gap-6',
              works.length >= 2 && 'md:max-w-3xl md:grid-cols-2',
              works.length >= 3 && 'lg:max-w-7xl lg:grid-cols-3',
            )}
          >
            {works.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group h-full"
              >
                <Card className="flex h-full max-w-sm flex-col gap-0 overflow-hidden border-0 pt-0 shadow-md transition-all duration-300 hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <motion.div className="h-50 w-full object-cover transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={`${item.image.url}?fm=webp&q=60`}
                        alt={item.title}
                        width={500}
                        height={500}
                      />
                    </motion.div>
                  </div>

                  <CardContent className="flex grow flex-col p-6">
                    <h3 className="mb-2 font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-blue-500">
                      {item.title}
                    </h3>
                    <p className="mb-4 grow text-gray-600 text-sm leading-relaxed lg:text-base">{item.description}</p>
                    <div className="mb-6 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <Link
                          href={item.demo}
                          target={item.demo.includes('https') ? '_blank' : undefined}
                          rel={item.demo.includes('https') ? 'noopener noreferrer' : undefined}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <Link
                          href={item.github}
                          target={item.github.includes('https') ? '_blank' : undefined}
                          rel={item.github.includes('https') ? 'noopener noreferrer' : undefined}
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {/* Grid end */}
        </motion.div>
      </div>
    </section>
  );
};
