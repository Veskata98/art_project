'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { categoryMap, cn } from '@/utils/helpers';

export const ArtworkCategorySection = () => {
    const path = usePathname();

    return (
        <aside className="md:w-64 text-zinc-800 p-4 flex flex-col md:pt-9 w-full">
            <ul className="flex md:flex-col gap-4 text-lg font-semibold overflow-x-auto">
                {Object.entries(categoryMap).map(([category, label]) => (
                    <li key={category}>
                        <Link
                            href={`/artworks/${category}`}
                            className={cn(
                                path === `/artworks/${category}` && 'md:underline',
                                path === '/artworks' && category === '/' && 'md:underline'
                            )}
                        >
                            {label as string}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
