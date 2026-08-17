import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type VariantProps } from 'class-variance-authority';

export interface ICtaLinkProps {
  href: string;
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link';
  size?: VariantProps<typeof buttonVariants>['size'];
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export function CtaLink({
  href,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'right',
  children,
  className,
  external = false,
  onClick,
}: ICtaLinkProps) {
  const mappedVariant = variant === 'primary' ? 'default' : variant;
  const combinedClassName = cn(buttonVariants({ variant: mappedVariant, size, className }));

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && icon}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClassName}
        onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClassName} onClick={onClick}>
      {content}
    </Link>
  );
}
