'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

import type { ParticleType } from '@/features/home/types';

export const HeroComponent = () => {
  const [particles, setParticles] = useState<ParticleType[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 4 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-100 via-white to-purple-100">
      {/* Background Animation start */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-blue-400 opacity-20"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
      </div>
      {/* Background Animation end */}

      {/* Title start */}
      <div className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl"
        >
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text font-semibold text-3xl text-transparent md:text-4xl">
                Yoshi0518&apos;s
              </span>
            </div>
            <div>
              <span className="text-gray-600 text-xl md:text-2xl">Portfolio</span>
            </div>
          </motion.h1>
        </motion.div>
      </div>
      {/* Title end */}
    </section>
  );
};
