import Link from 'next/link';

import { Menu, Moon, Sun } from 'lucide-react';

import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { cn } from '@/utils/helpers';
import { Separator } from './ui/separator';
import { useState } from 'react';
import { useTheme } from 'next-themes';

export const MobileToggle = ({ className, isActive }: { className: string; isActive: (href: string) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const onLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={cn(className)}>
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full dark:bg-card dark:text-white">
          <h1 className="text-lg md:text-2xl font-bold text-start">Petar Yordanov Art</h1>

          <Separator className="my-2" />
          <ul className="flex flex-col text-lg">
            <li
              className={cn(
                'p-3 rounded',
                isActive('/') ? 'dark:bg-white bg-foreground text-white dark:text-card' : ''
              )}
            >
              <Link href="/" className="w-full block" onClick={onLinkClick}>
                <p>Начало</p>
              </Link>
            </li>
            <li
              className={cn(
                'p-3 rounded',
                isActive('/artworks') ? 'dark:bg-white bg-foreground text-white dark:text-card' : ''
              )}
            >
              <Link href="/artworks" className="w-full block" onClick={onLinkClick}>
                Картини
              </Link>
            </li>
            <li
              className={cn(
                'p-3 rounded',
                isActive('/archive') ? 'dark:bg-white bg-foreground text-white dark:text-card' : ''
              )}
            >
              <Link href="/archive" className="w-full block" onClick={onLinkClick}>
                Архив
              </Link>
            </li>
            <li
              className={cn(
                'p-3 rounded',
                isActive('/contacts') ? 'dark:bg-white bg-foreground text-white dark:text-card' : ''
              )}
            >
              <Link href="/contacts" className="w-full block" onClick={onLinkClick}>
                Контакти
              </Link>
            </li>
            <li
              className={cn(
                'p-3 rounded',
                isActive('/about') ? 'dark:bg-white bg-foreground text-white dark:text-card' : ''
              )}
            >
              <Link href="/about" className="w-full block" onClick={onLinkClick}>
                За мен
              </Link>
            </li>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-full p-6 bg-muted"
            >
              <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
