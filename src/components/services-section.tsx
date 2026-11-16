'use client';

import { ArrowUpRight } from 'lucide-react';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { servicesData } from '@/data/portfolioData';
import { setInquiryTopic } from '@/lib/inquiry';

export function ServicesSection() {
  const { t, language } = useLanguage();

  return (
    <Section
      id="services"
      reveal={false}
      title={t('Dịch vụ', 'Services')}
      note={t(
        'Frontend, từ ý tưởng đến bản chạy được',
        'Frontend, from idea to a working release',
      )}>
      <Stagger as="ul" className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
        {servicesData.map((service) => (
          <Item as="li" key={service.id}>
            <h3 className="display-section text-neutral-12 text-xl font-semibold">
              {service.title[language]}
            </h3>
            <p className="text-neutral-12 mt-2 text-[15px] leading-relaxed">
              {service.desc[language]}
            </p>
            <p className="text-neutral-11 mt-2 text-sm">{service.proof[language]}</p>
            <a
              href="#contact"
              onClick={() => setInquiryTopic(service.id)}
              className="tap-target text-brand-11 group mt-3 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
              {t('Hỏi về việc này', 'Ask about this')}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </Item>
        ))}
      </Stagger>
    </Section>
  );
}
