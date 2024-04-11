import { ArtworkCategorySection } from '@/components/artworks/ArtworkCategorySection';

export default function ArtworksLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full md:w-5/6 md:flex">
            <ArtworkCategorySection />
            {children}
        </div>
    );
}
