'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { categoryMap, cn } from '@/utils/helpers';

export const ArtworkCategorySection = () => {
  const path = usePathname();

  return (
    <aside className="lg:w-64 p-4 flex flex-col md:pt-9 w-full">
      <ul className="flex lg:flex-col gap-8 md:gap-4 text-lg font-semibold overflow-x-auto">
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
