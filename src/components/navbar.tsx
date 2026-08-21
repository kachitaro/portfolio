'use client';

import React from 'react';

import { Code2, Menu, Send, Sparkles, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LanguageToggle } from '@/components/language-toggle';
import { MotionToggle } from '@/components/motion-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';

export function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: t('Trang chủ', 'Home') },
    { href: '/about', label: t('Giới thiệu', 'About') },
    { href: '/skills', label: t('Kỹ năng', 'Skills') },
    { href: '/projects', label: t('Dự án', 'Projects') },
    { href: '/experience', label: t('Kinh nghiệm', 'Experience') },
    { href: '/contact', label: t('Liên hệ', 'Contact') },
  ];

  React.useEffect(() => {
    let isTicking = false;
    const handleScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          isTicking = false;
        });
        isTicking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-xs' : 'bg-transparent py-4'
      }`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="group flex cursor-pointer items-center gap-2.5">
          <div className="ring-primary/40 group-hover:ring-primary relative h-9 w-9 overflow-hidden rounded-full shadow-xs ring-2 transition-all duration-300">
            <Image
              src="https://github.com/kachitaro.png"
              alt="John (Anh Tài)"
              fill
              sizes="36px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="group-hover:text-primary flex items-center gap-1 text-sm font-bold tracking-tight transition-colors">
              John (Anh Tài)
              <Sparkles className="h-3.5 w-3.5 text-amber-500 opacity-80" />
            </span>
            <span className="text-muted-foreground font-mono text-[11px]">@kachitaro</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="border-border/50 bg-background/60 hidden items-center gap-1 rounded-full border px-3 py-1.5 shadow-xs backdrop-blur-md md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}>
                {isActive && (
                  <span className="bg-primary/10 animate-fade-in absolute inset-0 -z-10 rounded-full" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden items-center gap-2.5 md:flex">
          <MotionToggle />
          <LanguageToggle />
          <ThemeToggle />
          <CtaLink
            href="/contact"
            size="sm"
            icon={<Send className="h-3.5 w-3.5" />}
            iconPosition="left"
            className="h-9 cursor-pointer gap-1.5 rounded-full px-4 text-xs font-medium shadow-xs">
            {t('Liên hệ', 'Get in Touch')}
          </CtaLink>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <MotionToggle />

          <LanguageToggle />

          <ThemeToggle />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="h-9 w-9 rounded-full"
            aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="glass-panel border-border/50 animate-in slide-in-from-top-2 border-b px-5 py-4 duration-200 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground/80 hover:bg-muted/60'
                  }`}>
                  <span>{link.label}</span>
                  {isActive && <Code2 className="text-primary h-4 w-4" />}
                </Link>
              );
            })}
            <CtaLink
              href="/contact"
              size="sm"
              icon={<Send className="h-3.5 w-3.5" />}
              iconPosition="left"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full cursor-pointer gap-2 rounded-xl py-2.5 text-xs">
              {t('Liên hệ ngay', 'Get in Touch')}
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
