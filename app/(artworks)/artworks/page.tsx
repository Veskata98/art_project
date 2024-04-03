import sql from '@/lib/db';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';
import { Artwork } from '@/types';

export default async function page({ searchParams }: { searchParams: { page: string } }) {
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;
    const offset = (pageNumber - 1) * 6;

    const result = await sql`
        SELECT *, (SELECT COUNT(*) FROM artworks) as total 
        FROM artworks 
        ORDER BY created_at DESC 
        LIMIT 6 OFFSET ${offset}
    `;

    const artworks: Artwork[] = result.map((result: any) => ({ ...result }));
    const totalArtworks = Number(result[0]?.total);

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks} />;
}
