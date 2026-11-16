'use client';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { processData } from '@/data/portfolioData';

export function ProcessSection() {
  const { t, language } = useLanguage();

  return (
    <Section
      id="process"
      reveal={false}
      title={t('Cách làm việc', 'How I work')}
      note={t('Đơn giản, rõ ràng, không bất ngờ', 'Simple, clear, no surprises')}>
      <Stagger as="ol" className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {processData.map((step) => (
          <Item as="li" key={step.title.en}>
            <h3 className="display-section text-neutral-12 text-xl font-semibold">
              {step.title[language]}
            </h3>
            <p className="text-neutral-11 mt-2 text-[15px] leading-relaxed">
              {step.desc[language]}
            </p>
          </Item>
        ))}
      </Stagger>
    </Section>
  );
}
