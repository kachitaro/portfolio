'use client';

import { Reveal } from '@/components/reveal';
import { SeatMapMockup } from '@/components/seat-map-mockup';
import { useLanguage } from '@/context/language-context';
import { projectsData } from '@/data/projects';

export function FeaturedSection() {
  const { t, language } = useLanguage();
  const [featured, ...others] = projectsData;

  return (
    <section id="work" aria-labelledby="work-title" className="page section-y">
      <div className="grid-page gap-y-8 lg:gap-y-16">
        <div className="col-span-full lg:col-span-4 lg:row-start-1">
          <Reveal as="h2" id="work-title" className="text-title">
            {featured.name}
          </Reveal>
          <Reveal as="p" delay={80} className="text-body mt-4">
            {featured.title[language]}
          </Reveal>
          <Reveal as="dl" delay={160} className="text-data mt-8 grid gap-y-2">
            <div>
              <dt className="text-muted-foreground">{t('Công ty', 'Company')}</dt>
              <dd>{featured.company}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t('Trạng thái', 'Status')}</dt>
              <dd>{featured.status[language]}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">{t('Công nghệ', 'Stack')}</dt>
              <dd>{featured.tags.join(', ')}</dd>
            </div>
          </Reveal>
        </div>

        <Reveal className="col-span-full lg:col-span-8 lg:col-start-5 lg:row-start-1">
          <figure className="bg-muted -mx-4 flex flex-col items-center gap-4 px-4 py-8 md:mx-0 md:px-8 lg:py-12">
            <SeatMapMockup />
            <figcaption className="text-data text-muted-foreground">
              {t(
                'Minh họa bước chọn ghế, dữ liệu mẫu',
                'Seat selection step, illustrated with sample data',
              )}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="text-body col-span-full lg:col-span-4 lg:col-start-5 lg:row-start-2">
          {featured.description[language]}
        </Reveal>

        <Reveal
          as="ul"
          delay={80}
          className="text-body col-span-full grid gap-3 lg:col-span-4 lg:col-start-9 lg:row-start-2">
          {featured.highlights[language].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Reveal>
      </div>

      <div className="mt-16 grid gap-y-12 lg:mt-24 lg:gap-y-16">
        {others.map((project) => (
          <div key={project.id} className="grid-page gap-y-4">
            <Reveal as="h3" className="text-lead col-span-full font-semibold lg:col-span-4">
              {project.name}
            </Reveal>
            <Reveal delay={80} className="text-body col-span-full lg:col-span-4 lg:col-start-5">
              <p>{project.description[language]}</p>
            </Reveal>
            <Reveal delay={160} className="text-data col-span-full lg:col-span-4 lg:col-start-9">
              <p>{project.status[language]}</p>
              <p className="text-muted-foreground mt-2">{project.tags.join(', ')}</p>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
