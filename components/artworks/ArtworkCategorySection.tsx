'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

const CategoryMap: any = {
    '/': 'Всички',
    landscapes: 'Пейзаж',
    abstractions: 'Абстракция',
    portraits: 'Портрет',
    'still-life': 'Натюрморт',
    figurative: 'Фигуративно',
    realism: 'Реализъм',
    impressionism: 'Импресионизъм',
};

export const ArtworkCategorySection = () => {
    const path = usePathname();

    return (
        <aside className="w-64 text-zinc-800 p-4 flex flex-col pt-9">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
                {Object.entries(CategoryMap).map(([category, label]) => (
                    <li key={category}>
                        <Link
                            href={`/artworks/${category}`}
                            className={cn(path === `/artworks/${category}` && 'underline')}
                        >
                            {label as string}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
