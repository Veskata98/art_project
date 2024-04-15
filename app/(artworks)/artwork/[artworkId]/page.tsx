import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Check, X } from 'lucide-react';

import { getArtworkById } from '@/actions/artworkActions';

import { categoryMap, formatSize, surfaceMap } from '@/utils/helpers';
import { Artwork } from '@/types';

import { ReturnButton } from '@/components/ReturnButton';
import { ShareButtons } from '@/components/ShareButtons';
import { Separator } from '@/components/ui/separator';
import { SimilarArtworks } from '@/components/artworks/SimilarArtworks';

type ArtworkIdPageParams = {
    params: {
        artworkId: string;
    };
};

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
    const artworkId = params.artworkId;

    const artwork: Artwork = await getArtworkById(artworkId);

    if (!artwork) {
        return redirect('/');
    }
    return (
        <section className="relative w-full xl:w-4/6 lg:w-5/6">
            <ReturnButton className="hover:underline flex gap-x-2 mb-2" />
            <div className="flex md:flex-row flex-col gap-6 mb-2">
                <div className="flex flex-col justify-center items-center w-full h-[300px] md:h-[600px] relative">
                    <Image src={artwork.image} alt={artwork.title} className="object-contain p-2 shadow-xl" fill />
                </div>
                <aside className="md:w-[30rem] w-full flex flex-col rounded p-4 items-center justify-around md:shadow-xl">
                    <div className="text-center mb-6 md:mb-0">
                        <h1 className="text-xl font-semibold mb-2 text-center">{artwork?.title}</h1>
                        <p className="flex gap-2 justify-center items-center">
                            <span className="font-semibold">Категория:</span>{' '}
                            <Link href={`/artworks/${artwork.category}`} className="text-zinc-700 underline text-sm">
                                {categoryMap[artwork.category]}
                            </Link>
                        </p>
                    </div>

                    <div className="mb-6">
                        {artwork.available ? (
                            <div className="flex flex-col items-center">
                                <p className="text-green-500 flex items-center gap-2 font-semibold">
                                    <Check className="w-5 h-5" /> Налична
                                </p>
                                <span className="">{artwork.price} лв</span>
                            </div>
                        ) : (
                            <p className="text-red-500 flex items-center gap-2 font-semibold">
                                <X className="w-5 h-5" /> Не е налична
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-4 text-center p-3 rounded-md shadow-lg border border-gray-100 w-full">
                        <p className="text-lg flex justify-center items-center gap-2">
                            <span className="font-semibold text-zinc-800">Рамка:</span>
                            {artwork.frame ? (
                                <Check className="w-5 h-5 text-emerald-500" />
                            ) : (
                                // <X className="w-5 h-5 text-red-500" />
                                <span>Без</span>
                            )}
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold text-zinc-800">Размери:</span>{' '}
                            <span className="text-gray-800">{formatSize(artwork.length, artwork.width)}</span>
                        </p>
                        <p className="text-lg">
                            <span className="font-semibold text-zinc-800">Повърхност:</span>{' '}
                            <span className="text-gray-800">{surfaceMap[artwork.surface]}</span>
                        </p>
                    </div>
                </aside>
            </div>
            <ShareButtons url={`${process.env.URL}/artworks/${artwork.id}`} />
            <Separator className="md:my-2 my-4" />
            <div className="md:shadow-xl md:p-8 min-h-40 mt-2 mb-4 md:mb-0">
                <h5 className="text-lg mb-2">Допълнителна информация</h5>
                <p className="mb-8">{artwork.description}</p>
                {artwork.available && (
                    <>
                        <Separator className="my-2" />
                        <p className="font-semibold text-center">
                            За повече информация относно картината, моля свържете се с мен{' '}
                            <Link href="/contacts" className="underline text-blue-500">
                                тук
                            </Link>
                        </p>
                    </>
                )}
            </div>
            <SimilarArtworks category={artwork.category} id={artwork.id} />
        </section>
    );
}
