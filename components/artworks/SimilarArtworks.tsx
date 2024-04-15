import { ScrollBar, ScrollArea } from '@/components/ui/scroll-area';
import { ArtworkCard } from '@/components/artwork/ArtworkCard';

import { getSimilarArtworks } from '@/actions/artworkActions';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Artwork } from '@/types';

type SimilarArtworksProps = {
    category: string;
    id: string;
};

export const SimilarArtworks = async ({ category, id }: SimilarArtworksProps) => {
    const similarArtworks: Artwork[] = await getSimilarArtworks(category, id);

    if (!similarArtworks.length) return null;

    return (
        <div className="mt-6">
            <h2 className="text-xl">Подобни картини</h2>
            <ScrollArea>
                <div className="flex py-2 gap-4 mb-4">
                    {similarArtworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                    {similarArtworks.length === 12 && (
                        <div className="flex flex-col justify-center items-center w-60">
                            <p>Вижте още подобни картини</p>
                            <Link
                                href={`/artworks/${category}`}
                                className="flex text-zinc-700 underline items-center justify-center gap-1"
                            >
                                тук <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    )}
                </div>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    );
};
