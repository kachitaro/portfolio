'use client';

import { Zap, ZapOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { setMotionPreference, useMotionPreference } from '@/hooks/use-motion-preference';

export function MotionToggle() {
  const { isReducedMotion, isReady } = useMotionPreference();
  const { t } = useLanguage();

  if (!isReady) {
    return null;
  }

  const handleToggle = () => {
    setMotionPreference(isReducedMotion ? 'off' : 'on');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="border-border/60 bg-background/80 h-9 w-9 cursor-pointer rounded-full shadow-xs backdrop-blur-sm transition-transform hover:scale-105"
      title={
        isReducedMotion
          ? t('Bật hiệu ứng chuyển động', 'Enable Motion Effects')
          : t('Tắt hiệu ứng chuyển động', 'Disable Motion Effects')
      }
      aria-label="Toggle motion preference">
      {isReducedMotion ? (
        <ZapOff className="text-muted-foreground h-4 w-4" />
      ) : (
        <Zap className="h-4 w-4 text-amber-500" />
      )}
    </Button>
  );
}
