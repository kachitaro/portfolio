'use client';

import { ArrowRight, Briefcase, Building2, Cpu, FolderGit2, User } from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';

export function HomeSectionsNav() {
  const { t } = useLanguage();

  const sectionsNav = [
    {
      href: '/about',
      title: t('Giới thiệu bản thân', 'About Me'),
      desc: t(
        'Tìm hiểu về hành trình, thế mạnh chuyên môn và định hướng.',
        'Get to know my engineering mission and background.',
      ),
      icon: <User className="h-5 w-5 text-sky-500" />,
      badge: t('Hồ sơ cá nhân', 'Profile'),
    },
    {
      href: '/skills',
      title: t('Kỹ năng & Công nghệ', 'Tech Stack & Skills'),
      desc: t(
        'React.js, Next.js, TypeScript, Tailwind CSS, RESTful APIs & Tools.',
        'Specialized in React ecosystem, TypeScript & modern dev tools.',
      ),
      icon: <Cpu className="h-5 w-5 text-amber-500" />,
      badge: t('Hệ sinh thái', 'Stack'),
    },
    {
      href: '/projects',
      title: t('Dự án Doanh nghiệp', 'Enterprise Projects'),
      desc: t(
        'Hệ thống bán vé Nexbus, sàn TMĐT Vnshop V2 & dự án BANA.',
        'Production systems: Nexbus, Vnshop V2 & BANA platform.',
      ),
      icon: <FolderGit2 className="h-5 w-5 text-emerald-500" />,
      badge: t('3 Dự án lớn', '3 Key Works'),
    },
    {
      href: '/experience',
      title: t('Kinh nghiệm làm việc', 'Work Experience'),
      desc: t(
        'Software Engineer tại Nexpando & Developer tại Techbee Solutions.',
        'Software Engineer at Nexpando & Techbee Solutions.',
      ),
      icon: <Briefcase className="h-5 w-5 text-indigo-500" />,
      badge: t('4+ năm KN', '4+ Years'),
    },
  ];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary mb-3 px-3.5 py-1 text-xs tracking-wider uppercase">
            {t('Khám phá từng phần', 'Explore Sections')}
          </Badge>
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            {t('Thông tin chi tiết về năng lực & kinh nghiệm', 'Dive Into My Portfolio Pages')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectionsNav.map((sec, idx) => (
            <Link
              key={idx}
              href={sec.href}
              className="glass-panel border-border/60 hover:border-primary/50 group flex cursor-pointer flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-background/80 border-border/50 rounded-xl border p-2.5 shadow-2xs transition-transform group-hover:scale-110">
                    {sec.icon}
                  </div>
                  <span className="bg-muted/70 text-muted-foreground border-border/40 rounded-full border px-2 py-0.5 font-mono text-[11px] font-medium">
                    {sec.badge}
                  </span>
                </div>

                <h3 className="text-foreground group-hover:text-primary mb-1.5 flex items-center gap-1.5 text-base font-bold transition-colors">
                  <span>{sec.title}</span>
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{sec.desc}</p>
              </div>

              <div className="border-border/40 text-primary mt-4 flex items-center border-t pt-4 text-xs font-semibold transition-transform group-hover:translate-x-1">
                <span>{t('Xem chi tiết', 'View page')}</span>
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Enterprise Preview */}
        <div className="glass-panel border-border/60 mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl p-6 sm:p-8 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-primary bg-primary/10 border-primary/20 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-xs font-semibold">
              <Building2 className="h-3.5 w-3.5" />
              {t('Dự án doanh nghiệp tiêu biểu', 'Featured Enterprise Projects')}
            </span>
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
              Nexbus, Vnshop V2 & BANA Platform
            </h3>
            <p className="text-muted-foreground max-w-xl text-xs sm:text-sm">
              {t(
                'Khám phá các hệ thống bán vé trực tuyến, sàn thương mại điện tử quy mô lớn và nền tảng mới đang phát triển tại Nexpando.',
                'Explore real-world production ticketing, e-commerce, and high-performance web platforms engineered at Nexpando.',
              )}
            </p>
          </div>

          <CtaLink
            href="/projects"
            size="lg"
            icon={<ArrowRight className="h-4 w-4" />}
            iconPosition="right"
            className="shrink-0 cursor-pointer gap-2 rounded-full px-6 text-xs font-medium shadow-md transition-all hover:shadow-lg sm:text-sm">
            {t('Xem tất cả dự án', 'Explore Projects')}
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
