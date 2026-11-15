'use client';

import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { personalInfo, toolchainGroups } from '@/data/portfolioData';

export function StackSection() {
  const { t, language } = useLanguage();

  return (
    <Section id="stack" title={t('Công nghệ', 'Stack')}>
      <p className="prose-serif text-neutral-12">{personalInfo.bio[language]}</p>

      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {toolchainGroups.map((group) => (
          <div key={group.category.en}>
            <h3 className="text-neutral-12 border-neutral-4 border-b pb-3 text-base font-semibold">
              {group.category[language]}
            </h3>
            <ul className="text-neutral-11 mt-3 space-y-1.5 text-[15px]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="text-neutral-12 mt-16 text-base font-semibold">{t('Việc mình nhận', 'What I can take on')}</h3>
      <dl className="mt-4 grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {personalInfo.services[language].map((service) => (
          <div key={service.title}>
            <dt className="text-neutral-12 text-[15px] font-medium">{service.title}</dt>
            <dd className="text-neutral-11 mt-1 text-[15px] leading-relaxed">{service.desc}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
