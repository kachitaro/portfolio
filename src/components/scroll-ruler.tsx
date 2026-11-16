'use client';

import React from 'react';

import { useLanguage } from '@/context/language-context';
import { RULER_QUERY, RULER_RAIL_PX } from '@/lib/ruler';

const HEADER_PX = 64;
const FOOT_PX = 24;
const TICKS = Array.from({ length: 101 }, (_, i) => i);

const SECTIONS = [
  { id: 'work', vi: 'Dự án', en: 'Work' },
  { id: 'services', vi: 'Dịch vụ', en: 'Services' },
  { id: 'process', vi: 'Cách làm việc', en: 'How I work' },
  { id: 'about', vi: 'Về mình', en: 'About' },
  { id: 'experience', vi: 'Kinh nghiệm', en: 'Experience' },
  { id: 'stack', vi: 'Công nghệ', en: 'Stack' },
  { id: 'setup', vi: 'Môi trường', en: 'Setup' },
  { id: 'contact', vi: 'Liên hệ', en: 'Contact' },
] as const;

const subscribe = (callback: () => void) => {
  const query = window.matchMedia(RULER_QUERY);
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const getMatches = () => window.matchMedia(RULER_QUERY).matches;

/**
 * A ruler along the right edge in place of the native scrollbar: ticks that move with the page
 * (every tick is 1% of its height), a marker with the current percentage, drag and keyboard
 * control. Mouse and keyboard only; touch and small screens keep the native scrollbar.
 */
export function ScrollRuler() {
  const { t, language } = useLanguage();
  // Index of the section being read; -1 above the first one.
  const [current, setCurrent] = React.useState(-1);
  const isEnabled = React.useSyncExternalStore(subscribe, getMatches, () => false);
  const barRef = React.useRef<HTMLDivElement>(null);
  const ticksRef = React.useRef<HTMLDivElement>(null);
  const markRef = React.useRef<HTMLDivElement>(null);
  const readoutRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const html = document.documentElement;
    if (!isEnabled) {
      delete html.dataset.ruler;
      return;
    }
    html.dataset.ruler = 'on';
    html.style.setProperty('--ruler-rail', `${RULER_RAIL_PX}px`);

    let docHeight = html.scrollHeight;
    let frame = 0;

    const paint = () => {
      frame = 0;
      const max = Math.max(1, docHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      const travel = window.innerHeight - HEADER_PX - FOOT_PX;
      if (ticksRef.current) {
        ticksRef.current.style.height = `${docHeight}px`;
        ticksRef.current.style.transform = `translate3d(0, ${-window.scrollY}px, 0)`;
      }
      if (markRef.current) {
        markRef.current.style.transform = `translate3d(0, ${HEADER_PX + progress * travel}px, 0)`;
      }
      const percent = Math.round(progress * 100);
      if (readoutRef.current) {
        readoutRef.current.textContent = `${String(percent).padStart(3, '0')} %`;
      }
      barRef.current?.setAttribute('aria-valuenow', String(percent));

      let index = -1;
      SECTIONS.forEach((section, i) => {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          index = i;
        }
      });
      setCurrent(index);
    };
    const schedule = () => {
      if (!frame) {
        frame = requestAnimationFrame(paint);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      docHeight = html.scrollHeight;
      schedule();
    });
    resizeObserver.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    paint();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      delete html.dataset.ruler;
      html.style.removeProperty('--ruler-rail');
    };
  }, [isEnabled]);

  const scrollToPointer = (clientY: number) => {
    const travel = window.innerHeight - HEADER_PX - FOOT_PX;
    const progress = Math.min(1, Math.max(0, (clientY - HEADER_PX) / travel));
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: progress * max, behavior: 'instant' });
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    scrollToPointer(event.clientY);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      scrollToPointer(event.clientY);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent) => {
    const page = window.innerHeight * 0.9;
    const moves: Record<string, () => void> = {
      ArrowUp: () => window.scrollBy({ top: -80 }),
      ArrowDown: () => window.scrollBy({ top: 80 }),
      PageUp: () => window.scrollBy({ top: -page }),
      PageDown: () => window.scrollBy({ top: page }),
      Home: () => window.scrollTo({ top: 0 }),
      End: () => window.scrollTo({ top: document.documentElement.scrollHeight }),
    };
    const move = moves[event.key];
    if (move) {
      event.preventDefault();
      move();
    }
  };

  if (!isEnabled) {
    return null;
  }

  const upcoming = SECTIONS.slice(current + 1, current + 4);

  return (
    <>
      <div
        ref={barRef}
        role="scrollbar"
        aria-controls="main"
        aria-orientation="vertical"
        aria-label={t('Thanh cuộn trang', 'Page scroll')}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
        style={{ width: RULER_RAIL_PX, touchAction: 'none' }}
        className="focus-visible:outline-brand-8 fixed top-0 right-0 bottom-0 z-40 cursor-pointer overflow-hidden select-none focus-visible:outline-2 focus-visible:-outline-offset-2">
        <div ref={ticksRef} aria-hidden className="absolute inset-x-0 top-0 will-change-transform">
          {TICKS.map((tick) => {
            const isMajor = tick % 10 === 0;
            const isMid = tick % 5 === 0;
            return (
              <span
                key={tick}
                className="absolute right-0 flex items-center"
                style={{ top: `${tick}%`, transform: 'translateY(-50%)' }}>
                {isMajor && (
                  <span className="text-neutral-10 mr-1.5 text-[10px] leading-none tabular-nums">
                    {tick}
                  </span>
                )}
                <span
                  className={
                    isMajor
                      ? 'bg-neutral-10 h-px w-5'
                      : isMid
                        ? 'bg-neutral-9 h-px w-3.5'
                        : 'bg-neutral-7 h-px w-2'
                  }
                />
              </span>
            );
          })}
        </div>
        <div ref={markRef} aria-hidden className="absolute inset-x-0 top-0 will-change-transform">
          <div className="bg-brand-9 h-0.5 w-full" />
          <span
            ref={readoutRef}
            className="bg-brand-9 text-brand-contrast absolute top-1 right-0 rounded-l-sm px-1.5 py-0.5 text-[10px] leading-none font-medium tabular-nums"
          />
        </div>
      </div>
      <nav
        aria-label={t('Các phần của trang', 'Page sections')}
        style={{ right: RULER_RAIL_PX + 16 }}
        className="fixed top-1/2 z-40 hidden -translate-y-1/2 text-right min-[1700px]:block">
        {current >= 0 && (
          <a
            href={`#${SECTIONS[current].id}`}
            aria-current="location"
            className="text-neutral-12 block text-base leading-tight font-semibold">
            {SECTIONS[current][language]}
          </a>
        )}
        <ul className="mt-1 space-y-0.5">
          {upcoming.map((section, i) => (
            <li key={section.id} style={{ opacity: 0.6 - i * 0.15 }}>
              <a
                href={`#${section.id}`}
                className="text-neutral-11 hover:text-neutral-12 text-sm leading-tight">
                {section[language]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
