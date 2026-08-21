'use client';

import { Badge } from '@/components/ui/badge';
import { CtaLink } from '@/components/ui/cta-link';
import { useLanguage } from '@/context/language-context';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4 py-16">
      {/* Background ambient light */}
      <div className="bg-primary/15 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="glass-panel border-border/60 animate-in fade-in zoom-in-95 w-full max-w-md space-y-6 rounded-3xl p-8 text-center shadow-xl duration-300 sm:p-10">
        {/* Playful Cat Icon & 404 Badge */}
        <div className="relative inline-flex items-center justify-center">
          <span className="from-primary bg-linear-to-r via-sky-500 to-indigo-500 bg-clip-text font-mono text-6xl font-extrabold text-transparent sm:text-7xl">
            404
          </span>
          <span className="absolute -top-3 -right-6 animate-bounce text-2xl" title="Cat Lover 🐱">
            🐱
          </span>
        </div>

        <div className="space-y-2">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary px-3 py-0.5 font-mono text-xs">
            {t('ERROR 404 · TRANG KHÔNG TỒN TẠI', 'ERROR 404 · PAGE NOT FOUND')}
          </Badge>
          <h1 className="text-foreground text-xl font-bold tracking-tight sm:text-2xl">
            {t('Úi! Có vẻ bạn đã đi lạc...', 'Oops! You seem to be lost...')}
          </h1>
          <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
            {t(
              'Trang bạn đang tìm kiếm không tồn tại hoặc đã được mèo nhà mình giấu đi đâu đó rồi 🐾',
              'The page you are looking for does not exist or has been hidden by my cat somewhere 🐾',
            )}
          </p>
        </div>

        {/* CTA Button back to home */}
        <div className="flex justify-center pt-2">
          <CtaLink
            href="/"
            size="lg"
            icon={<Home className="h-4 w-4" />}
            iconPosition="left"
            className="cursor-pointer gap-2 rounded-full px-6 text-xs font-medium shadow-md transition-all hover:shadow-lg sm:text-sm">
            {t('Quay về trang chủ', 'Back to Homepage')}
          </CtaLink>
        </div>
      </div>
    </div>
  );
}
