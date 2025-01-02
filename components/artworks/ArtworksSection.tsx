import { Artwork } from '@/types';

import { ArtworkCard } from './ArtworkCard';
import { PaginationComponent } from '../pagination/Pagination';
import { cn } from '@/utils/helpers';

interface ArtworksSectionProps {
  artworks: Artwork[];
  totalArtworkCount: number;
  heading?: string;
  classname?: string;
}

export const ArtworksSection = ({ artworks, totalArtworkCount, heading, classname }: ArtworksSectionProps) => {
  return (
    <div className={cn('flex-1', classname)}>
      <h1 className="text-2xl font-bold text-center mb-2">{heading ? heading : 'Всички Картини'}</h1>
      {artworks.length === 0 ? (
        <div className="w-full mt-4 flex justify-center items-center">Няма намерени картини</div>
      ) : (
        <>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {artworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>

          {totalArtworkCount > 0 && <PaginationComponent artworkCount={totalArtworkCount} />}
        </>
      )}
    </div>
  );
};
