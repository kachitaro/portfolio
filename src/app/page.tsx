'use client';

import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/hero-section';
import { useLanguage } from '@/context/language-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { projectsData } from '@/data/portfolioData';
import {
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  Mail,
  ArrowRight,
  Sparkles,
  Building2,
  CheckCircle
} from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const { language, t } = useLanguage();

  const sectionsNav = [
    {
      href: '/about',
      title: t('Giới thiệu bản thân', 'About Me'),
      desc: t('Tìm hiểu về hành trình, thế mạnh chuyên môn và định hướng.', 'Get to know my engineering mission and background.'),
      icon: <User className="w-5 h-5 text-sky-500" />,
      badge: t('Hồ sơ cá nhân', 'Profile')
    },
    {
      href: '/skills',
      title: t('Kỹ năng & Công nghệ', 'Tech Stack & Skills'),
      desc: t('React.js, Next.js, TypeScript, Tailwind CSS, RESTful APIs & Tools.', 'Specialized in React ecosystem, TypeScript & modern dev tools.'),
      icon: <Cpu className="w-5 h-5 text-amber-500" />,
      badge: t('Hệ sinh thái', 'Stack')
    },
    {
      href: '/projects',
      title: t('Dự án Doanh nghiệp', 'Enterprise Projects'),
      desc: t('Hệ thống bán vé Nexbus, sàn TMĐT Vnshop V2 & dự án BANA.', 'Production systems: Nexbus, Vnshop V2 & BANA platform.'),
      icon: <FolderGit2 className="w-5 h-5 text-emerald-500" />,
      badge: t('3 Dự án lớn', '3 Key Works')
    },
    {
      href: '/experience',
      title: t('Kinh nghiệm làm việc', 'Work Experience'),
      desc: t('Software Engineer tại Nexpando & Developer tại Techbee Solutions.', 'Software Engineer at Nexpando & Techbee Solutions.'),
      icon: <Briefcase className="w-5 h-5 text-indigo-500" />,
      badge: t('4+ năm KN', '4+ Years')
    },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Explore Section Cards */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3 px-3.5 py-1 text-xs uppercase tracking-wider border-primary/30 text-primary">
              {t('Khám phá từng phần', 'Explore Sections')}
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('Thông tin chi tiết về năng lực & kinh nghiệm', 'Dive Into My Portfolio Pages')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sectionsNav.map((sec, idx) => (
              <Link
                key={idx}
                href={sec.href}
                className="glass-panel p-5 rounded-2xl border-border/60 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-background/80 border border-border/50 shadow-2xs group-hover:scale-110 transition-transform">
                      {sec.icon}
                    </div>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-muted/70 text-muted-foreground border border-border/40">
                      {sec.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 flex items-center gap-1.5">
                    <span>{sec.title}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {sec.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/40 flex items-center text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>{t('Xem chi tiết', 'View page')}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Enterprise Preview */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border-border/60 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-primary font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                <Building2 className="w-3.5 h-3.5" />
                {t('Dự án doanh nghiệp tiêu biểu', 'Featured Enterprise Projects')}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Nexbus, Vnshop V2 & BANA Platform
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                {t(
                  'Khám phá các hệ thống bán vé trực tuyến, sàn thương mại điện tử quy mô lớn và nền tảng mới đang phát triển tại Nexpando.',
                  'Explore real-world production ticketing, e-commerce, and high-performance web platforms engineered at Nexpando.'
                )}
              </p>
            </div>

            <Link
              href="/projects"
              className={buttonVariants({
                size: 'lg',
                className: 'rounded-full px-6 gap-2 shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer font-medium text-xs sm:text-sm'
              })}
            >
              <span>{t('Xem tất cả dự án', 'Explore Projects')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
