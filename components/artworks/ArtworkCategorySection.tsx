'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { categoryMap, cn } from '@/lib/utils';

export const ArtworkCategorySection = () => {
    const path = usePathname();

    return (
        <aside className="w-64 text-zinc-800 p-4 flex flex-col pt-9">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
                {Object.entries(categoryMap).map(([category, label]) => (
                    <li key={category}>
                        <Link
                            href={`/artworks/${category}`}
                            className={cn(
                                path === `/artworks/${category}` && 'underline',
                                path === '/artworks' && category === '/' && 'underline'
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
