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
  Zap,
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
    <Briefcase key="0" className="h-5 w-5 text-sky-400" />,
    <Clock key="1" className="h-5 w-5 text-amber-400" />,
    <Layers key="2" className="h-5 w-5 text-emerald-400" />,
    <Terminal key="3" className="h-5 w-5 text-indigo-400" />,
    <Terminal key="4" className="h-5 w-5 text-rose-400" />,
    <Zap key="5" className="h-5 w-5 text-amber-400" />,
    <Sparkles key="6" className="h-5 w-5 text-emerald-400" />,
    <Coffee key="7" className="h-5 w-5 text-sky-400" />,
  ];

  return (
    <section id="about" className="relative py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
            {t('Hồ sơ cá nhân', 'About Me')}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t(
              'Kỹ sư Phần mềm & Đam mê Tối ưu Web',
              'Software Engineer & Web Performance Enthusiast',
            )}
          </h2>
          <p className="text-muted-foreground mt-3 text-sm sm:text-base">
            {t(
              'Tìm hiểu về hành trình, thế mạnh chuyên môn và triết lý làm việc của mình.',
              'Get to know my engineering journey, core competencies, and development values.',
            )}
          </p>
        </div>

        {/* Personality Tags */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {about.personalities.map((tag, idx) => (
            <span
              key={idx}
              className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3.5 py-1 font-mono text-xs font-semibold shadow-2xs backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Content Layout */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Main Bio Intro */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="glass-panel border-border/60 rounded-3xl p-6 sm:p-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span>{t('Hành trình & Sứ mệnh', 'Background & Mission')}</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed sm:text-base">
                {about.intro}
              </p>
              <div className="border-border/50 grid grid-cols-1 gap-3 border-t pt-4 text-sm sm:grid-cols-2">
                <div className="text-foreground/90 flex items-center gap-2">
                  <MapPin className="text-primary h-4 w-4 shrink-0" />
                  <span>{personalInfo.location[language]}</span>
                </div>
                <div className="text-foreground/90 flex items-center gap-2">
                  <UserCheck className="h-4 w-4 shrink-0 text-emerald-500" />
                  <span>{t('Software Engineer @ Nexpando', 'Software Engineer @ Nexpando')}</span>
                </div>
                <div className="text-foreground/90 flex items-center gap-2 sm:col-span-2">
                  <Mail className="text-primary h-4 w-4 shrink-0" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary font-mono text-xs hover:underline sm:text-sm">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="glass-panel border-border/60 rounded-3xl p-6">
              <h4 className="text-muted-foreground mb-4 font-mono text-xs font-bold tracking-wider uppercase">
                {t('Triết lý lập trình & làm việc', 'Development Philosophy')}
              </h4>
              <div className="text-foreground/80 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>
                    {t('Code sạch, kiến trúc dễ mở rộng', 'Clean, scalable architecture')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>
                    {t(
                      'Tối ưu hóa UI/UX và Core Web Vitals',
                      'Exceptional UI/UX and Core Web Vitals',
                    )}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>
                    {t('Làm việc nhóm & Giao tiếp hiệu quả', 'Collaborative agile teamwork')}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  <span>
                    {t('Tư duy giải quyết bài toán nghiệp vụ', 'Business-outcome driven mindset')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Vision & Key Highlights */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {/* Vision Quote Card */}
            <TiltCard className="rounded-3xl">
              <div className="glass-panel border-primary/30 group relative overflow-hidden rounded-3xl p-6 shadow-md sm:p-7">
                <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform group-hover:scale-110">
                  <Zap className="text-primary h-24 w-24" />
                </div>
                <h4 className="text-primary mb-3 flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="h-3.5 w-3.5" />
                  {t('Tầm nhìn kỹ thuật', 'Technical Vision')}
                </h4>
                <p className="text-foreground/90 border-primary relative z-10 border-l-3 pl-4 text-sm leading-relaxed italic sm:text-base">
                  {about.visionQuote}
                </p>
              </div>
            </TiltCard>

            {/* Highlights 3-Card Stack */}
            {about.highlights.map((item, index) => (
              <Card
                key={index}
                className="glass-panel border-border/60 hover:border-primary/50 shadow-xs transition-all duration-300 hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-3 space-y-0 pt-4 pb-1.5">
                  <div className="bg-background/80 border-border/60 rounded-xl border p-2 shadow-xs">
                    <Code className="text-primary h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-4">
                  <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="pt-6">
          <div className="mb-6 flex items-center gap-2">
            <span className="text-primary font-mono text-xl font-bold">#</span>
            <h3 className="text-foreground font-mono text-xl font-bold">
              {t('Chỉ số & Fun Facts', 'Key Metrics & Fun Facts')}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.funFacts.map((fact, idx) => (
              <TiltCard key={idx} className="rounded-2xl">
                <div className="glass-panel border-border/60 hover:border-primary/40 group flex flex-col items-center justify-center gap-2 rounded-2xl p-5 text-center transition-all hover:shadow-lg">
                  <div className="bg-background/80 border-border/50 rounded-2xl border p-3 transition-transform group-hover:scale-110">
                    {funFactIcons[idx % funFactIcons.length]}
                  </div>
                  <div className="w-full">
                    <h4 className="text-foreground group-hover:text-primary font-mono text-xl font-bold transition-colors sm:text-2xl">
                      {fact.value}
                    </h4>
                    <p className="text-muted-foreground mt-0.5 font-mono text-[11px] font-semibold tracking-wider uppercase">
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
