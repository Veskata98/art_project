import { Artwork } from '@/types';

import { ArtworkCard } from './ArtworkCard';
import { PaginationComponent } from '../pagination/Pagination';

interface ArtworksSectionProps {
    artworks: Artwork[];
    totalArtworkCount: number;
    heading?: string;
}

export const ArtworksSection = ({ artworks, totalArtworkCount, heading }: ArtworksSectionProps) => {
    return (
        <div className="flex-1">
            <h1 className="text-2xl font-bold text-center mb-2">{heading ? heading : 'Всички Картини'}</h1>
            {artworks.length === 0 ? (
                <div className="w-full mt-4 flex justify-center items-center">Няма намерени картини</div>
            ) : (
                <>
                    <div className="flex gap-4 flex-wrap justify-center">
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
