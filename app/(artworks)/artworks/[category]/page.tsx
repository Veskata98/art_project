import { redirect } from 'next/navigation';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

import { Artwork } from '@/types';

import sql from '@/lib/db';

interface ArtworksCategoryPageProps {
    params: {
        category: string;
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

export default async function ArtworksCategoryPage({ params }: ArtworksCategoryPageProps) {
    const category = CategoryMap[params.category];

    if (!category) {
        return redirect('/artworks');
    }

    const artworks: Artwork[] = await sql`Select * from artworks where category = ${category}`;

    return <ArtworksSection artworks={artworks} heading={category} />;
}
