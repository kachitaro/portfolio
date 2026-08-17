'use client';

import { CheckCircle2, Code2, Cpu, Terminal, Zap } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { TiltCard } from '@/components/ui/tilt-card';
import { useLanguage } from '@/context/language-context';
import { skillsData, toolchainGroups } from '@/data/portfolioData';

export function SkillsSection() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
            {t('Kỹ năng chuyên môn', 'Technical Arsenal')}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t('Hệ sinh thái công nghệ & Năng lực kỹ thuật', 'Tech Stack & Core Competencies')}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t(
              'Tập trung chuyên sâu vào React.js, Next.js, TypeScript và các công cụ phát triển phần mềm hiện đại.',
              'Specialized in building scalable frontend architectures, responsive interfaces, and performant web ecosystems.',
            )}
          </p>
        </div>

        {/* Section 1: Core Competencies (TiltCards with Progress Bars) */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-2.5">
            <div className="bg-primary/10 text-primary rounded-xl p-2">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-foreground text-xl font-bold">
                {t('Năng lực cốt lõi (Core Competencies)', 'Core Competencies')}
              </h3>
              <p className="text-muted-foreground text-xs">
                {t(
                  'Mức độ thành thạo và kinh nghiệm thực chiến',
                  'Hands-on proficiency & production experience',
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillsData.map((skill, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel border-border/60 hover:border-primary/40 group flex h-full flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:shadow-lg">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-background/90 border-border/60 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border shadow-2xs transition-transform group-hover:scale-110">
                        <img
                          src={`https://skillicons.dev/icons?i=${skill.icon}`}
                          alt={skill.name}
                          className="h-6 w-6 object-contain"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-foreground group-hover:text-primary text-sm font-bold transition-colors">
                          {skill.name}
                        </h4>
                        <span className="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-primary font-mono text-sm font-bold">{skill.level}%</span>
                  </div>

                  {/* Custom Progress Bar */}
                  <div className="bg-muted/80 h-1.5 w-full overflow-hidden rounded-full">
                    <div
                      className="from-primary h-full rounded-full bg-linear-to-r via-sky-400 to-indigo-500 transition-all duration-700 group-hover:brightness-110"
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
          <div className="mb-8 flex items-center gap-2.5">
            <div className="rounded-xl bg-sky-500/10 p-2 text-sky-400">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-foreground text-xl font-bold">
                {t('Cụm công cụ & Thư viện (Toolchain Clusters)', 'Toolchain Clusters & Ecosystem')}
              </h3>
              <p className="text-muted-foreground text-xs">
                {t(
                  'Phân loại công nghệ theo nhóm chức năng',
                  'Categorized stack by technical domain',
                )}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {toolchainGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="glass-panel border-border/60 hover:border-primary/40 flex flex-col justify-between rounded-3xl p-6 transition-all duration-300">
                <div>
                  <h4 className="text-primary border-border/40 mb-4 border-b pb-2 font-mono text-xs font-bold tracking-wider uppercase">
                    {group.category[language]}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, iIdx) => (
                      <span
                        key={iIdx}
                        className="bg-background/80 text-foreground/90 border-border/60 hover:border-primary/40 hover:text-primary cursor-default rounded-lg border px-2.5 py-1 text-xs font-medium shadow-2xs transition-colors">
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
          <div className="glass-panel border-border/60 group relative overflow-hidden rounded-3xl p-8 shadow-lg sm:p-10">
            <div className="absolute top-0 right-0 p-4 opacity-5 transition-transform group-hover:scale-110">
              <Zap className="text-primary h-44 w-44" />
            </div>

            <div className="text-primary mb-4 flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
              <Code2 className="h-4 w-4" />
              <span>{t('Phương châm làm việc & Phát triển', 'Development Values & Growth')}</span>
            </div>

            <h3 className="text-foreground mb-6 text-xl font-bold tracking-tight sm:text-2xl">
              {t(
                'Viết code có trách nhiệm, tuân thủ convention và không ngừng học hỏi',
                'Responsible Coding, Team Conventions & Continuous Learning',
              )}
            </h3>

            <div className="text-muted-foreground grid grid-cols-1 gap-4 text-xs leading-relaxed sm:text-sm md:grid-cols-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  {t(
                    'Tuân thủ coding convention của dự án, chia nhỏ component rõ ràng, viết code dễ đọc để phối hợp nhịp nhàng với team.',
                    'Adhering to project conventions, modularizing components cleanly, and writing readable code for seamless team collaboration.',
                  )}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                <p>
                  {t(
                    'Chủ động tiếp thu góp ý từ các anh Senior / Tech Lead để nâng cao tư duy giải quyết vấn đề và hoàn thiện chất lượng sản phẩm.',
                    'Actively learning from Seniors / Tech Leads to enhance problem-solving skills and continuously improve product quality.',
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
