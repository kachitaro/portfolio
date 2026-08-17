'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const emptySubscribe = () => () => {};

export function ScrollProgress() {
  const isMounted = React.useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-100 h-1 origin-left bg-linear-to-r from-sky-400 via-indigo-500 to-teal-400"
      style={{ scaleX }}
    />
  );
}
