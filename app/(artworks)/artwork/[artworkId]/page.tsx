import { ReturnButton } from '@/components/ReturnButton';
import sql from '@/lib/db';

import { Artwork } from '@/types';
import { Check, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface ArtworkIdPageParams {
    params: {
        artworkId: string;
    };
}

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
    const artworkId = params.artworkId;
    let artwork;

    try {
        artwork = (await sql`SELECT * FROM artworks WHERE id = ${artworkId}`).at(0) as Artwork;

        console.log(artwork);
    } catch (error) {
        console.log(error);
    }

    if (!artwork) {
        return redirect('/');
    }

    return (
        <section className="relative w-full md:w-4/6">
            <ReturnButton className="hover:underline flex gap-x-2 mb-2" />
            <div className="flex gap-6">
                <div className="flex flex-col justify-center items-center w-full">
                    <Image src={artwork.image} alt={artwork.title} width={500} height={500} className="w-full" />
                </div>
                <aside className="w-96 flex flex-col bg-zinc-200 rounded p-4 items-center">
                    <h1 className="text-xl font-semibold mb-2">{artwork?.title}</h1>

                    {artwork.available ? (
                        <p className="text-emerald-500 flex gap-2 font-semibold mb-6">
                            Налична
                            <Check />
                        </p>
                    ) : (
                        <p className="text-red-500 flex gap-2 font-semibold mb-6">
                            Не е налична <X />
                        </p>
                    )}
                    <p>
                        Категория: <Link href={`/artworks/${artwork.category}`}>{artwork.category}</Link>
                    </p>

                    <p>Размери: {artwork?.size}</p>
                    <p>Повърхност: {artwork.surface}</p>
                </aside>
            </div>
        </section>
    );
}
