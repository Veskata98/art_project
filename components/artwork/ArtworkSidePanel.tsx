import Link from 'next/link';

import { categoryMap, formatSize, surfaceMap } from '@/utils/helpers';
import { Check, X } from 'lucide-react';

import { Artwork } from '@/types';

interface ArtworkSidePanelProps {
  artwork: Artwork;
}

export const ArtworkSidePanel = ({ artwork }: ArtworkSidePanelProps) => {
  return (
    <aside className="lg:w-[20rem] xl:w-[25rem] w-full flex flex-col pt-0 lg:p-6 items-center justify-around lg:gallery-frame rounded-sm">
      <div className="text-center mb-6 lg:mb-0">
        <h1 className="text-2xl font-semibold mb-3 text-center">{artwork?.title}</h1>
        <p className="flex gap-2 justify-center items-center text-muted-foreground">
          <span className="font-semibold">Категория:</span>{' '}
          <Link href={`/artworks/${artwork.category}`} className="underline text-sm text-primary hover:text-primary/80 transition-colors">
            {categoryMap[artwork.category]}
          </Link>
        </p>
      </div>

      <div className="mb-6">
        {artwork.available ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2 font-semibold">
              <Check className="w-5 h-5" /> Налична
            </p>
            <span className="text-lg font-semibold">{artwork.price} лв</span>
          </div>
        ) : (
          <p className="text-red-500 dark:text-red-400 flex items-center gap-2 font-semibold">
            <X className="w-5 h-5" /> Не е налична
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 text-center p-4 rounded-sm bg-muted/50 w-full">
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold">Рамка:</span>
          {artwork.frame ? <Check className="w-5 h-5 text-emerald-500" /> : <span className="text-muted-foreground">Без</span>}
        </p>
        <p>
          <span className="font-semibold">Размери:</span> <span className="text-muted-foreground">{formatSize(artwork.length, artwork.width)}</span>
        </p>
        <p>
          <span className="font-semibold">Повърхност:</span> <span className="text-muted-foreground">{surfaceMap[artwork.surface]}</span>
        </p>
      </div>
    </aside>
  );
};
