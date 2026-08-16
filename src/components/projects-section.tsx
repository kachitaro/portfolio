'use client';

import React, { useState, useMemo } from 'react';
import { useLanguage } from '@/context/language-context';
import { projectsData } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';
import { Badge } from '@/components/ui/badge';
import { TiltCard } from '@/components/ui/tilt-card';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Building2,
  CheckCircle,
  FolderGit2,
  Lock,
  Search,
  Sparkles,
  X,
  ExternalLink,
  Layers,
  Calendar
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import Image from 'next/image';

export function ProjectsSection() {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projectsData;
    const q = searchQuery.toLowerCase();
    return projectsData.filter((p) => {
      return (
        p.title[language].toLowerCase().includes(q) ||
        p.description[language].toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.company && p.company.toLowerCase().includes(q))
      );
    });
  }, [searchQuery, language]);

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
              {t('Dự án thực tế', 'Enterprise Work')}
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t('Các dự án doanh nghiệp đã & đang phát triển', 'Production Systems & Key Works')}
            </h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base max-w-2xl">
              {t(
                'Những hệ thống phần mềm thực tế quy mô lớn mà tôi đã và đang trực tiếp tham gia thiết kế & phát triển.',
                'Enterprise platforms and production software solutions engineered and scaled in production.'
              )}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t('Tìm kiếm dự án, công nghệ...', 'Search projects or stack...')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-background/80 glass-panel border border-border/60 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground/70 shadow-xs"
            />
          </div>
        </div>

        {/* Projects Grid with TiltCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <TiltCard
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-3xl cursor-pointer"
            >
              <div className="glass-panel rounded-3xl overflow-hidden border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group h-full">
                
                {/* Image Container */}
                <div className="relative w-full h-52 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  
                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-10">
                      {project.status.en.includes('Active') ? (
                        <Badge className="bg-amber-500/90 text-white border-none gap-1.5 shadow-sm font-semibold text-[11px] backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          {project.status[language]}
                        </Badge>
                      ) : (
                        <Badge className="bg-emerald-600/90 text-white border-none gap-1 shadow-sm font-semibold text-[11px] backdrop-blur-md">
                          <CheckCircle className="w-3 h-3" />
                          {project.status[language]}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Company Tag */}
                  {project.company && (
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md text-xs font-semibold text-foreground border border-border/60 shadow-xs">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                        {project.company}
                      </span>
                    </div>
                  )}

                  {/* Tech Tags on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-background/90 backdrop-blur-md text-[10px] font-mono font-medium border border-border/50 text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-background/90 backdrop-blur-md text-[10px] font-mono font-medium border border-border/50 text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content Info */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                      {project.title[language]}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                      {project.description[language]}
                    </p>
                  </div>

                  {/* Highlights Bullet points */}
                  <div className="pt-3 border-t border-border/40 space-y-1.5 mb-4">
                    {project.highlights[language].slice(0, 2).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-foreground/80">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-border/40 text-muted-foreground">
                    <span className="flex items-center gap-1 font-medium text-[11px]">
                      <Lock className="w-3 h-3" />
                      {t('Doanh nghiệp (NDA)', 'Enterprise NDA')}
                    </span>
                    <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
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
          <div className="py-20 text-center glass-panel rounded-3xl border-border/60">
            <Search className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-bold text-foreground mb-1">
              {t('Không tìm thấy dự án phù hợp', 'No projects found')}
            </h3>
            <p className="text-xs text-muted-foreground">
              {t('Hãy thử tìm kiếm với từ khóa khác.', 'Try adjusting your search terms.')}
            </p>
          </div>
        )}

        {/* GitHub Repositories Link CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/Kachitaro"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className: 'rounded-full px-6 gap-2 glass-panel hover:bg-muted/80 shadow-xs cursor-pointer'
            })}
          >
            <GithubIcon className="w-4 h-4 text-primary" />
            <span>{t('Xem hoạt động trên GitHub của tôi', 'Visit My GitHub Profile')}</span>
          </a>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel border border-border/60 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {selectedProject.company && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                      {selectedProject.company}
                    </span>
                  )}
                  {selectedProject.status && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-muted text-foreground border border-border">
                      {selectedProject.status[language]}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {selectedProject.title[language]}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedProject(null)}
                className="rounded-full h-8 w-8 shrink-0 hover:bg-muted"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-6 bg-muted">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title[language]}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Detailed Description */}
            <div className="space-y-4 text-sm text-foreground/90 leading-relaxed mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                {t('Mô tả hệ thống & Phạm vi dự án', 'System Overview & Scope')}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.description[language]}
              </p>
            </div>

            {/* Key Architectural Highlights */}
            <div className="space-y-3 mb-6 pt-4 border-t border-border/40">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                {t('Điểm nổi bật & Đóng góp kỹ thuật', 'Key Contributions & Engineering Highlights')}
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights[language].map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/90">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-border/40">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-background/80 border border-border text-foreground"
                  >
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
