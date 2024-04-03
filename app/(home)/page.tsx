import { getLatestArtworks } from '@/actions/artworkActions';

import { HomePageCarousel } from '@/components/home/Carousel';

export default async function HomePage() {
    const latestArtworks = await getLatestArtworks();

    return (
        <div className="flex flex-col items-center md:w-3/4">
            <h1 className="text-3xl font-bold mb-2">Добре дошли в моята галерия</h1>
            <p className="text-lg mb-4">
                Изкуството е начин на живот. Разгледайте моите произведения и се насладете на красотата, която те носят.
            </p>
            <HomePageCarousel latestArtworks={latestArtworks} />
        </div>
    );
}
