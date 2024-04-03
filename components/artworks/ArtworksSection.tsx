import { Artwork } from '@/types';

import { ArtworkCard } from '../artwork/ArtworkCard';
import { PaginationComponent } from '../pagination/Pagination';

interface ArtworksSectionProps {
    artworks: Artwork[];
    heading?: string;
}

export const ArtworksSection = ({ artworks, heading }: ArtworksSectionProps) => {
    return (
        <div className="flex-1">
            <h1 className="text-2xl font-bold text-center mb-2">{heading ? heading : 'Последни Картини'}</h1>
            {artworks.length === 0 ? (
                <div className="w-full mt-8 flex justify-center items-center">Няма намерени картини</div>
            ) : (
                <>
                    <div className="flex gap-4 flex-wrap justify-center">
                        {artworks.map((artwork) => (
                            <ArtworkCard key={artwork.id} artwork={artwork} />
                        ))}
                    </div>

                    <PaginationComponent artworkCount={artworks.length} />
                </>
            )}
        </div>
    );
};
