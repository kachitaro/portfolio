'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { skillsData, toolchainGroups } from '@/data/portfolioData';
import { Badge } from '@/components/ui/badge';
import { TiltCard } from '@/components/ui/tilt-card';
import {
  Sparkles,
  Layers,
  Database,
  Wrench,
  Cpu,
  Code2,
  Terminal,
  Zap,
  Globe,
  CheckCircle2
} from 'lucide-react';

export function SkillsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
            {t('Kỹ năng chuyên môn', 'Technical Arsenal')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('Hệ sinh thái công nghệ & Năng lực kỹ thuật', 'Tech Stack & Core Competencies')}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {t(
              'Tập trung chuyên sâu vào React.js, Next.js, TypeScript và các công cụ phát triển phần mềm hiện đại.',
              'Specialized in building scalable frontend architectures, responsive interfaces, and performant web ecosystems.'
            )}
          </p>
        </div>

        {/* Section 1: Core Competencies (TiltCards with Progress Bars) */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-xl bg-primary/10 text-primary">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {t('Năng lực cốt lõi (Core Competencies)', 'Core Competencies')}
              </h3>
              <p className="text-xs text-muted-foreground">
                {t('Mức độ thành thạo và kinh nghiệm thực chiến', 'Hands-on proficiency & production experience')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.map((skill, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel p-5 rounded-2xl border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between group h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-background/90 border border-border/60 flex items-center justify-center overflow-hidden shadow-2xs group-hover:scale-110 transition-transform">
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-[10px] text-muted-foreground uppercase font-mono tracking-wider">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Custom Progress Bar */}
                  <div className="w-full h-1.5 bg-muted/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary via-sky-400 to-indigo-500 rounded-full transition-all duration-700 group-hover:brightness-110"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Section 2: Toolchain Clusters */}
        <div className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {t('Cụm công cụ & Thư viện (Toolchain Clusters)', 'Toolchain Clusters & Ecosystem')}
              </h3>
              <p className="text-xs text-muted-foreground">
                {t('Phân loại công nghệ theo nhóm chức năng', 'Categorized stack by technical domain')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {toolchainGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="glass-panel p-6 rounded-3xl border-border/60 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-4 pb-2 border-b border-border/40">
                    {group.category[language]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-background/80 text-foreground/90 border border-border/60 shadow-2xs hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Engineering Philosophy Box */}
        <TiltCard className="rounded-3xl">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border-border/60 relative overflow-hidden group shadow-lg">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
              <Zap className="w-44 h-44 text-primary" />
            </div>

            <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">
              <Code2 className="w-4 h-4" />
              <span>{t('Phương châm làm việc & Phát triển', 'Development Values & Growth')}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-6">
              {t(
                'Viết code có trách nhiệm, tuân thủ convention và không ngừng học hỏi',
                'Responsible Coding, Team Conventions & Continuous Learning'
              )}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p>
                  {t(
                    'Tuân thủ coding convention của dự án, chia nhỏ component rõ ràng, viết code dễ đọc để phối hợp nhịp nhàng với team.',
                    'Adhering to project conventions, modularizing components cleanly, and writing readable code for seamless team collaboration.'
                  )}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p>
                  {t(
                    'Chủ động tiếp thu góp ý từ các anh Senior / Tech Lead để nâng cao tư duy giải quyết vấn đề và hoàn thiện chất lượng sản phẩm.',
                    'Actively learning from Seniors / Tech Leads to enhance problem-solving skills and continuously improve product quality.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
