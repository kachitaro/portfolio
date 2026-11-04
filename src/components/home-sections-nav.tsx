'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { useLanguage } from '@/context/language-context';
import { experienceData, projectsData } from '@/data/portfolioData';

function SectionHeader({ title, href, label }: { title: string; href: string; label: string }) {
  return (
    <div className="border-border mb-2 flex items-end justify-between border-b pb-4">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <Link
        href={href}
        className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors">
        {label}
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}

export function HomeSectionsNav() {
  const { language, t } = useLanguage();
  const projects = projectsData.filter((p) => p.featured);

  return (
    <div className="mx-auto w-full max-w-5xl space-y-24 px-4 pb-32 sm:px-6">
      <section>
        <SectionHeader
          title={t('Dự án tiêu biểu', 'Selected work')}
          href="/projects"
          label={t('Tất cả dự án', 'All projects')}
        />
        <ul className="divide-border divide-y">
          {projects.map((p) => (
            <li key={p.id} className="grid gap-3 py-8 md:grid-cols-[1fr_2fr] md:gap-10">
              <div>
                <h3 className="text-lg font-medium">{p.title[language]}</h3>
                {p.status && (
                  <p className="text-muted-foreground mt-1 font-mono text-xs">
                    {p.company} · {p.status[language]}
                  </p>
                )}
              </div>
              <div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description[language]}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 font-mono text-xs">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeader
          title={t('Kinh nghiệm', 'Experience')}
          href="/experience"
          label={t('Chi tiết', 'Details')}
        />
        <ul className="divide-border divide-y">
          {experienceData.map((e) => (
            <li key={e.id} className="grid gap-1 py-6 md:grid-cols-[1fr_2fr] md:gap-10">
              <p className="text-muted-foreground font-mono text-xs md:pt-1">
                {e.period[language]}
              </p>
              <div>
                <h3 className="font-medium">
                  {e.role[language]} · {e.company}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">{e.duration[language]}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="max-w-xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {t('Có ý tưởng cần làm? Hãy nói chuyện.', 'Have something to build? Let’s talk.')}
        </h2>
        <Link
          href="/contact"
          className="bg-foreground text-background inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-85">
          {t('Liên hệ', 'Contact me')}
          <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
