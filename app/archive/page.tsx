import { ArtworksSection } from '@/components/artworks/ArtworksSection';
import { Artwork } from '@/types';
import sql from '@/lib/db';

export default async function ArchivePage() {
    const result = await sql`
        SELECT *, (SELECT COUNT(*) FROM artworks) as total 
        FROM artworks 
        WHERE available = false
        ORDER BY created_at DESC 
    `;

    const artworks: Artwork[] = result.map((result: any) => ({ ...result }));
    const totalArtworks = Number(result[0]?.total);

    return <ArtworksSection artworks={artworks} totalArtworkCount={0} heading="Архив" />;
}
