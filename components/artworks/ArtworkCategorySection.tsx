'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { categoryMap, cn } from '@/utils/helpers';

export const ArtworkCategorySection = () => {
  const path = usePathname();

  return (
    <aside className="lg:w-64 p-4 flex flex-col md:pt-9 w-full">
      <ul className="flex lg:flex-col gap-6 md:gap-3 text-lg overflow-x-auto">
        {Object.entries(categoryMap).map(([category, label]) => {
          const active = path === `/artworks/${category}` || (path === '/artworks' && category === '/');
          return (
            <li key={category}>
              <Link
                href={`/artworks/${category}`}
                className={cn(
                  'transition-colors duration-200 hover:text-primary',
                  active ? 'text-primary font-semibold lg:border-l-2 lg:border-primary lg:pl-3' : 'text-muted-foreground lg:pl-3'
                )}
              >
                {label as string}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
