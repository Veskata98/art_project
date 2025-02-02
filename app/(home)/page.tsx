import { getLatestArtworks } from '@/actions/artworkActions';

import { HomePageCarousel } from '@/components/home/Carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function HomePage() {
  const latestArtworks = await getLatestArtworks();

  return (
    <div className="flex flex-col px-4 items-center container mx-auto mt-4 space-y-4 md:space-y-8 mb-8">
      <div className="relative">
        <span
          className="absolute inset-0 mx-auto flex w-fit bg-gradient-to-r blur-xl 
    from-[#72e9c1] via-[#00c471] via-[#d2f122] via-[#e7b921] to-[#f55105] 
    bg-clip-text text-3xl md:text-5xl font-extrabold text-transparent text-center select-none"
        >
          Добре дошли в моята галерия
        </span>
        <h1
          className="relative w-fit mx-auto bg-gradient-to-r 
    from-[#72e9c1] via-[#00c471] via-[#d2f122] via-[#e7b921] to-[#f55105] 
    bg-clip-text text-3xl md:text-5xl font-extrabold text-transparent text-center select-none"
        >
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
          className="text-xl transition-shadow font-semibold bg-gradient-to-r 
    from-[#72e9c1] via-[#00c471] via-[#d2f122] via-[#e7b921] to-[#f55105] shadow hover:shadow-md dark:shadow-white-shadow text-white
          "
        >
          Разгледайте цялата колекция
        </Link>
      </Button>
    </div>
  );
}
