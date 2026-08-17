'use client';

import React, { useEffect, useRef } from 'react';
import { ReactLenis, type LenisRef } from '@/lib/lenis';
import { useMotionPreference } from '@/hooks/use-motion-preference';
import gsap from 'gsap';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const { reducedMotion, ready } = useMotionPreference();
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    if (reducedMotion || !ready) return;

    function update() {
      lenisRef.current?.lenis?.raf(performance.now());
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, [reducedMotion, ready]);

  // If user prefers reduced motion or SSR is not ready, return native browser scroll
  if (reducedMotion || !ready) {
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
      }}
    >
      {children}
    </ReactLenis>
  );
}
