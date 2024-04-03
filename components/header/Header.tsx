'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const path = usePathname();
    const isActive = (href: string) => path === href || (path.startsWith(href) && path[href.length] === '/');

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white md:px-8">
            <Link href="/">
                <h1 className="text-2xl font-bold">Art Gallery</h1>
            </Link>
            <ul className="flex space-x-4">
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
        </nav>
    );
};
