import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

/**
 * Flat, square-ish (radius from --radius), token colors only.
 * Hover inverts to foreground/background: the tokens have no darker primary step,
 * and an alpha on primary would drop the label below AA.
 */
const buttonVariants = cva(
  'text-body inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent px-6 font-medium whitespace-nowrap transition-colors duration-150 ease-out select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:active:translate-y-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-foreground hover:text-background active:bg-foreground active:text-background',
        outline: 'border-input bg-transparent text-foreground hover:bg-muted',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function Button({
  className,
  variant = 'default',
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
