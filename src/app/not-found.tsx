'use client';

import Link from 'next/link';

import { useLanguage } from '@/context/language-context';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-[84rem] flex-col justify-center px-5 py-24 md:px-8">
      <p className="text-brand-11 text-sm font-medium">404</p>
      <h1 className="display-tight text-neutral-12 mt-3 max-w-[16ch] text-5xl font-semibold md:text-7xl">
        {t('Không có trang nào ở địa chỉ này.', 'There is no page at this address.')}
      </h1>
      <p className="prose-serif text-neutral-11 mt-6">
        {t(
          'Có thể đường dẫn bị gõ sai, hoặc trang đã được gộp vào trang chủ.',
          'The link may be mistyped, or the page has been merged into the home page.',
        )}
      </p>
      <Link
        href="/"
        className="bg-brand-9 text-brand-contrast hover:bg-brand-10 mt-10 inline-flex h-11 w-fit items-center rounded-lg px-5 text-[15px] font-medium transition-colors">
        {t('Về trang chủ', 'Go to the home page')}
      </Link>
    </section>
  );
}
