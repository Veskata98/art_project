import { redirect } from 'next/navigation';

import { getArtworkById } from '@/actions/artworkActions';

import { Artwork } from '@/types';

import { Separator } from '@/components/ui/separator';

import { ReturnButton } from '@/components/ReturnButton';
import { ImageMagnifier } from '@/components/ImageMagnifier';

import { ShareButtons } from '@/components/artwork/ShareButtons';
import { SimilarArtworks } from '@/components/artwork/SimilarArtworks';
import { ArtworkDetails } from '@/components/artwork/ArtworkDetails';
import { ArtworkSidePanel } from '@/components/artwork/ArtworkSidePanel';

type ArtworkIdPageParams = {
    params: {
        artworkId: string;
    };
};

export const revalidate = 300;

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
    const artworkId = params.artworkId;
    const artwork: Artwork = await getArtworkById(artworkId);

    if (!artwork) {
        return redirect('/');
    }

    return (
        <section className="relative w-full 2xl:w-4/6 xl:w-5/6">
            <ReturnButton className="hover:underline flex gap-x-2 mb-2" />
            <div className="flex lg:flex-row flex-col gap-6 mb-2">
                <div className="w-full flex flex-1 justify-center items-center">
                    <div className=" min-w-[300px] w-full md:w-10/12 h-[400px] md:h-[500px] lg:h-[600px] relative p-2">
                        <ImageMagnifier src={artwork.image} alt={artwork.title} />
                    </div>
                </div>
                <ArtworkSidePanel artwork={artwork} />
            </div>
            <ShareButtons url={`${process.env.URL}/artwork/${artwork.id}`} />
            <Separator className="md:my-2 my-4" />
            <ArtworkDetails available={artwork.available} description={artwork.description} />
            <SimilarArtworks category={artwork.category} id={artwork.id} />
        </section>
    );
}
