import { cn } from '@/lib/utils';

interface ISectionProps {
  id: string;
  title: string;
  /** Short factual note under the title, e.g. a count or a date range. */
  note?: string;
  children: React.ReactNode;
  className?: string;
}

/** Editorial two-column section: title column on the left, content on the right. */
export function Section({ id, title, note, children, className }: ISectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('border-neutral-4 scroll-mt-16 border-t', className)}>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-28">
        <div className="min-w-0 md:col-span-3">
          <div className="md:sticky md:top-28">
            <h2
              id={`${id}-title`}
              className="display-section text-neutral-12 text-3xl font-semibold md:text-[2.25rem]">
              {title}
            </h2>
            {note && <p className="text-neutral-11 mt-2 text-sm">{note}</p>}
          </div>
        </div>
        <div className="min-w-0 md:col-span-9">{children}</div>
      </div>
    </section>
  );
}
