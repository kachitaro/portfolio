'use client';

import { type TLanguage } from '@/types/portfolio';
import React from 'react';

interface ILanguageContextType {
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
  toggleLanguage: () => void;
  t: (vi: string, en: string) => string;
}

const LanguageContext = React.createContext<ILanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'kachitaro_portfolio_lang';

function getClientLanguage(): TLanguage {
  if (typeof window === 'undefined') {
    return 'vi';
  }
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'vi' || saved === 'en') {
    return saved as TLanguage;
  }
  return 'vi';
}

const subscribe = (callback: () => void) => {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
};

const getServerLanguage = (): TLanguage => 'vi';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = React.useSyncExternalStore<TLanguage>(
    subscribe,
    getClientLanguage,
    getServerLanguage,
  );

  const handleSetLanguage = (lang: TLanguage) => {
    localStorage.setItem(STORAGE_KEY, lang);
    window.dispatchEvent(new Event('storage'));
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === 'vi' ? 'en' : 'vi');
  };

  const t = (vi: string, en: string) => (language === 'vi' ? vi : en);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
