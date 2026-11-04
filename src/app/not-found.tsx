'use client';

import { buttonVariants } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="page section-y">
      <p className="text-data text-tag text-muted-foreground">404</p>
      <h1 className="text-display mt-4">{t('Không tìm thấy trang', 'Page not found')}</h1>
      <p className="text-lead mt-8 max-w-[40ch]">
        {t(
          'Trang bạn tìm không tồn tại hoặc đã được chuyển đi.',
          'The page you are looking for does not exist or has moved.',
        )}
      </p>
      <Link href="/" className={`${buttonVariants()} mt-8`}>
        {t('Về trang chủ', 'Back to home')}
      </Link>
    </section>
  );
}
