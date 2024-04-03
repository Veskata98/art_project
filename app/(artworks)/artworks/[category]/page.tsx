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
        return <div>Invalid category</div>;
    }

    const artworks = await sql`Select * from artworks where category = ${category}`;

    return <div>{JSON.stringify(artworks)}</div>;
}
