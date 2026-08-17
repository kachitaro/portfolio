'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { useMotionPreference } from '@/hooks/use-motion-preference';
import Image from 'next/image';

export function NyanCat() {
  const { reducedMotion } = useMotionPreference();
  const [isFlying, setIsFlying] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      // Don't trigger if user is typing in form inputs, textareas, or contentEditable elements
      const target = document.activeElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          (target as HTMLElement).isContentEditable)
      ) {
        return;
      }

      // Check for key 'n' or 'N'
      if ((e.key === 'n' || e.key === 'N') && !isFlying && !reducedMotion) {
        setIsFlying(true);
        controls.set({ x: '-20vw', y: '30vh', opacity: 1 });
        
        await controls.start({
          x: '110vw',
          y: '35vh',
          transition: { duration: 5, ease: 'linear' },
        });

        setIsFlying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlying, reducedMotion, controls]);

  if (!isFlying || reducedMotion) return null;

  return (
    <motion.div
      animate={controls}
      className="fixed top-0 left-0 pointer-events-none z-50 flex items-center gap-1 select-none"
      style={{ y: '30vh' }}
    >
      {/* Rainbow Trail */}
      <div className="h-10 w-48 bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 via-blue-500 to-purple-500 rounded-full blur-[2px] opacity-80 animate-pulse shrink-0" />

      {/* Nyan Cat GIF Image */}
      <div className="relative w-20 h-20 shrink-0">
        <Image
          src="/nyan-cat.gif"
          alt="Nyan Cat"
          width={80}
          height={80}
          className="object-contain"
          unoptimized
        />
      </div>
    </motion.div>
  );
}
