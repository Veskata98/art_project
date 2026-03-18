import type { Metadata } from 'next';
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

export async function generateMetadata({ params }: ArtworkIdPageParams): Promise<Metadata> {
  const artworkId = (await params).artworkId;
  const artwork: Artwork = await getArtworkById(artworkId);

  if (!artwork) {
    return { title: 'Картина не е намерена' };
  }

  return {
    title: artwork.title,
    description: artwork.description || `${artwork.title} - оригинална картина от Петър Йорданов.`,
    openGraph: {
      title: artwork.title,
      description: artwork.description || `${artwork.title} - оригинална картина от Петър Йорданов.`,
      images: [{ url: artwork.image, alt: artwork.title }],
    },
  };
}

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
  const artworkId = (await params).artworkId;
  const artwork: Artwork = await getArtworkById(artworkId);

  if (!artwork) {
    return redirect('/');
  }

  return (
    <section className="relative container mx-auto px-4 2xl:px-0 space-y-4">
      <ReturnButton className="hover:underline flex gap-x-2 mb-2" />

      <div className="flex lg:flex-row flex-col gap-8 mb-4 min-h-[600px]">
        <div className="relative flex-grow flex justify-center items-start">
          <div className="gallery-frame rounded-sm p-1 bg-white dark:bg-neutral-900">
            <Image
              src={artwork.image}
              alt={artwork.title}
              className="object-contain mx-auto rounded-sm"
              width={600}
              height={600}
              sizes="(max-width: 1024px) 90vw, 600px"
              priority
            />
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
