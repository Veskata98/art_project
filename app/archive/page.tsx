import { getArchivedArtworks } from '@/actions/artworkActions';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

export const revalidate = 300;

export default async function ArchivePage() {
    const artworks = await getArchivedArtworks();
    return <ArtworksSection artworks={artworks} totalArtworkCount={0} heading="Архив" />;
}
