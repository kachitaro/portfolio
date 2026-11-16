'use client';

import { useAccent } from '@/context/accent-context';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';

export function Footer() {
  const { t } = useLanguage();
  const { accent, gray } = useAccent();

  return (
    <footer className="border-neutral-4 border-t">
      <div className="text-neutral-11 mx-auto flex max-w-[84rem] flex-col gap-3 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© {new Date().getFullYear()} John (Anh Tài)</p>
        <p className="flex flex-wrap gap-x-5 gap-y-1">
          <a
            href={`mailto:${personalInfo.email}`}
            className="tap-target text-neutral-12 underline-offset-4 hover:underline">
            Email
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer me"
            className="tap-target text-neutral-12 underline-offset-4 hover:underline">
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer me"
            className="tap-target text-neutral-12 underline-offset-4 hover:underline">
            GitHub
          </a>
        </p>
        <p>
          {t('Màu', 'Colors')}: {accent} + {gray}, {t('từ', 'from')}{' '}
          <a
            href="https://www.radix-ui.com/colors"
            target="_blank"
            rel="noopener noreferrer"
            className="tap-target text-neutral-12 underline-offset-4 hover:underline">
            Radix Colors
          </a>
        </p>
        <a href="#main" className="tap-target text-neutral-12 underline-offset-4 hover:underline">
          {t('Lên đầu trang', 'Back to top')}
        </a>
      </div>
    </footer>
  );
}
