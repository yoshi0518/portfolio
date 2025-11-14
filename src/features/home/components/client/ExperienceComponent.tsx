'use client';

import { useRef } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { motion, useInView } from 'motion/react';

import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import { containerVariants, itemVariants } from '@/shared/libs/motion';

import type { ExperienceType } from '@/features/home/types';

type ExperienceProps = {
  experiences: ExperienceType[];
};

export const ExperienceComponent = ({ experiences }: ExperienceProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="experience"
      className="bg-gray-50 py-16"
    >
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <motion.div
          className="mx-auto mb-16 space-y-20"
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
            <h2 className="mb-1 font-semibold text-2xl text-gray-900 md:text-3xl">Experience</h2>
            <div className="mx-auto mb-6 h-1 w-36 rounded-full bg-linear-to-r from-blue-600 to-purple-600 md:w-44" />
            <p className="mx-auto text-base md:text-lg">これまでの職歴と業務内容です。</p>
          </motion.div>
          {/* Title、Description end */}

          {/* Timeline start */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-8 hidden w-0.5 bg-linear-to-b from-blue-600 to-purple-600 md:block" />

            <div className="space-y-6 md:space-y-16">
              {experiences.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="-translate-y-1/2 absolute top-1/2 left-[23px] hidden h-5 w-5 transform rounded-full border-4 border-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg md:block" />

                  <Card className="group gap-0 overflow-hidden border-0 bg-white pb-0 shadow-md transition-all duration-300 hover:shadow-xl md:ml-16">
                    <CardHeader className="gap-0">
                      <h3 className="font-semibold text-gray-900 text-xl transition-colors duration-200 group-hover:text-blue-500">
                        {item.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="px-6 py-4 text-gray-600 text-sm">
                      <div className="mb-6 flex flex-col space-x-5 space-y-1 md:flex-row">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{item.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="mb-1 font-semibold text-base text-gray-900">概要</h4>
                        <p className="leading-relaxed">{item.overview}</p>
                      </div>

                      <div className="mb-6">
                        <h4 className="mb-1 font-semibold text-base text-gray-900">業務内容</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail) => (
                            <li
                              key={detail.detail}
                              className="flex items-start space-x-2"
                            >
                              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-linear-to-r from-blue-600 to-purple-600" />
                              <span>{detail.detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Timeline end */}
        </motion.div>
      </div>
    </section>
  );
};
