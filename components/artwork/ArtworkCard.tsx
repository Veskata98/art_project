import Image from 'next/image';
import Link from 'next/link';

import { categoryMap, cn, formatSize, surfaceMap } from '@/utils/helpers';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const ArtworkCard = ({ artwork }: { artwork: any }) => {
    return (
        <Link href={`/artwork/${artwork.id}`}>
            <Card>
                <CardContent
                    className="p-2 rounded shadow-none flex flex-col 
                    justify-center items-center w-72"
                >
                    <div className="relative w-[280px] h-[280px]">
                        <Image
                            className={cn('rounded object-contain overflow-hidden', !artwork.available && 'opacity-30')}
                            src={artwork.image}
                            alt={artwork.title}
                            fill
                        />
                        {!artwork.available && (
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-2xl font-bold drop-shadow-md -rotate-45 tracking-wide">
                                    Не е налична
                                </p>
                            </div>
                        )}
                    </div>
                    <Separator className="mt-2" />
                    <CardFooter className="flex flex-col mt-2">
                        <h2 className="text-xl font-bold">{artwork.title}</h2>

                        <p className="font-semibold text-sm">{categoryMap[artwork.category]}</p>

                        <div className="flex flex-col mt-2 text-center italic">
                            <p className="text-sm">Размери: {formatSize(artwork.length, artwork.width)}</p>
                            <p className="text-sm">Повърхност: {surfaceMap[artwork.surface]}</p>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </Link>
    );
};
