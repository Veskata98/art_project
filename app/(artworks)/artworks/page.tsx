import Link from 'next/link';
import sql from '@/lib/db';

import { ArtworkCard } from '@/components/artwork/ArtworkCard';

import monalisa from '/public/monalisa.webp';
import car from '/public/car.jpg';

import { PaginationComponent } from '@/components/pagination/Pagination';

export default async function page({ searchParams }: { searchParams: { page: string } }) {
    console.log(searchParams);

    const artworks = await sql`SELECT * FROM artworks`;

    console.log(artworks.flat());

    // await sql`INSERT INTO artworks (title, category, available, surface, size) VALUES ('The Starry Night', 'Пейзаж', true, 'Canvas', '40x60cm')`;

    // const artworks = [
    //     {
    //         id: 1,
    //         title: 'The Starry Night',
    //         imageUrl: monalisa,
    //         category: 'Пейзаж',
    //         available: true,
    //         surface: 'Canvas',
    //     },
    //     {
    //         id: 2,
    //         title: 'The Scream',
    //         imageUrl: car,
    //         category: 'Абстракция',
    //         available: false,
    //         surface: 'Cardboard',
    //         size: '40x60cm',
    //     },
    //     {
    //         id: 3,
    //         title: 'Mona Lisa',
    //         imageUrl: monalisa,
    //         category: 'Портрет',
    //         available: true,
    //         surface: 'Canvas',
    //         size: '50x70cm',
    //     },
    //     {
    //         id: 4,
    //         title: 'The Last Supper',
    //         imageUrl: car,
    //         category: 'Натюрморт',
    //         available: true,
    //         surface: 'Cardboard',
    //         size: '60x80cm',
    //     },
    //     {
    //         id: 5,
    //         title: 'The Persistence of Memory',
    //         imageUrl: monalisa,
    //         category: 'Абстракция',
    //         available: true,
    //         surface: 'Canvas',
    //         size: '40x60cm',
    //     },
    //     {
    //         id: 6,
    //         title: 'Guernica',
    //         imageUrl: car,
    //         category: 'Абстракция',
    //         available: true,
    //         surface: 'Canvas',
    //         size: '50x70cm',
    //     },
    // ];

    return (
        <div className="w-full md:w-5/6 flex">
            <aside className="w-64 text-zinc-800 p-4 flex flex-col pt-9">
                <ul className="flex flex-col gap-4 text-lg font-semibold">
                    <li>
                        <Link href="/artworks/landscapes">Пейзаж</Link>
                    </li>
                    <li>
                        <Link href="/artworks/portraits">Портрет</Link>
                    </li>
                    <li>
                        <Link href="/artworks/abstract">Абстракция</Link>
                    </li>
                    <li>
                        <Link href="/artworks/still-life">Натюрморт</Link>
                    </li>
                    <li>
                        <Link href="/artworks/figurative">Фигуративно</Link>
                    </li>
                    <li>
                        <Link href="/artworks/realism">Реализъм</Link>
                    </li>
                    <li>
                        <Link href="/artworks/impressionism">Импресионизъм</Link>
                    </li>
                    <li>
                        <Link href="/artworks/expressionism">Експресионизъм</Link>
                    </li>
                    <li>
                        <Link href="/artworks/cubism">Кубизъм</Link>
                    </li>
                    <li>
                        <Link href="/artworks/surrealism">Сюрреализъм</Link>
                    </li>
                </ul>
            </aside>
            <div className="flex-1">
                <h1 className="text-2xl font-bold text-center mb-2">Последни Картини</h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    {artworks.map((artwork) => (
                        <ArtworkCard key={artwork.id} artwork={artwork} />
                    ))}
                </div>

                <PaginationComponent artworkCount={artworks.count} />
            </div>
        </div>
    );
}
