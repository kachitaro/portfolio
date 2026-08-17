'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { CtaLink } from '@/components/ui/cta-link';
import { Home } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-md w-full text-center space-y-6 glass-panel p-8 sm:p-10 rounded-3xl border-border/60 shadow-xl animate-in fade-in zoom-in-95 duration-300">
        
        {/* Playful Cat Icon & 404 Badge */}
        <div className="relative inline-flex items-center justify-center">
          <span className="text-6xl sm:text-7xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-500 to-indigo-500">
            404
          </span>
          <span className="absolute -top-3 -right-6 text-2xl animate-bounce" title="Cat Lover 🐱">
            🐱
          </span>
        </div>

        <div className="space-y-2">
          <Badge variant="outline" className="px-3 py-0.5 text-xs font-mono border-primary/30 text-primary">
            {t('ERROR 404 · TRANG KHÔNG TỒN TẠI', 'ERROR 404 · PAGE NOT FOUND')}
          </Badge>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {t('Úi! Có vẻ bạn đã đi lạc...', 'Oops! You seem to be lost...')}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t(
              'Trang bạn đang tìm kiếm không tồn tại hoặc đã được mèo nhà mình giấu đi đâu đó rồi 🐾',
              'The page you are looking for does not exist or has been hidden by my cat somewhere 🐾'
            )}
          </p>
        </div>

        {/* CTA Button back to home */}
        <div className="pt-2 flex justify-center">
          <CtaLink
            href="/"
            size="lg"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="rounded-full px-6 gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer font-medium text-xs sm:text-sm"
          >
            {t('Quay về trang chủ', 'Back to Homepage')}
          </CtaLink>
        </div>

      </div>
    </div>
  );
}
