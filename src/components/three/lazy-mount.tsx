'use client';

import React from 'react';

interface ILazyMountProps {
  children: React.ReactNode;
  /** 'idle' mounts once the browser is idle after first paint; 'view' mounts when near the viewport. */
  when: 'idle' | 'view';
  /** Skip below this viewport width in px (3D that is only worth it on larger screens). */
  minWidth?: number;
  rootMargin?: string;
  className?: string;
}

/** Keeps the Three.js chunk and WebGL setup out of the initial load. */
export function LazyMount({
  children,
  when,
  minWidth = 0,
  rootMargin = '300px',
  className,
}: ILazyMountProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth < minWidth) {
      return;
    }
    if (when === 'idle') {
      // After the page's own load plus a pause (so the headline has painted and the page is
      // interactive), then when the browser has nothing else to do. The 3D is decoration only.
      let idleId = 0;
      let timerId = 0;
      const schedule = () => {
        timerId = window.setTimeout(() => {
          if (window.requestIdleCallback) {
            idleId = window.requestIdleCallback(() => setMounted(true), { timeout: 2000 });
          } else {
            setMounted(true);
          }
        }, 2500);
      };
      if (document.readyState === 'complete') {
        schedule();
      } else {
        window.addEventListener('load', schedule, { once: true });
      }
      return () => {
        window.removeEventListener('load', schedule);
        window.clearTimeout(timerId);
        if (idleId && window.cancelIdleCallback) {
          window.cancelIdleCallback(idleId);
        }
      };
    }
    const el = ref.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [when, minWidth, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isMounted ? children : null}
    </div>
  );
}
