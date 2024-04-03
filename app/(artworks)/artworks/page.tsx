import sql from '@/lib/db';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';
import { Artwork } from '@/types';

export default async function page({ searchParams }: { searchParams: { page: string } }) {
    console.log(searchParams);

    const artworks = (await sql`SELECT * FROM artworks`) as Artwork[];

    if (!artworks) {
        return <div>No artworks found</div>;
    }

    // await sql`INSERT INTO artworks (title, category, available, surface, size) VALUES ('The Starry Night', 'Пейзаж', true, 'Canvas', '40x60cm')`;

    return <ArtworksSection artworks={artworks} />;
}
