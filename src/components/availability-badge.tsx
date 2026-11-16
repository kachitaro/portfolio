'use client';

import { useLanguage } from '@/context/language-context';
import { availability } from '@/data/portfolioData';
import { cn } from '@/lib/utils';

/** Freelance availability. A still dot, not a pulsing one: it informs, it does not nag. */
export function AvailabilityBadge({ className }: { className?: string }) {
  const { language } = useLanguage();
  return (
    <p
      className={cn(
        'text-neutral-12 inline-flex items-center gap-2.5 text-sm font-medium',
        className,
      )}>
      <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-(--grass-9)" />
      {availability[language]}
    </p>
  );
}
