import { cn } from '@/lib/utils';

/** Tech tags: filled chips that lift slightly on hover. */
export function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="bg-neutral-3 text-neutral-11 hover:bg-brand-3 hover:text-brand-11 rounded-md px-2.5 py-1 text-[13px] transition-[transform,background-color,color] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.04]">
          {item}
        </li>
      ))}
    </ul>
  );
}
