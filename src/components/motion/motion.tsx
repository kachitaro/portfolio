'use client';

import React from 'react';

import { MotionConfig, motion, type Variants } from 'framer-motion';

import { useMotionPreference } from '@/hooks/use-motion-preference';

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** Heading, then text, then picture: children of a Stagger inherit this. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

/** Phones get a shorter travel and a tighter stagger. */
const fadeUpCompact: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

const COMPACT_QUERY = '(max-width: 767px)';
const subscribeCompact = (callback: () => void) => {
  const query = window.matchMedia(COMPACT_QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
function useCompact() {
  return React.useSyncExternalStore(
    subscribeCompact,
    () => window.matchMedia(COMPACT_QUERY).matches,
    () => false,
  );
}

export const blurIn: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE_OUT } },
};

const stagger = (gap: number, delay = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap, delayChildren: delay } },
});

type TTag = 'div' | 'section' | 'ul' | 'ol' | 'li' | 'p' | 'h1' | 'h2' | 'h3' | 'dl';

interface IMotionProps extends React.HTMLAttributes<HTMLElement> {
  as?: TTag;
}

/** Content stays visible without JS: see the <noscript> rule in the root layout. */
const REVEAL_ATTR = { 'data-reveal': '' };

interface IStaggerProps extends IMotionProps {
  gap?: number;
  delay?: number;
  /** 'mount' runs once on load (hero); 'view' runs once when scrolled into view. */
  on?: 'mount' | 'view';
}

/** Parent that staggers its Item children. */
export function Stagger({
  as = 'div',
  gap = 0.08,
  delay = 0,
  on = 'view',
  ...props
}: IStaggerProps) {
  const isCompact = useCompact();
  const Tag = motion[as] as React.ElementType;
  const trigger =
    on === 'mount'
      ? { initial: 'hidden', animate: 'visible' }
      : {
          initial: 'hidden',
          whileInView: 'visible',
          viewport: { once: true, amount: 'some', margin: '0px 0px -10% 0px' },
        };
  return (
    <Tag
      variants={stagger(isCompact ? gap * 0.6 : gap, delay)}
      {...trigger}
      {...REVEAL_ATTR}
      {...props}
    />
  );
}

/** Child of Stagger. */
export function Item({ as = 'div', variants, ...props }: IMotionProps & { variants?: Variants }) {
  const isCompact = useCompact();
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag variants={variants ?? (isCompact ? fadeUpCompact : fadeUp)} {...REVEAL_ATTR} {...props} />
  );
}

/** Stand-alone reveal when scrolled into view, once. */
export function Reveal({ as = 'div', ...props }: IMotionProps) {
  const isCompact = useCompact();
  const Tag = motion[as] as React.ElementType;
  return (
    <Tag
      variants={isCompact ? fadeUpCompact : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 'some', margin: '0px 0px -10% 0px' }}
      {...REVEAL_ATTR}
      {...props}
    />
  );
}

/** Follows the site's motion toggle; with no choice made it follows the OS setting. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const { preference } = useMotionPreference();
  const reducedMotion = preference === 'on' ? 'always' : preference === 'off' ? 'never' : 'user';
  // Lets plain-CSS animations follow the site's motion toggle too.
  React.useEffect(() => {
    document.documentElement.dataset.reducedMotion = String(preference === 'on');
  }, [preference]);
  return <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>;
}
