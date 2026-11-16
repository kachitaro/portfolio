'use client';

import { LazyMount } from '@/components/three/lazy-mount';
import { HeroScene } from '@/components/three/lazy-scenes';
import { ACCENTS, useAccent } from '@/context/accent-context';
import { useLanguage } from '@/context/language-context';
import { personalInfo } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

const STEPS = Array.from({ length: 12 }, (_, i) => i + 1);

// What each Radix step is for, so the strip explains itself on hover/focus.
const STEP_ROLES: Record<number, { vi: string; en: string }> = {
  1: { vi: 'Nền trang', en: 'App background' },
  2: { vi: 'Nền phụ', en: 'Subtle background' },
  3: { vi: 'Nền thành phần', en: 'Component background' },
  4: { vi: 'Nền khi hover', en: 'Hovered component' },
  5: { vi: 'Nền khi chọn', en: 'Active component' },
  6: { vi: 'Viền nhạt', en: 'Subtle border' },
  7: { vi: 'Viền thành phần', en: 'Component border' },
  8: { vi: 'Viền khi hover, focus', en: 'Hover border, focus ring' },
  9: { vi: 'Màu đặc', en: 'Solid' },
  10: { vi: 'Màu đặc khi hover', en: 'Hovered solid' },
  11: { vi: 'Chữ có màu', en: 'Low-contrast text' },
  12: { vi: 'Chữ đậm', en: 'High-contrast text' },
};

// Entrance is plain CSS (see .hero-in): it paints from the first frame, before any script loads.
const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as React.CSSProperties;

export function HeroSection() {
  const { t, language } = useLanguage();
  const { accent, gray, setAccent } = useAccent();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate mx-auto max-w-6xl px-5 pt-14 pb-20 md:px-8 md:pt-24 md:pb-28">
      {/* Decorative 3D behind the headline; desktop only, never takes clicks. */}
      <LazyMount
        when="idle"
        minWidth={768}
        className="pointer-events-none absolute top-6 right-0 -z-10 hidden h-[300px] w-[38%] md:block lg:top-8 lg:h-[460px] lg:w-[44%]">
        <HeroScene className="h-full w-full" />
      </LazyMount>
      <h1
        id="hero-title"
        style={delay(0.05)}
        className="hero-blur display-tight text-neutral-12 max-w-[15.5ch] text-[clamp(2.5rem,0.5rem+7.3vw,5.5rem)] font-semibold">
        {t(
          'Mình xây frontend cho web B2B.',
          'I build frontends for B2B web.',
        )}
      </h1>

      <div style={delay(0.2)} className="hero-in mt-10 grid gap-8 md:mt-14 md:grid-cols-12">
        <p className="prose-serif text-neutral-11 md:col-span-7">
          {t(
            'Mình là Software Engineer tại Nexpando từ 2023, làm bằng React, Next.js và TypeScript cho hệ thống bán vé Nexbus, Vnshop V2 và nền tảng POS BANA. Ngoài giờ mình nhận thêm việc freelance.',
            'I am a Software Engineer at Nexpando since 2023, working in React, Next.js and TypeScript on the Nexbus ticketing system, Vnshop V2 and the BANA POS platform. I also take on freelance work.',
          )}
        </p>
        <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
          <a
            href="#work"
            className="bg-brand-9 text-brand-contrast hover:bg-brand-10 inline-flex h-11 items-center rounded-lg px-5 text-[15px] font-medium transition-[transform,background-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]">
            {t('Xem dự án', 'See the work')}
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="border-neutral-7 text-neutral-12 hover:border-neutral-8 hover:bg-neutral-2 inline-flex h-11 items-center rounded-lg border px-5 text-[15px] font-medium transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]">
            {t('Gửi email', 'Email me')}
          </a>
        </div>
      </div>

      {/* The color system: this is the one loud thing on the page. */}
      <div style={delay(0.35)} className="hero-in mt-16 md:mt-24">
        <figure aria-labelledby="scale-caption">
          <div
            className="ring-neutral-6 flex h-28 overflow-hidden rounded-xl ring-1 ring-inset sm:h-36 md:h-44"
            role="list"
            aria-label={t(`Thang màu ${accent}`, `${accent} scale`)}>
            {STEPS.map((step) => (
              <div
                key={step}
                role="listitem"
                tabIndex={0}
                className="group relative flex flex-1 items-end justify-start p-1.5 outline-offset-[-3px] sm:p-2.5"
                style={{ backgroundColor: `var(--brand-${step})` }}
                aria-label={`${step}: ${STEP_ROLES[step][language]}`}>
                <span
                  className={cn(
                    'text-[11px] font-medium tabular-nums sm:text-xs',
                    step >= 9 ? 'text-brand-contrast' : 'text-brand-11',
                    step >= 11 && 'text-brand-1',
                  )}>
                  {step}
                </span>
                <span
                  className={cn(
                    'bg-neutral-12 text-neutral-1 pointer-events-none absolute bottom-full z-10 mb-2 hidden rounded-md px-2.5 py-1.5 text-xs whitespace-nowrap shadow-lg group-hover:block group-focus:block',
                    // Keep the tip inside the strip at both ends, down to a 320px screen.
                    step <= 3 ? 'left-0' : step >= 10 ? 'right-0' : 'left-1/2 -translate-x-1/2',
                  )}
                  aria-hidden>
                  <code className="font-mono">
                    --{accent}-{step}
                  </code>
                  <span className="text-neutral-8 ml-2">{STEP_ROLES[step][language]}</span>
                </span>
              </div>
            ))}
          </div>

          <div
            className="ring-neutral-6 mt-1.5 flex h-5 overflow-hidden rounded-md ring-1 ring-inset"
            aria-hidden>
            {STEPS.map((step) => (
              <div
                key={step}
                className="flex-1"
                style={{ backgroundColor: `var(--neutral-${step})` }}
              />
            ))}
          </div>

          <figcaption id="scale-caption" className="mt-6 grid gap-6 md:grid-cols-12 md:items-start">
            <p className="text-neutral-11 text-[15px] leading-relaxed md:col-span-4">
              {t(
                'Cả trang chạy trên hai thang 12 bước: một màu nhấn và một màu xám đi kèm. Chọn màu khác để thấy toàn bộ giao diện đổi theo.',
                'The whole page runs on two 12-step scales: one accent and the gray that pairs with it. Pick another hue and every part of the interface follows.',
              )}{' '}
              <span className="text-neutral-12">
                {t('Đang dùng', 'Now using')} {accent} + {gray}.
              </span>
            </p>

            <fieldset className="md:col-span-8 md:justify-self-end">
              <legend className="sr-only">
                {t('Chọn màu nhấn cho trang', 'Choose the page accent')}
              </legend>
              <div className="flex flex-wrap gap-2">
                {ACCENTS.map((item) => {
                  const isActive = item.id === accent;
                  return (
                    <label
                      key={item.id}
                      className={cn(
                        'has-focus-visible:outline-brand-8 flex h-10 cursor-pointer items-center gap-2 rounded-full border pr-3.5 pl-1.5 text-sm transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2',
                        isActive
                          ? 'border-neutral-12 text-neutral-12'
                          : 'border-neutral-6 text-neutral-11 hover:border-neutral-8 hover:text-neutral-12',
                      )}>
                      <input
                        type="radio"
                        name="accent"
                        value={item.id}
                        checked={isActive}
                        onChange={() => setAccent(item.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden
                        className="h-7 w-7 rounded-full"
                        style={{ backgroundColor: `var(--${item.id}-9)` }}
                      />
                      <span className="capitalize">{item.id}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
