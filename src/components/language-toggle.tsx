'use client';

import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="h-9 px-3 gap-1.5 rounded-full border-border/60 bg-background/80 backdrop-blur-sm shadow-xs transition-transform hover:scale-105 font-medium text-xs"
      title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
    >
      <Languages className="h-3.5 w-3.5 text-primary" />
      <span className="font-semibold">{language === 'vi' ? 'VI' : 'EN'}</span>
    </Button>
  );
}
