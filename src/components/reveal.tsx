'use client';

import React from 'react';

type TRevealTag = 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'ul' | 'ol' | 'dl' | 'li' | 'section';

interface IRevealProps {
  as?: TRevealTag;
  /** Stagger offset in ms (60–90 per step). */
  delay?: number;
  className?: string;
  id?: string;
  children?: React.ReactNode;
}

/**
 * Fade-up entrance, once. Content is visible without JS: the element is only hidden
 * after the observer is armed, and never under prefers-reduced-motion.
 */
export function Reveal({ as = 'div', delay = 0, className, id, children }: IRevealProps) {
  const ref = React.useRef<HTMLElement>(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    el.dataset.armed = 'true';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.in = 'true';
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      id,
      className,
      style: delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined,
    },
    children,
  );
}
