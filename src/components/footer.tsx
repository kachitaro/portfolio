'use client';

import { useAccent } from '@/context/accent-context';
import { useLanguage } from '@/context/language-context';

export function Footer() {
  const { t } = useLanguage();
  const { accent, gray } = useAccent();

  return (
    <footer className="border-neutral-4 border-t">
      <div className="text-neutral-11 mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} John (Anh Tài)</p>
        <p>
          {t('Màu', 'Colors')}: {accent} + {gray}, {t('từ', 'from')}{' '}
          <a
            href="https://www.radix-ui.com/colors"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-12 underline-offset-4 hover:underline">
            Radix Colors
          </a>
        </p>
        <a href="#main" className="text-neutral-12 underline-offset-4 hover:underline">
          {t('Lên đầu trang', 'Back to top')}
        </a>
      </div>
    </footer>
  );
}
