import { redirect } from 'next/navigation';

import { getArtworkById } from '@/actions/artworkActions';

import { Artwork } from '@/types';

import { Separator } from '@/components/ui/separator';

import { ReturnButton } from '@/components/ReturnButton';

import { ShareButtons } from '@/components/artwork/ShareButtons';
import { SimilarArtworks } from '@/components/artwork/SimilarArtworks';
import { ArtworkDetails } from '@/components/artwork/ArtworkDetails';
import { ArtworkSidePanel } from '@/components/artwork/ArtworkSidePanel';
import Image from 'next/image';

type ArtworkIdPageParams = {
  params: Promise<{
    artworkId: string;
  }>;
};

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
  const artworkId = (await params).artworkId;
  const artwork: Artwork = await getArtworkById(artworkId);

  if (!artwork) {
    return redirect('/');
  }

  return (
    <section className="relative container mx-auto px-4 2xl:px-0 space-y-4">
      <ReturnButton className="hover:underline flex gap-x-2 mb-2" />

      <div className="flex lg:flex-row flex-col gap-6 mb-2 min-h-[600px]">
        <div className="relative flex-grow justify-center items-center">
          <Image
            src={artwork.image}
            alt={artwork.title}
            className="object-contain mx-auto shadow"
            width={600}
            height={600}
          />
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
