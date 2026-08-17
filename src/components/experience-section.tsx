'use client';

import { Briefcase, Building2, Calendar, Clock, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { experienceData } from '@/data/portfolioData';

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
            {t('Hành trình nghề nghiệp', 'Career & Experience')}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t('Kinh nghiệm làm việc thực tế', 'Work Experience & History')}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t(
              'Quá trình làm việc tại các công ty công nghệ và vai trò kỹ thuật trong các dự án.',
              'Detailed record of my software engineering roles, company impact, and responsibilities.',
            )}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="border-primary/30 relative ml-3 space-y-12 border-l-2 sm:ml-8">
          {experienceData.map((item) => (
            <div key={item.id} className="group relative pl-6 sm:pl-8">
              {/* Timeline Marker Dot */}
              <div className="bg-background border-primary group-hover:bg-primary absolute top-1.5 left-[-9px] h-4 w-4 rounded-full border-2 shadow-xs transition-all duration-300 group-hover:scale-125" />

              <div className="glass-panel border-border/60 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg sm:p-7">
                {/* Header Information Row */}
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-bold">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.period[language]}
                    </span>
                    <span className="text-muted-foreground bg-muted/60 border-border/40 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[11px]">
                      <Clock className="text-muted-foreground h-3 w-3" />
                      {item.duration[language]}
                    </span>
                  </div>

                  <div className="text-foreground/80 flex items-center gap-1.5 text-xs font-semibold">
                    <Building2 className="text-primary h-4 w-4" />
                    <span>{item.company}</span>
                    <span className="text-muted-foreground font-normal">
                      · {item.employmentType[language]}
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-foreground group-hover:text-primary mb-2 flex items-center gap-2 text-xl font-bold transition-colors">
                  <Briefcase className="text-primary h-5 w-5 shrink-0" />
                  <span>{item.role[language]}</span>
                </h3>

                {/* Workplace Info */}
                <div className="text-muted-foreground mb-4 flex items-center gap-1.5 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                  <span>{item.workplaceType[language]}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {item.description[language]}
                </p>

                {/* Skills Tags */}
                <div className="border-border/40 flex flex-wrap gap-2 border-t pt-3">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-background/80 text-foreground/90 border-border/60 hover:border-primary/40 rounded-lg border px-2.5 py-1 text-xs font-medium shadow-2xs transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
