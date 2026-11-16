'use client';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { aboutData } from '@/data/portfolioData';

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <Section id="about" reveal={false} title={t('Về mình', 'About me')}>
      <Stagger gap={0.08}>
        {aboutData.paragraphs[language].map((paragraph, index) => (
          // Keyed by position so switching language keeps the same animated element.
          <Item as="p" key={index} className="prose-serif text-neutral-12 mb-5 last:mb-0">
            {paragraph}
          </Item>
        ))}
        <Item as="dl" className="mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-3">
          {aboutData.facts[language].map((fact) => (
            <div key={fact.label}>
              <dt className="text-neutral-11 text-sm">{fact.label}</dt>
              <dd className="text-neutral-12 mt-1 text-[15px] font-medium">{fact.value}</dd>
            </div>
          ))}
        </Item>
      </Stagger>
    </Section>
  );
}
