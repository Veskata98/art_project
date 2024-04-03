import { getArtworksFromAllCategories } from '@/actions/artworkActions';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

export default async function ArtworksPage({ searchParams }: { searchParams: { page: string } }) {
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;
    const { artworks, totalArtworks } = await getArtworksFromAllCategories(pageNumber);

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks} />;
}
