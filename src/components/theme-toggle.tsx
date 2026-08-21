'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage } from '@/context/language-context';

export function ThemeToggle() {
  const { setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({
          variant: 'outline',
          size: 'icon',
          className:
            'border-border/60 bg-background/80 relative h-9 w-9 cursor-pointer rounded-md shadow-xs backdrop-blur-sm transition-transform hover:scale-105',
        })}>
        <Sun className="h-[1.15rem] w-[1.15rem] scale-100 rotate-0 text-amber-500 transition-all dark:scale-0 dark:-rotate-90" />

        <Moon className="absolute h-[1.15rem] w-[1.15rem] scale-0 rotate-90 text-sky-400 transition-all dark:scale-100 dark:rotate-0" />

        <span className="sr-only">Toggle theme</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="glass-panel w-full backdrop-blur-md">
        <DropdownMenuItem onClick={() => setTheme('light')} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4 text-amber-500" />

          {t('Giao diện Sáng', 'Light')}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('dark')} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4 text-sky-400" />

          {t('Giao diện Tối', 'Dark')}
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme('system')} className="cursor-pointer">
          <span className="mr-2 text-xs">💻</span>

          {t('Theo hệ thống', 'System')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
