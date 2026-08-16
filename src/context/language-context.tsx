'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/types/portfolio';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (vi: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('kachitaro_portfolio_lang') as Language;
    if (saved === 'vi' || saved === 'en') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('kachitaro_portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'vi' ? 'en' : 'vi';
    handleSetLanguage(next);
  };

  const t = (vi: string, en: string) => (language === 'vi' ? vi : en);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
