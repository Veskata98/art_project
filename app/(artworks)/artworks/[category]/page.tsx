import { redirect } from 'next/navigation';

import { ArtworksSection } from '@/components/artworks/ArtworksSection';

import { categoryMap } from '@/lib/utils';

import { getArtworksByCategory } from '@/app/actions/artworkActions';

interface ArtworksCategoryPageProps {
    params: {
        category: string;
    };
    searchParams: {
        page: string;
    };
}

export default async function ArtworksCategoryPage({ params, searchParams }: ArtworksCategoryPageProps) {
    const category = params.category;

    if (!categoryMap[category]) {
        return redirect('/artworks');
    }

    const page = parseInt(searchParams.page) || 1;
    const { artworks, totalArtworks } = await getArtworksByCategory(category, page);

    return (
        <ArtworksSection artworks={artworks} totalArtworkCount={totalArtworks || 0} heading={categoryMap[category]} />
    );
}
