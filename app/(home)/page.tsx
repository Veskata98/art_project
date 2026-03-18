import type { Metadata } from 'next';
import { getLatestArtworks } from '@/actions/artworkActions';

import { HomePageCarousel } from '@/components/home/Carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Начало',
  description: 'Галерия на художника Петър Йорданов - оригинални картини, пейзажи, абстракции и портрети.',
};

export default async function HomePage() {
  const latestArtworks = await getLatestArtworks();

  return (
    <div className="flex flex-col px-4 items-center container mx-auto mt-4 space-y-6 md:space-y-10 mb-12">
      <div className="relative text-center max-w-3xl">
        <span
          className="absolute inset-0 mx-auto flex w-fit bg-gradient-to-r blur-xl
            from-[#C9A96E] via-[#B8860B] to-[#8B6914]
            bg-clip-text text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent select-none"
        >
          Добре дошли в моята галерия
        </span>
        <h1
          className="relative w-fit mx-auto bg-gradient-to-r
            from-[#C9A96E] via-[#B8860B] to-[#8B6914]
            bg-clip-text text-3xl md:text-5xl lg:text-6xl font-extrabold text-transparent select-none"
        >
          Добре дошли в моята галерия
        </h1>
      </div>
      <p className="text-lg md:text-xl text-center text-pretty text-muted-foreground max-w-2xl leading-relaxed select-none">
        Изкуството е начин на живот. Разгледайте моите произведения и се насладете на красотата, която те носят.
      </p>

      <HomePageCarousel latestArtworks={latestArtworks} />

      <Button asChild size="lg">
        <Link
          href="/artworks"
          className="text-lg sm:text-xl transition-all duration-300 font-semibold
            bg-gradient-to-r from-[#C9A96E] via-[#B8860B] to-[#8B6914]
            shadow-md hover:shadow-lg hover:scale-[1.02] text-white"
        >
          Разгледайте цялата колекция
        </Link>
      </Button>
    </div>
  );
}
