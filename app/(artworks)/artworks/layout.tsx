import { ArtworkCategorySection } from '@/components/artworks/ArtworkCategorySection';

export default function ArtworksLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto lg:flex">
      <ArtworkCategorySection />
      {children}
    </div>
  );
}
