'use client';

import { LanguageToggle } from '@/components/language-toggle';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';

const links = [
  { href: '#work', vi: 'Dự án', en: 'Work', mobile: false },
  { href: '#experience', vi: 'Kinh nghiệm', en: 'Experience', mobile: false },
  { href: '#about', vi: 'Giới thiệu', en: 'About', mobile: false },
  { href: '#contact', vi: 'Liên hệ', en: 'Contact', mobile: true },
];

export function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="page flex h-14 items-center justify-between md:h-16">
      <a href="#top" className="text-body min-h-11 content-center font-semibold">
        {personalInfo.name}
      </a>

      <nav aria-label={t('Điều hướng chính', 'Main')} className="flex items-center gap-1">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-body hover:text-primary min-h-11 items-center px-2 font-medium underline-offset-4 transition-colors duration-150 hover:underline motion-reduce:transition-none md:px-3 ${link.mobile ? 'inline-flex' : 'hidden md:inline-flex'}`}>
            {t(link.vi, link.en)}
          </a>
        ))}
        <LanguageToggle />
      </nav>
    </header>
  );
}
