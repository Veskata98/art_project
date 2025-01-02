import { redirect } from 'next/navigation';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

import { categoryMap } from '@/utils/helpers';

import { getArtworksByCategory } from '@/actions/artworkActions';

interface ArtworksCategoryPageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    page: string;
  }>;
}

export default async function ArtworksCategoryPage({ params, searchParams }: ArtworksCategoryPageProps) {
  const category = (await params).category;

  if (!categoryMap[category]) {
    return redirect('/artworks');
  }

  const paramsPage = (await searchParams).page;
  const pageNumber = paramsPage ? parseInt(paramsPage) : 1;
  const { artworks, totalArtworks } = await getArtworksByCategory(category, pageNumber);

  return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks || 0} heading={categoryMap[category]} />;
}
