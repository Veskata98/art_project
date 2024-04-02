import Link from 'next/link';

export const Header = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white md:px-8">
            <Link href="/">
                <h1 className="text-2xl font-bold">Art Gallery</h1>
            </Link>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Начало</Link>
                </li>
                <li>
                    <Link href="/artworks">Картини</Link>
                </li>
                <li>
                    <Link href="/contacts">Контакти</Link>
                </li>
                <li>
                    <Link href="/about">За мен</Link>
                </li>
            </ul>
        </nav>
    );
};
