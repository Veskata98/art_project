'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MobileToggle } from '../MobileToggle';

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
                    <Link href="/" className={isActive('/') ? 'underline' : ''}>
                        Начало
                    </Link>
                </li>
                <li>
                    <Link href="/artworks" className={isActive('/artworks') ? 'underline' : ''}>
                        Картини
                    </Link>
                </li>
                <li>
                    <Link href="/archive" className={isActive('/archive') ? 'underline' : ''}>
                        Архив
                    </Link>
                </li>
                <li>
                    <Link href="/contacts" className={isActive('/contacts') ? 'underline' : ''}>
                        Контакти
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={isActive('/about') ? 'underline' : ''}>
                        За мен
                    </Link>
                </li>
            </ul>
            <MobileToggle className="ml-auto md:hidden absolute right-2 top-2" isActive={isActive} />
        </nav>
    );
};
