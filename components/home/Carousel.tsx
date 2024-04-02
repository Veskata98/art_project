'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import monalisa from '@/public/monalisa.webp';
import car from '@/public/car.jpg';

import Image from 'next/image';
import Link from 'next/link';

export const HomePageCarousel = () => {
    return (
        <>
            <Carousel
                className="w-full"
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
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <Link key={index} href={`/artwork/${index}`}>
                                <Card>
                                    <CardContent className="p-0 flex justify-center h-[600px]">
                                        {index % 2 === 0 ? (
                                            <Image src={monalisa} alt="Mona Lisa" className="w-full object-contain" />
                                        ) : (
                                            <Image src={car} alt="Mona Lisa" className="w-full object-contain" />
                                        )}
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
                className="pt-2 text-xl font-semibold hover:underline bg-zinc-700 p-2 rounded my-6 text-white"
            >
                Разгледайте цялата колекция
            </Link>
        </>
    );
};
