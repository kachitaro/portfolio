'use client';

import { useLanguage } from '@/context/language-context';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const next = language === 'vi' ? 'EN' : 'VI';

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      lang={language === 'vi' ? 'en' : 'vi'}
      aria-label={language === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
      className="text-data text-tag hover:text-primary inline-flex min-h-11 min-w-11 items-center justify-center px-2 font-medium transition-colors duration-150 motion-reduce:transition-none">
      {next}
    </button>
  );
}
