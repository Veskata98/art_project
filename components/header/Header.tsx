'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileToggle } from '../MobileToggle';

import underlineSVG from '@/public/underline_brush.svg';
import Image from 'next/image';

export const Header = () => {
    const path = usePathname();
    const isActive = (href: string) => path === href || (path.startsWith(href) && path[href.length] === '/');

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white md:px-8 max-h-16">
            <Link href="/">
                <h1 className="text-lg md:text-2xl font-bold text-center">Petar Yordanov Art</h1>
            </Link>
            <ul className="md:flex hidden space-x-4">
                <li>
                    <Link href="/" className="flex flex-col items-center relative">
                        Начало
                        {isActive('/') && (
                            <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/artworks" className="flex flex-col items-center relative">
                        Картини
                        {(isActive('/artwork') || isActive('/artworks')) && (
                            <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/archive" className="flex flex-col items-center relative">
                        Архив
                        {isActive('/archive') && (
                            <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/contacts" className="flex flex-col items-center relative">
                        Контакти
                        {isActive('/contacts') && (
                            <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
                        )}
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="flex flex-col items-center relative">
                        За мен
                        {isActive('/about') && (
                            <Image src={underlineSVG} alt="underline" className="h-[8px] absolute -bottom-2 w-auto" />
                        )}
                    </Link>
                </li>
            </ul>
            <MobileToggle className="ml-auto md:hidden absolute right-2 top-2" isActive={isActive} />
        </nav>
    );
};
