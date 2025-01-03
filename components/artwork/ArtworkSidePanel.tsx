import Link from 'next/link';

import { categoryMap, formatSize, surfaceMap } from '@/utils/helpers';
import { Check, X } from 'lucide-react';

import { Artwork } from '@/types';

interface ArtworkSidePanelProps {
  artwork: Artwork;
}

export const ArtworkSidePanel = ({ artwork }: ArtworkSidePanelProps) => {
  return (
    <aside className="lg:w-[20rem] xl:w-[25rem] w-full flex flex-col pt-0 lg:p-4 items-center justify-around lg:shadow-white-shadow rounded">
      <div className="text-center mb-6 lg:mb-0">
        <h1 className="text-xl font-semibold mb-2 text-center">{artwork?.title}</h1>
        <p className="flex gap-2 justify-center items-center">
          <span className="font-semibold">Категория:</span>{' '}
          <Link href={`/artworks/${artwork.category}`} className="underline text-sm">
            {categoryMap[artwork.category]}
          </Link>
        </p>
      </div>

      <div className="mb-6">
        {artwork.available ? (
          <div className="flex flex-col items-center">
            <p className="text-green-500 flex items-center gap-2 font-semibold">
              <Check className="w-5 h-5" /> Налична
            </p>
            <span>{artwork.price} лв</span>
          </div>
        ) : (
          <p className="text-red-500 flex items-center gap-2 font-semibold">
            <X className="w-5 h-5" /> Не е налична
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 text-center p-3 rounded-md shadow border border-gray-100 lg:border-none w-full">
        <p className="flex justify-center items-center gap-2">
          <span className="font-semibold ">Рамка:</span>
          {artwork.frame ? <Check className="w-5 h-5 text-emerald-500" /> : <span>Без</span>}
        </p>
        <p>
          <span className="font-semibold ">Размери:</span> <span>{formatSize(artwork.length, artwork.width)}</span>
        </p>
        <p>
          <span className="font-semibold">Повърхност:</span> <span>{surfaceMap[artwork.surface]}</span>
        </p>
      </div>
    </aside>
  );
};
