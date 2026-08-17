'use client';

import React from 'react';

import {
  ArrowRight,
  Briefcase,
  Mail,
  Terminal
} from 'lucide-react';
import Image from 'next/image';

import { GithubIcon } from '@/components/icons/github-icon';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

export function HeroSection() {
  const { language, t } = useLanguage();
  const roles = personalInfo.roles[language];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [fadeState, setFadeState] = React.useState(true);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      timeoutRef.current = setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 300);
    }, 3200);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [roles.length]);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-100 bg-primary/15 dark:bg-primary/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8 animate-in fade-in zoom-in-95 duration-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-foreground/90">
            {t('Software Engineer tại Nexpando · Open for Freelance', 'Software Engineer at Nexpando · Open for Freelance')}
          </span>
        </div>

        {/* Profile Avatar Card */}
        <div className="relative mb-6 group">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 ring-4 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300 shadow-xl overflow-hidden bg-background">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <span className="absolute bottom-1 right-1 text-xl bg-background/90 rounded-full p-1 border border-border shadow-xs" title="Cat Lover 🐱">
            🐱
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.15] mb-4">
          {t('Xin chào, mình là', "Hi, I'm")}{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-sky-500 to-indigo-600 dark:from-sky-300 dark:via-indigo-300 dark:to-teal-300">
            {personalInfo.name}
          </span>
        </h1>

        {/* Animated Rotating Role Subheadline */}
        <div className="h-10 flex items-center justify-center mb-6">
          <p
            className={`text-lg sm:text-2xl font-mono font-medium text-foreground/80 transition-all duration-300 flex items-center gap-2 ${
              fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span>{roles[currentRoleIndex]}</span>
          </p>
        </div>

        {/* Bio summary */}
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          {personalInfo.bio[language]}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <CtaLink
            href="/projects"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="rounded-full px-6 gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer font-medium"
          >
            {t('Dự án doanh nghiệp', 'Enterprise Projects')}
          </CtaLink>

          <CtaLink
            href="/experience"
            variant="outline"
            size="lg"
            icon={<Briefcase className="w-4 h-4 text-primary" />}
            iconPosition="left"
            className="rounded-full px-6 gap-2 glass-panel hover:bg-muted/80 transition-all cursor-pointer font-medium"
          >
            {t('Kinh nghiệm làm việc', 'Experience')}
          </CtaLink>

          <CtaLink
            href="/contact"
            variant="outline"
            size="lg"
            icon={<Mail className="w-4 h-4 text-primary" />}
            iconPosition="left"
            className="rounded-full px-6 gap-2 glass-panel hover:bg-muted/80 transition-all cursor-pointer font-medium"
          >
            {t('Liên hệ ngay', 'Get in Touch')}
          </CtaLink>

          <CtaLink
            href="https://github.com/kachitaro"
            external
            variant="outline"
            size="lg"
            icon={<GithubIcon className="w-4 h-4" />}
            iconPosition="left"
            className="rounded-full px-5 gap-2 glass-panel hover:bg-muted/80 transition-all font-medium cursor-pointer"
          >
            GitHub
          </CtaLink>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl">
          {personalInfo.aboutDetailed[language].funFacts.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-4 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xl sm:text-2xl font-extrabold text-primary font-mono tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
