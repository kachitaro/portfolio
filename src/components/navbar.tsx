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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { href: '/', label: t('Trang chủ', 'Home') },
    { href: '/about', label: t('Giới thiệu', 'About') },
    { href: '/skills', label: t('Kỹ năng', 'Skills') },
    { href: '/projects', label: t('Dự án', 'Projects') },
    { href: '/experience', label: t('Kinh nghiệm', 'Experience') },
    { href: '/contact', label: t('Liên hệ', 'Contact') },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-xs py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300 shadow-xs">
            <Image
              src="https://github.com/kachitaro.png"
              alt="John (Anh Tài)"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight flex items-center gap-1 group-hover:text-primary transition-colors">
              John (Anh Tài)
              <Sparkles className="w-3.5 h-3.5 text-amber-500 opacity-80" />
            </span>
            <span className="text-[11px] font-mono text-muted-foreground">@kachitaro</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border/50 bg-background/60 backdrop-blur-md shadow-xs">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-primary/10 -z-10 animate-fade-in" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2.5">
          <MotionToggle />
          <LanguageToggle />
          <ThemeToggle />
          <CtaLink
            href="/contact"
            size="sm"
            icon={<Send className="w-3.5 h-3.5" />}
            iconPosition="left"
            className="h-9 px-4 gap-1.5 rounded-full shadow-xs cursor-pointer text-xs font-medium"
          >
            {t('Liên hệ', 'Get in Touch')}
          </CtaLink>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <MotionToggle />
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="h-9 w-9 rounded-full"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-border/50 px-5 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors text-left ${
                    isActive
                      ? 'bg-primary/10 text-primary font-semibold'
                      : 'text-foreground/80 hover:bg-muted/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Code2 className="w-4 h-4 text-primary" />}
                </Link>
              );
            })}
            <CtaLink
              href="/contact"
              size="sm"
              icon={<Send className="w-3.5 h-3.5" />}
              iconPosition="left"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full gap-2 rounded-xl text-xs py-2.5 cursor-pointer"
            >
              {t('Liên hệ ngay', 'Get in Touch')}
            </CtaLink>
          </div>
        </div>
      )}
    </header>
  );
}
