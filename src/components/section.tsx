import { Reveal } from '@/components/motion/motion';
import { cn } from '@/lib/utils';

interface ISectionProps {
  id: string;
  title: string;
  /** Short factual note under the title, e.g. a count or a date range. */
  note?: string;
  children: React.ReactNode;
  className?: string;
  /** Set false when the content staggers its own parts. */
  reveal?: boolean;
}

/** Editorial two-column section: title column on the left, content on the right. */
export function Section({ id, title, note, children, className, reveal = true }: ISectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-neutral-4 scroll-mt-16 border-t', className)}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-28">
        <Reveal className="min-w-0 md:col-span-3">
          <div className="md:sticky md:top-28">
            <h2
              id={`${id}-title`}
              className="display-section text-neutral-12 text-[clamp(1.75rem,1.25rem+1.6vw,2.25rem)] font-semibold">
              {title}
            </h2>
            {note && <p className="text-neutral-11 mt-2 text-sm">{note}</p>}
          </div>
        </Reveal>
        {reveal ? (
          <Reveal className="min-w-0 md:col-span-9">{children}</Reveal>
        ) : (
          <div className="min-w-0 md:col-span-9">{children}</div>
        )}
      </div>
    </section>
  );
}
