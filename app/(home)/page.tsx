import { getLatestArtworks } from '@/actions/artworkActions';

import { HomePageCarousel } from '@/components/home/Carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
  const latestArtworks = await getLatestArtworks();

  return (
    <div className="flex flex-col px-4 items-center container mx-auto mt-4 space-y-4 md:space-y-8 mb-8">
      <div>
        <span className="absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-[#974ef2] to-[#ff953f] bg-clip-text text-3xl md:text-5xl  box-content font-extrabold text-transparent text-center text-pretty select-none p-2">
          Добре дошли в моята галерия
        </span>
        <h1 className="relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-[#974ef2] to-[#ff953f] bg-clip-text text-3xl md:text-5xl  font-extrabold text-transparent text-center text-pretty select-none p-2">
          Добре дошли в моята галерия
        </h1>
      </div>

      <p className="text-lg md:text-2xl text-center text-pretty md:font-semibold select-none">
        Изкуството е начин на живот. Разгледайте моите произведения и се насладете на красотата, която те носят.
      </p>

      <HomePageCarousel latestArtworks={latestArtworks} />

      <Button asChild>
        <Link
          href="/artworks"
          className="text-xl transition-shadow font-semibold bg-gradient-to-r from-[#974ef2] to-[#ff953f] shadow-gradient-shadow hover:shadow-gradient-shadow-hover text-white
          "
        >
          Разгледайте цялата колекция
        </Link>
      </Button>
    </div>
  );
}
