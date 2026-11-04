'use client';

import { Reveal } from '@/components/reveal';
import { useLanguage } from '@/context/language-context';
import { personalInfo, toolchainGroups } from '@/data/personal';

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" aria-labelledby="about-title" className="page section-y">
      <div className="grid-page gap-y-8 lg:gap-y-16">
        <Reveal as="h2" id="about-title" className="text-title col-span-full lg:col-span-4">
          {t('Giới thiệu', 'About')}
        </Reveal>

        <Reveal as="p" delay={80} className="text-lead col-span-full lg:col-span-8 lg:col-start-5">
          {personalInfo.bio[language]}
        </Reveal>

        <div className="col-span-full grid gap-8 lg:col-span-4 lg:col-start-5">
          <Reveal as="p" className="text-body">
            {personalInfo.intro[language]}
          </Reveal>
          <Reveal as="ul" delay={80} className="text-body grid gap-3">
            {personalInfo.services[language].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="dl"
          delay={160}
          className="text-data col-span-full grid content-start gap-4 lg:col-span-4 lg:col-start-9">
          <div>
            <dt className="text-muted-foreground">{t('Nơi ở', 'Location')}</dt>
            <dd>{personalInfo.location[language]}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">{t('Cấp độ', 'Level')}</dt>
            <dd>{personalInfo.level[language]}</dd>
          </div>
          {toolchainGroups.map((group) => (
            <div key={group.category.en}>
              <dt className="text-muted-foreground">{group.category[language]}</dt>
              <dd>{group.items.join(', ')}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
