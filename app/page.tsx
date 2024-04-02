import { HomePageCarousel } from '@/components/home/Carousel';

export default function Home() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Welcome to the Art Gallery</h1>
            <p className="text-lg">Browse our collection of fine art</p>
            <HomePageCarousel />
        </div>
    );
}
