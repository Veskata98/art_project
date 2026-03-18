import type { Metadata } from 'next';
import { getArchivedArtworks } from '@/actions/artworkActions';
import { ArtworksSection } from '@/components/artworks/ArtworksSection';

export const metadata: Metadata = {
  title: 'Архив',
  description: 'Архив на продадени и недостъпни картини от художника Петър Йорданов.',
};

export default async function ArchivePage() {
  const artworks = await getArchivedArtworks();

  return <ArtworksSection artworks={artworks} totalArtworkCount={0} heading="Архив" classname="container mx-auto" />;
}
