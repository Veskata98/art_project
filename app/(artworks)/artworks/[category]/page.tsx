import { redirect } from 'next/navigation';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

import { Artwork } from '@/types';

import sql from '@/lib/db';

interface ArtworksCategoryPageProps {
    params: {
        category: string;
    };
    searchParams: {
        page: string;
    };
}

const CategoryMap: any = {
    landscapes: 'Пейзаж',
    abstractions: 'Абстракция',
    portraits: 'Портрет',
    'still-life': 'Натюрморт',
    figurative: 'Фигуративно',
    realism: 'Реализъм',
    impressionism: 'Импресионизъм',
};

export default async function ArtworksCategoryPage({ params, searchParams }: ArtworksCategoryPageProps) {
    const category = CategoryMap[params.category];
    const pageNumber = searchParams.page ? parseInt(searchParams.page) : 1;

    if (!category) {
        return redirect('/artworks');
    }

    const artworks: Artwork[] =
        await sql`Select * from artworks where category = ${category} ORDER BY created_at DESC LIMIT 6 OFFSET ${
            (pageNumber - 1) * 6
        }`;
    const totalArtworks = Number((await sql`SELECT COUNT(*) FROM artworks WHERE category = ${category}`).at(0)?.count);

    return <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks} heading={category} />;
}
