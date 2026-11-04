'use client';

import { Reveal } from '@/components/reveal';
import { buttonVariants } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="page section-y">
      <Reveal as="h1" className="text-display">
        {t('Xây giao diện web chính xác', 'Building precise web interfaces')}
      </Reveal>

      <div className="grid-page mt-8 items-end gap-y-8 lg:mt-12">
        <Reveal as="p" delay={80} className="text-lead col-span-full lg:col-span-5">
          {t(
            `${personalInfo.name}, kỹ sư phần mềm tại Nexpando. React, Next.js và TypeScript trên các nền tảng đang vận hành.`,
            `${personalInfo.name}, software engineer at Nexpando. React, Next.js and TypeScript on production platforms.`,
          )}
        </Reveal>

        <Reveal
          delay={160}
          className="col-span-full flex lg:col-span-3 lg:col-start-10 lg:justify-end">
          <a href="#work" className={`${buttonVariants()} w-full lg:w-auto`}>
            {t('Xem dự án', 'View work')}
            <ArrowDown aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
