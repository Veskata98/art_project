import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { categoryMap, formatSize, surfaceMap } from '@/lib/utils';

import { Check, X } from 'lucide-react';

import { ReturnButton } from '@/components/ReturnButton';

import { getArtworkById } from '@/actions/artworkActions';
import { format } from 'node:path/win32';

interface ArtworkIdPageParams {
    params: {
        artworkId: string;
    };
}

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
    const artworkId = params.artworkId;

    const artwork = await getArtworkById(artworkId);

    if (!artwork) {
        return redirect('/');
    }

    return (
        <section className="relative w-full lg:w-4/6 md:w-5/6">
            <ReturnButton className="hover:underline flex gap-x-2 mb-2" />
            <div className="md:flex gap-6">
                <div className="flex flex-col justify-center items-center w-full h-[300px] md:h-[600px] relative">
                    <Image src={artwork.image} alt={artwork.title} className="object-contain p-2 shadow-xl" fill />
                </div>
                <aside className="w-96 flex flex-col rounded p-4 items-center justify-around shadow-xl">
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-2 text-center">{artwork?.title}</h1>
                        <p className="flex gap-2 justify-center items-center">
                            <span className="font-semibold">Категория:</span>{' '}
                            <Link href={`/artworks/${artwork.category}`} className="text-zinc-700 underline text-sm">
                                {categoryMap[artwork.category]}
                            </Link>
                        </p>
                    </div>

                    <div className="mb-6">
                        {artwork.available ? (
                            <p className="text-green-500 flex items-center gap-2 font-semibold">
                                <Check className="w-5 h-5" /> Налична
                            </p>
                        ) : (
                            <p className="text-red-500 flex items-center gap-2 font-semibold">
                                <X className="w-5 h-5" /> Не е налична
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 text-center">
                        <p>
                            <span className="font-semibold">Размери:</span> {formatSize(artwork.length, artwork.width)}
                        </p>
                        <p>
                            <span className="font-semibold">Повърхност:</span> {surfaceMap[artwork.surface]}
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
