'use client';

import React from 'react';

import gsap from 'gsap';

import { useMotionPreference } from '@/hooks/use-motion-preference';
import { ReactLenis, type LenisRef } from '@/lib/lenis';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { isReducedMotion, isReady } = useMotionPreference();
  const lenisRef = React.useRef<LenisRef>(null);

  React.useEffect(() => {
    if (isReducedMotion || !isReady) {
      return;
    }

    function update() {
      lenisRef.current?.lenis?.raf(performance.now());
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [isReducedMotion, isReady]);

  if (isReducedMotion || !isReady) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        autoRaf: false, // Managed manually via GSAP ticker
      }}>
      {children}
    </ReactLenis>
  );
}
