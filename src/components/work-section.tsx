'use client';

import { Plus } from 'lucide-react';

import { Section } from '@/components/section';
import { useLanguage } from '@/context/language-context';
import { projectsData } from '@/data/portfolioData';

export function WorkSection() {
  const { t, language } = useLanguage();

  return (
    <Section
      id="work"
      title={t('Dự án', 'Work')}
      note={t(`${projectsData.length} dự án, tại Nexpando và Techbee`, `${projectsData.length} projects, at Nexpando and Techbee`)}>
      <ul className="divide-neutral-4 border-neutral-4 divide-y border-y">
        {projectsData.map((project) => (
          <li key={project.id}>
            <details className="group">
              <summary className="hover:bg-neutral-2 -mx-3 flex cursor-pointer list-none gap-6 rounded-lg px-3 py-7 transition-colors md:py-9 [&::-webkit-details-marker]:hidden">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="display-section text-neutral-12 text-2xl font-semibold md:text-[1.75rem]">
                      {project.title[language]}
                    </h3>
                    {project.status && (
                      <span className="text-brand-11 text-sm font-medium">{project.status[language]}</span>
                    )}
                  </div>
                  <p className="prose-serif text-neutral-11 mt-3">{project.description[language]}</p>
                  <p className="text-neutral-11 mt-4 text-sm">{project.tags.join(', ')}</p>
                </div>
                <span
                  aria-hidden
                  className="border-neutral-6 text-neutral-11 group-open:bg-neutral-12 group-open:text-neutral-1 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color] duration-200 group-open:rotate-45">
                  <Plus className="h-4 w-4" />
                </span>
                <span className="sr-only">{t('Xem việc mình đã làm', 'Show what I did')}</span>
              </summary>

              <div className="pb-9">
                <h4 className="text-neutral-12 text-sm font-semibold">{t('Phần mình làm', 'What I did')}</h4>
                <ul className="prose-serif text-neutral-12 mt-3 space-y-2">
                  {project.highlights[language].map((item) => (
                    <li key={item} className="marker:text-brand-9 ml-5 list-disc pl-1">
                      {item}
                    </li>
                  ))}
                </ul>
                {(project.demoUrl || project.githubUrl) && (
                  <div className="mt-5 flex gap-5 text-sm font-medium">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-brand-11 underline-offset-4 hover:underline">
                        {t('Mở trang', 'Open site')}
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-brand-11 underline-offset-4 hover:underline">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
