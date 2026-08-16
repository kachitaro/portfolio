'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/github-icon';
import Image from 'next/image';

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md pt-12 pb-8 relative mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/40">
          
          {/* Brand & Bio */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/40">
              <Image
                src={personalInfo.avatar}
                alt={personalInfo.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                {personalInfo.name}
                <span className="text-xs font-mono text-muted-foreground">({personalInfo.handle})</span>
              </h3>
              <p className="text-xs text-muted-foreground">
                {t('Software Engineer @ Nexpando', 'Software Engineer @ Nexpando')}
              </p>
            </div>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Kachitaro"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className: 'h-9 w-9 rounded-full glass-panel hover:bg-muted/80 cursor-pointer'
              })}
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={buttonVariants({
                variant: 'outline',
                size: 'icon',
                className: 'h-9 w-9 rounded-full glass-panel hover:bg-muted/80 cursor-pointer'
              })}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="h-9 w-9 rounded-full glass-panel hover:bg-muted/80 cursor-pointer text-primary"
              title={t('Lên đầu trang', 'Back to top')}
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} John (Anh Tài) — Built with Next.js, Tailwind CSS & Bun.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in Vietnam 🇻🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
