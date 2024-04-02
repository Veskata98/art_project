'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import monalisa from '@/public/monalisa.webp';
import Image from 'next/image';
import Link from 'next/link';

export const HomePageCarousel = () => {
    return (
        <>
            <Carousel
                className="w-5/12"
                plugins={[
                    Autoplay({
                        delay: 5000,
                        waitForTransition: true,
                        loop: true,
                    }),
                ]}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <div className="w-full h-full">
                                            <Image
                                                src={monalisa}
                                                alt="Mona Lisa"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Link href="/artworks" className="pt-2 text-xl font-semibold hover:underline">
                Разгледайте цялата колекция
            </Link>
        </>
    );
};
