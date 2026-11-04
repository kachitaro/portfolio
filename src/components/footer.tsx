'use client';

import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/personal';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="page text-data text-muted-foreground flex min-h-14 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
      <p>
        © {new Date().getFullYear()} {personalInfo.name}
      </p>
      <a href="#top" className="link-inline inline-flex min-h-11 items-center">
        {t('Về đầu trang', 'Back to top')}
      </a>
    </footer>
  );
}
