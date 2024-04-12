import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Check, X } from 'lucide-react';

import { getArtworkById } from '@/actions/artworkActions';

import { categoryMap, formatSize, surfaceMap } from '@/lib/utils';
import { Artwork } from '@/types';

import { ReturnButton } from '@/components/ReturnButton';
import { ShareButtons } from '@/components/ShareButtons';
import { Separator } from '@/components/ui/separator';

interface ArtworkIdPageParams {
    params: {
        artworkId: string;
    };
}

const url = '';

export default async function ArtworkIdPage({ params }: ArtworkIdPageParams) {
    const artworkId = params.artworkId;

    const artwork: Artwork = await getArtworkById(artworkId);

    if (!artwork) {
        return redirect('/');
    }

    return (
        <section className="relative w-full xl:w-4/6 lg:w-5/6">
            <ReturnButton className="hover:underline flex gap-x-2 mb-2" />
            <div className="md:flex gap-6 mb-2">
                <div className="flex flex-col justify-center items-center w-full h-[300px] md:h-[600px] relative">
                    <Image src={artwork.image} alt={artwork.title} className="object-contain p-2 shadow-xl" fill />
                </div>
                <aside className="md:w-[30rem] w-full flex flex-col rounded p-4 items-center justify-around md:shadow-xl">
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
                            <div className="flex flex-col items-center">
                                <p className="text-green-500 flex items-center gap-2 font-semibold">
                                    <Check className="w-5 h-5" /> Налична
                                </p>
                                <span className="">Цена: {artwork.price} лв</span>
                            </div>
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
            <ShareButtons url={`${url}/artworks/${artwork.id}`} />
            <Separator className="my-2" />
            <div className="md:shadow-xl md:p-8 min-h-40 mt-2">
                <h5 className="text-lg mb-2">Допълнителна информация</h5>
                <p>{artwork.description}</p>

                <Separator className="my-2" />
                <h2 className="text-lg mb-2">Доставка и гаранция</h2>
                <p className="text-justify">
                    При покупка на картина, гарантирамe внимателно опаковане и безпроблемна доставка до вашето населено
                    място чрез услугите на Еконт или Спиди. За клиентите от град Пловдив осигурявамe възможност за лично
                    вземане. Всеки продукт ще бъде придружен с официален сертификат за авторство, гарантирайки, че това
                    което купувате е оригинално и уникално изкуство.
                </p>
            </div>
        </section>
    );
}
