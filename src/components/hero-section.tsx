'use client';

import { AvailabilityBadge } from '@/components/availability-badge';
import { LazyMount } from '@/components/three/lazy-mount';
import { HeroScene } from '@/components/three/lazy-scenes';
import { useLanguage } from '@/context/language-context';
import { setInquiryTopic } from '@/lib/inquiry';

// Entrance is plain CSS (see .hero-in): it paints from the first frame, before any script loads.
const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as React.CSSProperties;

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mx-auto max-w-[84rem] px-5 pt-14 pb-20 md:px-8 md:pt-24 md:pb-28">
      {/* Decorative 3D behind the headline; desktop only, never takes clicks. */}
      <LazyMount
        when="idle"
        minWidth={768}
        className="pointer-events-none absolute top-6 right-0 -z-10 hidden h-[300px] w-[38%] md:block lg:top-8 lg:h-[460px] lg:w-[44%]">
        <HeroScene className="h-full w-full" />
      </LazyMount>

      <AvailabilityBadge className="hero-in" />

      <h1
        id="hero-title"
        style={delay(0.05)}
        className="hero-blur display-tight text-neutral-12 mt-6 max-w-[15.5ch] text-[clamp(2.5rem,0.5rem+7.3vw,5.5rem)] font-semibold">
        {t('Biến ý tưởng thành web chạy được.', 'I turn ideas into working web apps.')}
      </h1>

      <div style={delay(0.2)} className="hero-in mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
        <p className="prose-serif text-neutral-11 md:col-span-7">
          {t(
            'Mình là John, software engineer thiên về frontend. Mình dựng web app, dashboard và website thực dụng, dễ bảo trì bằng React, Next.js và TypeScript, từ ý tưởng đến bản chạy được. Mình đã làm cho các hệ thống bán vé, thương mại điện tử và POS.',
            'I am John, a frontend-focused software engineer. I build practical, maintainable web apps, dashboards and websites with React, Next.js and TypeScript, from the first idea to a working release. I have worked on ticketing, e-commerce and POS systems.',
          )}
        </p>
        <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
          <a
            href="#contact"
            onClick={() => setInquiryTopic(null)}
            className="bg-brand-9 text-brand-contrast hover:bg-brand-10 inline-flex h-11 items-center rounded-lg px-5 text-[15px] font-medium transition-[transform,background-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]">
            {t('Kể mình nghe dự án của bạn', 'Tell me about your project')}
          </a>
          <a
            href="#work"
            className="border-neutral-7 text-neutral-12 hover:border-neutral-8 hover:bg-neutral-2 inline-flex h-11 items-center rounded-lg border px-5 text-[15px] font-medium transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]">
            {t('Xem dự án', 'See the work')}
          </a>
        </div>
      </div>
    </section>
  );
}
