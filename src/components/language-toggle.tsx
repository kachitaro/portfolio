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
      className="border-border/60 bg-background/80 h-9 w-9 cursor-pointer rounded-md shadow-xs backdrop-blur-sm transition-transform hover:scale-105"
      title={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}>
      <Languages className="text-primary h-3.5 w-3.5" />
    </Button>
  );
}
