'use client';

import React from 'react';

import { ArrowRight, Briefcase, Mail, Terminal } from 'lucide-react';
import Image from 'next/image';

import { GithubIcon } from '@/components/icons/github-icon';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

export function HeroSection() {
  const { language, t } = useLanguage();
  const roles = personalInfo.roles[language];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [isFadeState, setFadeState] = React.useState(true);
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
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="bg-primary/15 dark:bg-primary/20 pointer-events-none absolute top-1/4 left-1/2 -z-10 h-100 w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]" />

      <div className="pointer-events-none absolute top-1/3 left-1/4 -z-10 h-100 w-100 rounded-full bg-sky-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute right-1/4 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 text-center sm:px-6">
        <div className="border-primary/30 bg-primary/10 animate-in fade-in zoom-in-95 mb-8 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 backdrop-blur-md duration-500">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-foreground/90 text-xs font-semibold tracking-wide">
            {t(
              'Software Engineer tại Nexpando · Open for Freelance',
              'Software Engineer at Nexpando · Open for Freelance',
            )}
          </span>
        </div>

        {/* Profile Avatar Card */}
        <div className="group relative mb-6">
          <div className="ring-primary/30 group-hover:ring-primary/60 bg-background relative h-28 w-28 overflow-hidden rounded-full p-1 shadow-xl ring-4 transition-all duration-300 sm:h-32 sm:w-32">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
          <span
            className="bg-background/90 border-border absolute right-1 bottom-1 rounded-full border p-1 text-xl shadow-xs"
            title="Cat Lover 🐱">
            🐱
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-foreground mb-4 max-w-3xl text-3xl leading-[1.15] font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {t('Xin chào, mình là', "Hi, I'm")}{' '}
          <span className="from-primary bg-linear-to-r via-sky-500 to-indigo-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-indigo-300 dark:to-teal-300">
            {personalInfo.name}
          </span>
        </h1>

        {/* Animated Rotating Role Subheadline */}
        <div className="mb-6 flex h-10 items-center justify-center">
          <p
            className={`text-foreground/80 flex items-center gap-2 font-mono text-lg font-medium transition-all duration-300 sm:text-2xl ${
              isFadeState ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}>
            <Terminal className="text-primary h-5 w-5" />
            <span>{roles[currentRoleIndex]}</span>
          </p>
        </div>

        {/* Bio summary */}
        <p className="text-muted-foreground mb-8 max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg">
          {personalInfo.bio[language]}
        </p>

        {/* Action Buttons */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3.5">
          <CtaLink
            href="/projects"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            className="cursor-pointer gap-2 rounded-full px-6 font-medium shadow-md transition-all hover:shadow-lg">
            {t('Dự án doanh nghiệp', 'Enterprise Projects')}
          </CtaLink>

          <CtaLink
            href="/experience"
            variant="outline"
            size="lg"
            icon={<Briefcase className="text-primary h-4 w-4" />}
            iconPosition="left"
            className="glass-panel hover:bg-muted/80 cursor-pointer gap-2 rounded-full px-6 font-medium transition-all">
            {t('Kinh nghiệm làm việc', 'Experience')}
          </CtaLink>

          <CtaLink
            href="/contact"
            variant="outline"
            size="lg"
            icon={<Mail className="text-primary h-4 w-4" />}
            iconPosition="left"
            className="glass-panel hover:bg-muted/80 cursor-pointer gap-2 rounded-full px-6 font-medium transition-all">
            {t('Liên hệ ngay', 'Get in Touch')}
          </CtaLink>

          <CtaLink
            href="https://github.com/kachitaro"
            external
            variant="outline"
            size="lg"
            icon={<GithubIcon className="h-4 w-4" />}
            iconPosition="left"
            className="glass-panel hover:bg-muted/80 cursor-pointer gap-2 rounded-full px-5 font-medium transition-all">
            GitHub
          </CtaLink>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid w-full max-w-4xl grid-cols-2 gap-3.5 md:grid-cols-4">
          {personalInfo.aboutDetailed[language].funFacts.slice(0, 4).map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel flex flex-col items-center justify-center rounded-2xl p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="text-primary font-mono text-xl font-extrabold tracking-tight sm:text-2xl">
                {stat.value}
              </span>
              <span className="text-muted-foreground mt-1 text-xs font-medium sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
