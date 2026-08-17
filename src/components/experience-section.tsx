'use client';

import { Briefcase, Building2, Calendar, Clock, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/context/language-context';
import { experienceData } from '@/data/portfolioData';

export function ExperienceSection() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
            {t('Hành trình nghề nghiệp', 'Career & Experience')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('Kinh nghiệm làm việc thực tế', 'Work Experience & History')}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {t(
              'Quá trình làm việc tại các công ty công nghệ và vai trò kỹ thuật trong các dự án.',
              'Detailed record of my software engineering roles, company impact, and responsibilities.'
            )}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/30 ml-3 sm:ml-8 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker Dot */}
              <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-xs" />

              <div className="glass-panel p-6 sm:p-7 rounded-2xl border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                
                {/* Header Information Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period[language]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted/60 border border-border/40">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      {item.duration[language]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
                    <Building2 className="w-4 h-4 text-primary" />
                    <span>{item.company}</span>
                    <span className="text-muted-foreground font-normal">· {item.employmentType[language]}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary shrink-0" />
                  <span>{item.role[language]}</span>
                </h3>

                {/* Workplace Info */}
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{item.workplaceType[language]}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {item.description[language]}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border/40">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-background/80 text-xs font-medium text-foreground/90 border border-border/60 shadow-2xs hover:border-primary/40 transition-colors"
                    >
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
