'use client';

import { Zap, ZapOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { setMotionPreference, useMotionPreference } from '@/hooks/use-motion-preference';

export function MotionToggle() {
  const { reducedMotion, ready } = useMotionPreference();
  const { t } = useLanguage();

  if (!ready) return null;

  const handleToggle = () => {
    setMotionPreference(reducedMotion ? 'off' : 'on');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      className="h-9 w-9 rounded-full border-border/60 bg-background/80 backdrop-blur-sm shadow-xs transition-transform hover:scale-105 cursor-pointer"
      title={
        reducedMotion
          ? t('Bật hiệu ứng chuyển động', 'Enable Motion Effects')
          : t('Tắt hiệu ứng chuyển động', 'Disable Motion Effects')
      }
      aria-label="Toggle motion preference"
    >
      {reducedMotion ? (
        <ZapOff className="h-4 w-4 text-muted-foreground" />
      ) : (
        <Zap className="h-4 w-4 text-amber-500" />
      )}
    </Button>
  );
}
