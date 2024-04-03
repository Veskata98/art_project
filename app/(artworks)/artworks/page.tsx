import sql from '@/lib/db';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';
import { Artwork } from '@/types';

export default async function page({ searchParams }: { searchParams: { page: string } }) {
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;

    const artworks: Artwork[] = await sql`SELECT * FROM artworks ORDER BY created_at DESC LIMIT 6 OFFSET ${
        (pageNumber - 1) * 6
    }`;

    const totalArtworks = Number((await sql`SELECT COUNT(*) FROM artworks`).at(0)?.count);

    // await sql`INSERT INTO artworks (title, category, available, surface, size, image) VALUES ('The Starry Night', 'Пейзаж', true, 'Canvas', '40x60cm', 'https://smisyrqgnqamsbzmlhox.supabase.co/storage/v1/object/public/images/183812.jpg?t=2024-04-03T06%3A38%3A24.475Z')`;

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks} />;
}
