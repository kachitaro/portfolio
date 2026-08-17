'use client';
import React from 'react';

import { Building2, CheckCircle, Lock, Search, X } from 'lucide-react';
import Image from 'next/image';

import { GithubIcon } from '@/components/icons/github-icon';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { TiltCard } from '@/components/ui/tilt-card';
import { useLanguage } from '@/context/language-context';
import { projectsData } from '@/data/portfolioData';
import { type IProject } from '@/types/portfolio';

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedProject, setSelectedProject] = React.useState<IProject | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (!searchQuery.trim()) {
      return projectsData;
    }
    const q = searchQuery.toLowerCase();
    return projectsData.filter((p) => {
      return (
        p.title[language].toLowerCase().includes(q) ||
        p.description[language].toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        (p.company && p.company.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, language]);

  React.useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup khi modal đóng
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge
              variant="outline"
              className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
              {t('Dự án thực tế', 'Enterprise Work')}
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t('Các dự án doanh nghiệp đã & đang phát triển', 'Production Systems & Key Works')}
            </h2>
            <p className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base">
              {t(
                'Những hệ thống phần mềm thực tế quy mô lớn mà tôi đã và đang trực tiếp tham gia thiết kế & phát triển.',
                'Enterprise platforms and production software solutions engineered and scaled in production.',
              )}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="text-muted-foreground absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t('Tìm kiếm dự án, công nghệ...', 'Search projects or stack...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-background/80 glass-panel border-border/60 focus:ring-primary/40 placeholder:text-muted-foreground/70 w-full rounded-full border py-2.5 pr-4 pl-10 text-xs shadow-xs transition-all focus:ring-2 focus:outline-hidden sm:text-sm"
            />
          </div>
        </div>

        {/* Projects Grid with TiltCards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer rounded-3xl">
              <div className="glass-panel border-border/60 hover:border-primary/40 group flex h-full flex-col justify-between overflow-hidden rounded-3xl transition-all duration-300 hover:shadow-2xl">
                {/* Image Container */}
                <div className="bg-muted relative h-52 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="from-background via-background/20 absolute inset-0 bg-linear-to-t to-transparent opacity-90" />

                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5">
                      {project.status.en.includes('Active') ? (
                        <Badge className="gap-1.5 border-none bg-amber-500/90 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                          </span>
                          {project.status[language]}
                        </Badge>
                      ) : (
                        <Badge className="gap-1 border-none bg-emerald-600/90 text-[11px] font-semibold text-white shadow-sm backdrop-blur-md">
                          <CheckCircle className="h-3 w-3" />
                          {project.status[language]}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Company Tag */}
                  {project.company && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-background/90 text-foreground border-border/60 inline-flex items-center gap-1 rounded-md border px-2.5 py-1 text-xs font-semibold shadow-xs backdrop-blur-md">
                        <Building2 className="text-primary h-3.5 w-3.5" />
                        {project.company}
                      </span>
                    </div>
                  )}

                  {/* Tech Tags on Image */}
                  <div className="absolute right-3 bottom-3 left-3 z-10 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-background/90 border-border/50 text-foreground rounded-md border px-2 py-0.5 font-mono text-[10px] font-medium backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-background/90 border-border/50 text-muted-foreground rounded-md border px-1.5 py-0.5 font-mono text-[10px] font-medium backdrop-blur-md">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Info */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-foreground group-hover:text-primary mb-2 text-lg leading-snug font-bold transition-colors">
                      {project.title[language]}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-xs leading-relaxed">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="border-border/40 mb-4 space-y-1.5 border-t pt-3">
                    {project.highlights[language].slice(0, 2).map((hl, idx) => (
                      <div
                        key={idx}
                        className="text-foreground/80 flex items-start gap-1.5 text-xs">
                        <CheckCircle className="text-primary mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-border/40 text-muted-foreground flex items-center justify-between border-t pt-2 text-xs">
                    <span className="flex items-center gap-1 text-[11px] font-medium">
                      <Lock className="h-3 w-3" />
                      {t('Doanh nghiệp (NDA)', 'Enterprise NDA')}
                    </span>
                    <span className="text-primary font-semibold transition-transform group-hover:translate-x-1">
                      {t('Xem chi tiết ↗', 'View Details ↗')}
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="glass-panel border-border/60 rounded-3xl py-20 text-center">
            <Search className="text-muted-foreground mx-auto mb-3 h-10 w-10 opacity-60" />
            <h3 className="text-foreground mb-1 text-base font-bold">
              {t('Không tìm thấy dự án phù hợp', 'No projects found')}
            </h3>
            <p className="text-muted-foreground text-xs">
              {t('Hãy thử tìm kiếm với từ khóa khác.', 'Try adjusting your search terms.')}
            </p>
          </div>
        )}

        {/* GitHub Repositories Link CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/kachitaro"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className:
                'glass-panel hover:bg-muted/80 cursor-pointer gap-2 rounded-full px-6 shadow-xs',
            })}>
            <GithubIcon className="text-primary h-4 w-4" />
            <span>{t('Xem hoạt động trên GitHub của tôi', 'Visit My GitHub Profile')}</span>
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="bg-background/80 animate-in fade-in fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md duration-200"
          onClick={() => setSelectedProject(null)}>
          <div
            className="glass-panel border-border/60 animate-in zoom-in-95 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border p-6 shadow-2xl duration-200 sm:p-8"
            onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {selectedProject.company && (
                    <span className="bg-primary/10 text-primary border-primary/20 rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {selectedProject.company}
                    </span>
                  )}
                  {selectedProject.status && (
                    <span className="bg-muted text-foreground border-border rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      {selectedProject.status[language]}
                    </span>
                  )}
                </div>
                <h3 className="text-foreground text-2xl font-bold">
                  {selectedProject.title[language]}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="hover:bg-muted h-8 w-8 shrink-0 rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Modal Image */}
            <div className="bg-muted relative mb-6 h-56 w-full overflow-hidden rounded-2xl">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title[language]}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Detailed Description */}
            <div className="text-foreground/90 mb-6 space-y-4 text-sm leading-relaxed">
              <h4 className="text-muted-foreground font-mono text-xs font-bold tracking-wider uppercase">
                {t('Mô tả hệ thống & Phạm vi dự án', 'System Overview & Scope')}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.description[language]}
              </p>
            </div>

            {/* Key Architectural Highlights */}
            <div className="border-border/40 mb-6 space-y-3 border-t pt-4">
              <h4 className="text-primary font-mono text-xs font-bold tracking-wider uppercase">
                {t(
                  'Điểm nổi bật & Đóng góp kỹ thuật',
                  'Key Contributions & Engineering Highlights',
                )}
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights[language].map((hl, idx) => (
                  <div
                    key={idx}
                    className="text-foreground/90 flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="border-border/40 border-t pt-4">
              <h4 className="text-muted-foreground mb-2.5 font-mono text-xs font-bold tracking-wider uppercase">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-background/80 border-border text-foreground rounded-lg border px-3 py-1 font-mono text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
