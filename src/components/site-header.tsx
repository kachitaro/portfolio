'use client';

import React from 'react';

import { Menu, Moon, Sun, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { useLanguage } from '@/context/language-context';
import { setMotionPreference, useMotionPreference } from '@/hooks/use-motion-preference';
import { cn } from '@/lib/utils';

const SECTION_IDS = ['work', 'experience', 'stack', 'setup', 'contact'] as const;

function useActiveSection() {
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

const iconButton =
  'text-neutral-11 hover:bg-neutral-3 hover:text-neutral-12 inline-flex h-11 min-w-11 items-center justify-center rounded-md px-2 text-sm font-medium transition-colors';

export function SiteHeader() {
  const { t, language, toggleLanguage } = useLanguage();
  const { resolvedTheme, setTheme } = useTheme();
  const { isReducedMotion, isReady } = useMotionPreference();
  const active = useActiveSection();
  const [isScrolled, setScrolled] = React.useState(false);
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'work', label: t('Dự án', 'Work') },
    { id: 'experience', label: t('Kinh nghiệm', 'Experience') },
    { id: 'stack', label: t('Công nghệ', 'Stack') },
    { id: 'setup', label: 'Setup' },
    { id: 'contact', label: t('Liên hệ', 'Contact') },
  ];

  const isDark = resolvedTheme === 'dark';

  return (
    <header
      onKeyDown={(event) => event.key === 'Escape' && setMenuOpen(false)}
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-200',
        isScrolled || isMenuOpen
          ? 'border-neutral-4 bg-neutral-1/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-neutral-12 inline-flex min-h-11 items-center gap-1 text-[15px] font-semibold tracking-tight">
          John <span className="text-neutral-11 font-normal">(Anh Tài)</span>
        </Link>

        <nav aria-label={t('Các phần của trang', 'Page sections')} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  aria-current={active === link.id ? 'location' : undefined}
                  className={cn(
                    'relative inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors',
                    active === link.id
                      ? 'text-brand-11 font-medium'
                      : 'text-neutral-11 hover:text-neutral-12',
                  )}>
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      aria-hidden
                      className="bg-brand-9 absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-0.5">
          <button
            type="button"
            onClick={toggleLanguage}
            className={iconButton}
            aria-label={language === 'vi' ? 'EN: Switch to English' : 'VI: Chuyển sang tiếng Việt'}>
            {language === 'vi' ? 'EN' : 'VI'}
          </button>

          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={iconButton}
            aria-label={
              isDark
                ? t('Chuyển sang nền sáng', 'Use light theme')
                : t('Chuyển sang nền tối', 'Use dark theme')
            }>
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </button>

          {isReady && (
            <button
              type="button"
              onClick={() => setMotionPreference(isReducedMotion ? 'off' : 'on')}
              className={cn(iconButton, 'hidden sm:inline-flex')}
              aria-pressed={isReducedMotion}
              title={t('Giảm chuyển động', 'Reduce motion')}>
              <span className="sr-only">{t('Giảm chuyển động', 'Reduce motion')}</span>
              <span
                aria-hidden
                className={cn(
                  'h-2 w-5 rounded-full border transition-colors',
                  isReducedMotion ? 'border-neutral-8 bg-transparent' : 'border-brand-9 bg-brand-9',
                )}
              />
            </button>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={cn(iconButton, 'md:hidden')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? t('Đóng menu', 'Close menu') : t('Mở menu', 'Open menu')}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="border-neutral-4 border-t px-5 pt-2 pb-5 md:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-neutral-12 block py-3 text-2xl font-medium tracking-tight">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
