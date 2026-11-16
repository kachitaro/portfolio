'use client';

import React from 'react';

import { motion, useScroll, useSpring } from 'framer-motion';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { LazyMount } from '@/components/three/lazy-mount';
import { TimelineScene } from '@/components/three/lazy-scenes';
import { TechList } from '@/components/tech-list';
import { useLanguage } from '@/context/language-context';
import { experienceData } from '@/data/portfolioData';
import { type TLanguage } from '@/types/portfolio';

function monthsBetween(start: string, end?: string) {
  const [sy, sm] = start.split('-').map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  // Inclusive of both the first and last month, like LinkedIn counts it.
  return (ey - sy) * 12 + (em - sm) + 1;
}

function formatDuration(months: number, lang: TLanguage) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  if (lang === 'vi') {
    return [years && `${years} năm`, rest && `${rest} tháng`].filter(Boolean).join(' ');
  }
  return [years && `${years} yr${years > 1 ? 's' : ''}`, rest && `${rest} mo${rest > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' ');
}

export function ExperienceSection() {
  const { t, language } = useLanguage();
  // Durations depend on today's date, so compute them only after mount to avoid a hydration mismatch.
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  // The timeline line fills as the list scrolls past the middle of the screen.
  const listRef = React.useRef<HTMLOListElement>(null);
  const railRef = React.useRef<HTMLDivElement>(null);
  // When the 3D rail runs it replaces the CSS line and dots; without WebGL the CSS ones stay.
  const [isThree, setThree] = React.useState(false);
  const getMarkers = React.useCallback(
    () =>
      Array.from(listRef.current?.children ?? []).map((li) => (li as HTMLElement).offsetTop + 13),
    [],
  );
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  return (
    <Section
      id="experience"
      reveal={false}
      title={t('Kinh nghiệm', 'Experience')}
      note={t('Từ 2022 đến nay', '2022 to now')}>
      <div ref={railRef} className="relative pl-6 md:pl-8">
        <LazyMount
          when="view"
          minWidth={768}
          className="pointer-events-none absolute top-0 bottom-0 -left-7 hidden w-14 md:block">
          <TimelineScene
            className="h-full w-full"
            getMarkers={getMarkers}
            onReady={() => setThree(true)}
            onUnavailable={() => setThree(false)}
          />
        </LazyMount>
        {!isThree && (
          <>
            <span aria-hidden className="bg-neutral-5 absolute top-2 bottom-2 left-0 w-px" />
            <motion.span
              aria-hidden
              style={{ scaleY: fill }}
              className="bg-brand-9 absolute top-2 bottom-2 left-0 w-px origin-top"
            />
          </>
        )}
        <ol ref={listRef} className="space-y-14 md:space-y-16">
          {experienceData.map((item) => {
            const duration =
              isMounted && item.start
                ? formatDuration(monthsBetween(item.start, item.end), language)
                : item.duration[language];
            const isCurrent = !item.end;
            return (
              <Stagger as="li" key={item.id} gap={0.1} className="relative">
                {!isThree && (
                  <span
                    aria-hidden
                    className={
                      isCurrent
                        ? 'bg-brand-9 ring-brand-4 absolute top-2 -left-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 md:-left-8'
                        : 'bg-neutral-7 absolute top-2 -left-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full md:-left-8'
                    }
                  />
                )}
                <Item as="h3" className="display-section text-neutral-12 text-2xl font-semibold">
                  {item.role[language]}
                  <span
                    className={
                      isCurrent ? 'text-brand-11 font-normal' : 'text-neutral-11 font-normal'
                    }>
                    , {item.company}
                  </span>
                </Item>
                <Item as="p" className="text-neutral-11 mt-2 text-sm">
                  <span className="text-neutral-12 font-medium">{item.period[language]}</span>
                  {' · '}
                  {duration}
                  {' · '}
                  {item.employmentType[language]}, {item.workplaceType[language].toLowerCase()}
                </Item>
                <Item as="ul" className="prose-serif text-neutral-12 mt-4 list-disc space-y-2 pl-5">
                  {item.description[language].map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </Item>
                <Item className="mt-4">
                  <TechList items={item.skills} />
                </Item>
              </Stagger>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
