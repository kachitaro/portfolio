'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { useTheme } from 'next-themes';

export function Spotlight() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const spotlightColor = resolvedTheme === 'dark'
    ? 'rgba(96, 165, 250, 0.12)'
    : 'rgba(59, 130, 246, 0.08)';

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ background }}
    />
  );
}
