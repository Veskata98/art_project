import { getLatestArtworks } from '@/actions/artworkActions';

import { HomePageCarousel } from '@/components/home/Carousel';

export default async function HomePage() {
    const latestArtworks = await getLatestArtworks();

    return (
        <div className="flex flex-col items-center md:w-3/4 w-full">
            <h1 className="text-3xl font-bold md:mb-2 mb-4 text-center">Добре дошли в моята галерия</h1>
            <p className="text-lg mb-4 text-center">
                Изкуството е начин на живот. Разгледайте моите произведения и се насладете на красотата, която те носят.
            </p>
            <HomePageCarousel latestArtworks={latestArtworks} />
        </div>
    );
}
