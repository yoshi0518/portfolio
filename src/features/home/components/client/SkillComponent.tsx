'use client';

import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip';
import { cardVariants, containerVariants, itemVariants } from '@/shared/libs/motion';
import { cn } from '@/shared/libs/utils';

import type { SkillType } from '@/features/home/types';

type SkillProps = {
  skills: SkillType[];
};

export const SkillComponent = ({ skills }: SkillProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">Skills</h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-26" />
            <p className="mx-auto text-base md:text-lg">これまで業務・制作で使用した言語、フレームワークなどです。</p>
          </motion.div>
          {/* Title、Description end */}

          {/* Grid start */}
          <div
            className={cn(
              'mx-auto grid max-w-sm grid-cols-1 gap-6',
              skills.length >= 2 && 'md:max-w-3xl md:grid-cols-2',
              skills.length >= 3 && 'lg:max-w-7xl lg:grid-cols-3',
            )}
          >
            {skills.map((item) => (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group h-full"
              >
                <Card className="mx-auto h-full max-w-xl gap-2 shadow-md transition-all duration-300 hover:shadow-xl">
                  <CardHeader>
                    <h3 className="font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-blue-500">
                      {item.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-center justify-center gap-2">
                    {item.icons.map((icon) => (
                      <Tooltip key={icon.name}>
                        <TooltipTrigger asChild>
                          <Image
                            src={`/skill-icons/${icon.src}`}
                            alt={icon.name}
                            width={50}
                            height={50}
                            className="hover:opacity-80"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-xs">{icon.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
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
