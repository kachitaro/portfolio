'use client';

import {
  Briefcase,
  CheckCircle2,
  Clock,
  Code,
  Coffee,
  Layers,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  UserCheck,
  Zap
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TiltCard } from '@/components/ui/tilt-card';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

export function AboutSection() {
  const { language, t } = useLanguage();
  const about = personalInfo.aboutDetailed[language];

  const funFactIcons = [
    <Briefcase key="0" className="w-5 h-5 text-sky-400" />,
    <Clock key="1" className="w-5 h-5 text-amber-400" />,
    <Layers key="2" className="w-5 h-5 text-emerald-400" />,
    <Terminal key="3" className="w-5 h-5 text-indigo-400" />,
    <Terminal key="4" className="w-5 h-5 text-rose-400" />,
    <Zap key="5" className="w-5 h-5 text-amber-400" />,
    <Sparkles key="6" className="w-5 h-5 text-emerald-400" />,
    <Coffee key="7" className="w-5 h-5 text-sky-400" />
  ];

  return (
    <section id="about" className="py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
            {t('Hồ sơ cá nhân', 'About Me')}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('Kỹ sư Phần mềm & Đam mê Tối ưu Web', 'Software Engineer & Web Performance Enthusiast')}
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            {t(
              'Tìm hiểu về hành trình, thế mạnh chuyên môn và triết lý làm việc của mình.',
              'Get to know my engineering journey, core competencies, and development values.'
            )}
          </p>
        </div>

        {/* Personality Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {about.personalities.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-primary/10 text-primary border border-primary/20 backdrop-blur-md shadow-2xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Bio Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border-border/60">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{t('Hành trình & Sứ mệnh', 'Background & Mission')}</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                {about.intro}
              </p>
              <div className="pt-4 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-foreground/90">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{personalInfo.location[language]}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90">
                  <UserCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t('Software Engineer @ Nexpando', 'Software Engineer @ Nexpando')}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/90 sm:col-span-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:underline text-primary font-mono text-xs sm:text-sm"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="glass-panel p-6 rounded-3xl border-border/60">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-4">
                {t('Triết lý lập trình & làm việc', 'Development Philosophy')}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/80">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t('Code sạch, kiến trúc dễ mở rộng', 'Clean, scalable architecture')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t('Tối ưu hóa UI/UX và Core Web Vitals', 'Exceptional UI/UX and Core Web Vitals')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t('Làm việc nhóm & Giao tiếp hiệu quả', 'Collaborative agile teamwork')}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{t('Tư duy giải quyết bài toán nghiệp vụ', 'Business-outcome driven mindset')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Vision & Key Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Vision Quote Card */}
            <TiltCard className="rounded-3xl">
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border-primary/30 relative overflow-hidden group shadow-md">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <Zap className="w-24 h-24 text-primary" />
                </div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t('Tầm nhìn kỹ thuật', 'Technical Vision')}
                </h4>
                <p className="relative z-10 text-foreground/90 italic text-sm sm:text-base leading-relaxed border-l-3 border-primary pl-4">
                  {about.visionQuote}
                </p>
              </div>
            </TiltCard>

            {/* Highlights 3-Card Stack */}
            {about.highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-panel border-border/60 hover:border-primary/50 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <CardHeader className="pb-1.5 pt-4 flex flex-row items-center gap-3 space-y-0">
                  <div className="p-2 rounded-xl bg-background/80 border border-border/60 shadow-xs">
                    <Code className="w-4 h-4 text-primary" />
                  </div>
                  <CardTitle className="text-sm font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>

        {/* Fun Facts Section */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-primary font-mono text-xl font-bold">#</span>
            <h3 className="text-xl font-bold font-mono text-foreground">
              {t('Chỉ số & Fun Facts', 'Key Metrics & Fun Facts')}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {about.funFacts.map((fact, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel p-5 rounded-2xl border-border/60 flex flex-col items-center justify-center text-center gap-2 transition-all hover:border-primary/40 hover:shadow-lg group">
                  <div className="p-3 rounded-2xl bg-background/80 border border-border/50 group-hover:scale-110 transition-transform">
                    {funFactIcons[idx % funFactIcons.length]}
                  </div>
                  <div className="w-full">
                    <h4 className="text-xl sm:text-2xl font-bold font-mono text-foreground group-hover:text-primary transition-colors">
                      {fact.value}
                    </h4>
                    <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">
                      {fact.label}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
