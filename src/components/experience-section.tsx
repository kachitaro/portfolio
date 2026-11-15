'use client';

import React from 'react';

import { Section } from '@/components/section';
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

  return (
    <Section id="experience" title={t('Kinh nghiệm', 'Experience')} note={t('Từ 2022 đến nay', '2022 to now')}>
      <ol className="space-y-14 md:space-y-16">
        {experienceData.map((item) => {
          const duration =
            isMounted && item.start ? formatDuration(monthsBetween(item.start, item.end), language) : item.duration[language];
          return (
            <li key={item.id} className="grid gap-3 md:grid-cols-9 md:gap-10">
              <div className="text-neutral-11 text-sm md:col-span-3 md:pt-1.5">
                <p className="text-neutral-12 font-medium">{item.period[language]}</p>
                <p className="mt-0.5">{duration}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="display-section text-neutral-12 text-2xl font-semibold">
                  {item.role[language]}
                  <span className="text-neutral-11 font-normal">, {item.company}</span>
                </h3>
                <p className="text-neutral-11 mt-1 text-sm">
                  {item.employmentType[language]}, {item.workplaceType[language].toLowerCase()}
                </p>
                <p className="prose-serif text-neutral-12 mt-4">{item.description[language]}</p>
                <p className="text-neutral-11 mt-4 text-sm">{item.skills.join(', ')}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
