import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter } from '../ui/card';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const surfaceMap: any = {
    Canvas: 'Платно',
    Cardboard: 'Картон',
    Paper: 'Хартия',
    Wood: 'Дърво',
    Metal: 'Метал',
    Glass: 'Стъкло',
    Stone: 'Камък',
};

export const ArtworkCard = ({ artwork }: { artwork: any }) => {
    return (
        <Link href={`/artworks/${artwork.id}`}>
            <Card>
                <CardContent
                    className="p-2 rounded shadow-none flex flex-col 
                    justify-center items-center w-96"
                >
                    <div className="relative">
                        <Image
                            className={cn('rounded-t w-full h-96 object-contain', !artwork.available && 'opacity-30')}
                            src={artwork.imageUrl}
                            alt="The Starry Night"
                        />
                        {!artwork.available && (
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                                <p className="text-2xl font-bold drop-shadow-md -rotate-45 tracking-wide">
                                    Не е налична
                                </p>
                            </div>
                        )}
                    </div>
                    <CardFooter className="flex flex-col mt-2">
                        <h2 className="text-xl font-bold">{artwork.title}</h2>

                        <p className="font-semibold text-sm">{artwork.category}</p>

                        <div className="flex flex-col mt-2 text-center italic">
                            <p className="text-sm">Размери: {artwork.size}</p>
                            <p className="text-sm">Повърхност: {surfaceMap[artwork.surface]}</p>
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
        </Link>
    );
};
