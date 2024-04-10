'use server';

import { revalidatePath } from 'next/cache';

import { Artwork } from '@/types';

import { createClient } from '@/utils/supabase/server';

export const getArchivedArtworks = async () => {
    try {
        const supabase = createClient();
        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .eq('available', false)
            .order('created_at', { ascending: false })
            .returns<Artwork[]>();

        return artworks || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getLatestArtworks = async () => {
    try {
        const supabase = createClient();
        const { data: latestArtworks } = await supabase
            .from('artworks')
            .select()
            .eq('available', true)
            .limit(5)
            .order('created_at', { ascending: false })
            .returns<Artwork[]>();

        return latestArtworks || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getArtworkById = async (artworkId: string) => {
    try {
        const supabase = createClient();
        const { data: artwork } = await supabase.from('artworks').select().eq('id', artworkId).single();
        return artwork;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getArtworksByCategory = async (category: string, page: number) => {
    try {
        const supabase = createClient();

        const offset = (page - 1) * 6;

        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .eq('category', category)
            .eq('available', true)
            .range(offset, offset + 5)
            .order('created_at', { ascending: false });

        const { count: totalArtworks } = await supabase
            .from('artworks')
            .select('*', { count: 'exact' })
            .eq('available', true)
            .eq('category', category);

        return { artworks: artworks || [], totalArtworks };
    } catch (error) {
        console.log(error);
        return { artworks: [], totalArtworks: 0 };
    }
};

export const getArtworksFromAllCategories = async (page: number) => {
    try {
        const supabase = createClient();

        const offset = (page - 1) * 6;

        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .eq('available', true)
            .range(offset, offset + 5)
            .order('created_at', { ascending: false });

        const { count: totalArtworks } = await supabase
            .from('artworks')
            .select('*', { count: 'exact' })
            .eq('available', true);

        return { artworks: artworks || [], totalArtworks };
    } catch (error) {
        console.log(error);
        return { artworks: [], totalArtworks: 0 };
    }
};

export const getAllArtworks = async () => {
    try {
        const supabase = createClient();
        console.log('supabase', supabase);

        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .order('created_at', { ascending: false })
            .returns<Artwork[]>();

        return artworks || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const deleteArtwork = async (artworkId: string) => {
    try {
        const supabase = createClient();
        await supabase.from('artworks').delete().eq('id', artworkId);
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};

export const createArtwork = async (formData: FormData) => {
    try {
        const { title, category, surface, length, width, price } = Object.fromEntries(formData); // await supabase.from('artworks').insert([{ ...formData }]);
        const supabase = createClient();
        const { data } = await supabase.storage
            .from('images')
            .upload(`${title}_${Date.now()}.jpg`, formData.get('image') as File);

        const imageUrl = 'https://smisyrqgnqamsbzmlhox.supabase.co/storage/v1/object/public/images/' + data?.path;

        await supabase.from('artworks').insert([
            {
                title,
                category,
                surface,
                length: Number(length),
                width: Number(width),
                price: Number(price),
                image: imageUrl,
            },
        ]);

        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};

export const changeAvailability = async (artworkId: string, available: boolean) => {
    try {
        const supabase = createClient();
        await supabase.from('artworks').update({ available }).eq('id', artworkId);
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};
