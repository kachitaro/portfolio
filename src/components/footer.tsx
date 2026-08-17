'use client';

import { ExternalLink, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import { GithubIcon } from '@/components/icons/github-icon';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

export function Footer() {
  const { t, language } = useLanguage();

  const navLinks = [
    { href: '/', label: t('Trang chủ', 'Home') },
    { href: '/about', label: t('Giới thiệu', 'About') },
    { href: '/skills', label: t('Kỹ năng', 'Skills') },
    { href: '/projects', label: t('Dự án', 'Projects') },
    { href: '/experience', label: t('Kinh nghiệm', 'Experience') },
    { href: '/contact', label: t('Liên hệ', 'Contact') },
  ];

  return (
    <footer className="border-border/50 bg-background/80 relative mt-20 border-t pt-12 pb-8 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Navigation & Connect */}
        <div className="flex flex-col justify-between gap-8 pb-10 sm:flex-row sm:items-start">
          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
              {t('Điều hướng', 'Navigation')}
            </h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:text-right">
            <h4 className="text-foreground text-xs font-semibold tracking-wider uppercase">
              {t('Kết nối', 'Connect')}
            </h4>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:justify-end">
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary flex items-center gap-1.5 transition-colors">
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ExternalLink className="h-3 w-3 opacity-60" />
              </a>

              <div className="text-muted-foreground flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>
                  {language === 'vi' ? personalInfo.location.vi : personalInfo.location.en}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-border/40 text-muted-foreground flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row">
          <p>
            Copyright © {new Date().getFullYear()} John (Anh Tài).{' '}
            {t('Đã đăng ký bản quyền.', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}
