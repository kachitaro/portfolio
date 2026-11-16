'use client';

import { ArrowUpRight, Plus } from 'lucide-react';

import { Item, Stagger } from '@/components/motion/motion';
import { Section } from '@/components/section';
import { TechList } from '@/components/tech-list';
import { TiltCard } from '@/components/ui/tilt-card';
import { useLanguage } from '@/context/language-context';
import { projectsData, rebuildsData } from '@/data/portfolioData';
import { setInquiryTopic } from '@/lib/inquiry';

export function WorkSection() {
  const { t, language } = useLanguage();

  return (
    <Section
      id="work"
      reveal={false}
      title={t('Dự án tiêu biểu', 'Selected work')}
      note={t(
        'Mỗi dự án ghi rõ phần mình làm và phần của team',
        'Each project shows what I built and what the team did',
      )}>
      <Stagger as="ul" className="divide-neutral-4 border-neutral-4 divide-y border-y">
        {projectsData.map((project, index) => (
          <Item as="li" key={project.id} style={{ perspective: 1200 }}>
            <TiltCard range={3}>
              <details className="group" open={index === 0}>
                <summary className="hover:bg-neutral-2 -mx-3 flex cursor-pointer list-none gap-6 rounded-lg px-3 py-7 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 md:py-9 [&::-webkit-details-marker]:hidden">
                  <div className="min-w-0 flex-1">
                    <div>
                      <h3 className="display-section text-neutral-12 text-2xl font-semibold md:text-[1.75rem]">
                        {project.title[language]}
                      </h3>
                    </div>
                    <p className="text-neutral-11 mt-1 text-sm">{project.role[language]}</p>
                    <p className="prose-serif text-neutral-12 mt-3">{project.overview[language]}</p>
                    <TechList items={project.tags} className="mt-4" />
                  </div>
                  <span
                    aria-hidden
                    className="border-neutral-6 text-neutral-11 group-open:bg-neutral-12 group-open:text-neutral-1 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color] duration-200 group-open:rotate-45">
                    <Plus className="h-4 w-4" />
                  </span>
                  <span className="sr-only">{t('Xem chi tiết dự án', 'Show project details')}</span>
                </summary>

                <div className="grid gap-8 pb-9 md:grid-cols-2 md:gap-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-neutral-12 text-sm font-semibold">
                        {t('Bối cảnh', 'Context')}
                      </h4>
                      <p className="prose-serif text-neutral-12 mt-2">
                        {project.context[language]}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-neutral-12 text-sm font-semibold">
                        {t('Phần mình làm', 'What I built')}
                      </h4>
                      <ul className="prose-serif text-neutral-12 mt-2 space-y-2">
                        {project.contribution[language].map((line) => (
                          <li key={line} className="marker:text-brand-9 ml-5 list-disc pl-1">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-neutral-12 text-sm font-semibold">
                        {t('Điểm nhấn kỹ thuật', 'Technical highlights')}
                      </h4>
                      <ul className="prose-serif text-neutral-12 mt-2 space-y-2">
                        {project.highlights[language].map((line) => (
                          <li key={line} className="marker:text-brand-9 ml-5 list-disc pl-1">
                            {line}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-neutral-12 text-sm font-semibold">
                        {t('Phần của team', "The team's part")}
                      </h4>
                      <p className="prose-serif text-neutral-11 mt-2">{project.team[language]}</p>
                    </div>
                    <a
                      href="#contact"
                      onClick={() => setInquiryTopic(project.topic)}
                      className="tap-target text-brand-11 group/cta inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
                      {t(
                        'Cần một dự án tương tự? Kể mình nghe',
                        'Need something similar? Tell me about it',
                      )}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                        aria-hidden
                      />
                    </a>
                  </div>
                </div>
              </details>
            </TiltCard>
          </Item>
        ))}
      </Stagger>
      <ul className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {rebuildsData.map((site) => (
          <li key={site.id}>
            <h4 className="text-neutral-12 text-[15px] font-medium">{site.title[language]}</h4>
            <p className="text-neutral-11 mt-1 text-[15px] leading-relaxed">
              {site.note[language]}
            </p>
            <TechList items={site.tags} className="mt-3" />
            <a
              href={site.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target text-brand-11 group mt-3 inline-flex items-center gap-1 text-sm font-medium underline-offset-4 hover:underline">
              {t('Mở trang', 'Open site')}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
