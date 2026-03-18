'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileToggle } from '../MobileToggle';

import underlineSVG from '@/public/underline_brush.svg';
import Image from 'next/image';
import { ModeToggle } from '../ModeToggle';

export const Header = () => {
  const path = usePathname();
  const isActive = (href: string) => path === href || (path.startsWith(href) && path[href.length] === '/');

  return (
    <nav className="flex justify-between items-center p-4 bg-neutral-800 dark:bg-neutral-900 text-white md:px-12 max-h-16 border-b border-neutral-700/50">
      <Link href="/">
        <h1 className="text-lg md:text-xl font-bold text-center tracking-wider uppercase">Petar Yordanov Art</h1>
      </Link>

      <ul className="lg:flex hidden gap-8 absolute left-1/2 transform -translate-x-1/2">
        <li>
          <Link href="/" className="text-lg flex flex-col items-center relative">
            Начало
            {isActive('/') && (
              <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
            )}
          </Link>
        </li>
        <li>
          <Link href="/artworks" className="text-lg flex flex-col items-center relative">
            Картини
            {(isActive('/artwork') || isActive('/artworks')) && (
              <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
            )}
          </Link>
        </li>
        <li>
          <Link href="/archive" className="text-lg flex flex-col items-center relative">
            Архив
            {isActive('/archive') && (
              <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
            )}
          </Link>
        </li>
        <li>
          <Link href="/contacts" className="text-lg flex flex-col items-center relative">
            Контакти
            {isActive('/contacts') && (
              <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
            )}
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-lg flex flex-col items-center relative">
            За мен
            {isActive('/about') && (
              <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
            )}
          </Link>
        </li>
      </ul>

      <MobileToggle className="ml-auto" isActive={isActive} />

      <ModeToggle />
    </nav>
  );
};
