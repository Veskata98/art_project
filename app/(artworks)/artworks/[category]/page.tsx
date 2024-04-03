import { redirect } from 'next/navigation';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

import { Artwork } from '@/types';

import sql from '@/lib/db';

import { CategoryMap } from '@/lib/utils';

interface ArtworksCategoryPageProps {
    params: {
        category: string;
    };
    searchParams: {
        page: string;
    };
}

export default async function ArtworksCategoryPage({ params, searchParams }: ArtworksCategoryPageProps) {
    const category = params.category;

    if (!category) {
        return redirect('/artworks');
    }

    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;
    const offset = (pageNumber - 1) * 6;

    const result = await sql`
        SELECT *, (SELECT COUNT(*) FROM artworks WHERE category=${category}) as total 
        FROM artworks
        WHERE category = ${category} 
        ORDER BY created_at DESC 
        LIMIT 6 OFFSET ${offset}
    `;

    const artworks: Artwork[] = result.map((result: any) => ({ ...result }));
    const totalArtworks = Number(result[0]?.total);

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks} heading={CategoryMap[category]} />;
}
