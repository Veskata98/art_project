import type { Metadata } from 'next';
import { getArtworksFromAllCategories } from '@/actions/artworkActions';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

export const metadata: Metadata = {
  title: 'Картини',
  description: 'Разгледайте колекцията от оригинални картини на Петър Йорданов - пейзажи, абстракции, портрети и още.',
};

interface ArtworksPageProps {
  searchParams: Promise<{ page: string }>;
}

export default async function ArtworksPage({ searchParams }: ArtworksPageProps) {
  const paramsPage = (await searchParams).page;
  const pageNumber = paramsPage ? parseInt(paramsPage) : 1;

  const { artworks, totalArtworks } = await getArtworksFromAllCategories(pageNumber);

  return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks || 0} />;
}
