import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';

import { getSimilarArtworks } from '@/actions/artworkActions';

type SimilarArtworksProps = {
    category: string;
    id: string;
};

export const SimilarArtworks = async ({ category, id }: SimilarArtworksProps) => {
    const similarArtworks = await getSimilarArtworks(category, id);
    return (
        <div className="mt-6">
            <h2 className="text-xl">Подобни картини</h2>
            <ScrollArea>
                <div className="flex py-2 gap-4 mb-4">
                    {similarArtworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
