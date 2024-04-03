import Link from 'next/link';

const CategoryMap: any = {
    '': 'Всички',
    landscapes: 'Пейзаж',
    abstractions: 'Абстракция',
    portraits: 'Портрет',
    'still-life': 'Натюрморт',
    figurative: 'Фигуративно',
    realism: 'Реализъм',
    impressionism: 'Импресионизъм',
};

export const ArtworkCategorySection = () => {
    return (
        <aside className="w-64 text-zinc-800 p-4 flex flex-col pt-9">
            <ul className="flex flex-col gap-4 text-lg font-semibold">
                {Object.entries(CategoryMap).map(([category, label]) => (
                    <li key={category}>
                        <Link href={`/artworks/${category}`}>{label as string}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
