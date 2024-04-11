'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import Image from 'next/image';
import Link from 'next/link';
import { Artwork } from '@/types';

interface HomePageCarouselProps {
    latestArtworks: Artwork[];
}

export const HomePageCarousel = ({ latestArtworks }: HomePageCarouselProps) => {
    return (
        <>
            <Carousel
                className="w-9/12 md:w-full"
                plugins={[
                    Autoplay({
                        delay: 5000,
                        waitForTransition: true,
                        loop: true,
                        stopOnMouseEnter: true,
                    }),
                ]}
            >
                <CarouselContent>
                    {latestArtworks.map((artwork) => (
                        <CarouselItem key={artwork.id} className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                            <Link href={`/artwork/${artwork.id}`}>
                                <Card>
                                    <CardContent className="p-4 flex justify-center lg:h-[500px] md:h-[450px] h-[400px]">
                                        <Image
                                            src={artwork.image}
                                            alt={artwork.title}
                                            className="w-full object-contain"
                                            width={600}
                                            height={600}
                                        />
                                    </CardContent>
                                </Card>
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Link
                href="/artworks"
                className="py-2 text-xl font-semibold hover:bg-zinc-500 transition-all bg-zinc-700 px-4 rounded my-6 text-white"
            >
                Разгледайте цялата колекция
            </Link>
        </>
    );
};
