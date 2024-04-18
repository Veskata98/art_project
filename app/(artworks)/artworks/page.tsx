import { getArtworksFromAllCategories } from '@/actions/artworkActions';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

interface ArtworksPageProps {
    searchParams: { page: string };
}

export const revalidate = 300;

export default async function ArtworksPage({ searchParams }: ArtworksPageProps) {
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;

    const { artworks, totalArtworks } = await getArtworksFromAllCategories(pageNumber);

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks || 0} />;
}
