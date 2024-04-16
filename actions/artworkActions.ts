'use server';

import { revalidatePath } from 'next/cache';

import { Artwork } from '@/types';

import { createClient as createBrowserClient } from '@/utils/supabase/client';
import { createClient as createServerClient } from '@/utils/supabase/server';

export const getArchivedArtworks = async () => {
    try {
        const supabase = createBrowserClient();
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
        const supabase = createBrowserClient();
        const { data: latestArtworks } = await supabase
            .from('artworks')
            .select()
            .eq('available', true)
            .limit(10)
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
        const supabase = createBrowserClient();
        const { data: artwork } = await supabase.from('artworks').select().eq('id', artworkId).single();
        return artwork;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getArtworksByCategory = async (category: string, page: number) => {
    try {
        const supabase = createBrowserClient();

        const offset = (page - 1) * 8;

        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .eq('category', category)
            .eq('available', true)
            .range(offset, offset + 7)
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
        const supabase = createBrowserClient();

        const offset = (page - 1) * 8;

        const { data: artworks } = await supabase
            .from('artworks')
            .select()
            .eq('available', true)
            .range(offset, offset + 7)
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

export const getSimilarArtworks = async (category: string, artworkId: string) => {
    try {
        const supabase = createBrowserClient();
        const { data: similarArtworks } = await supabase
            .from('artworks')
            .select()
            .eq('category', category)
            .eq('available', true)
            .neq('id', artworkId)
            .limit(12)
            .order('created_at', { ascending: false });

        return similarArtworks || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getAllArtworks = async () => {
    try {
        const supabase = createBrowserClient();
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

export const searchArtworks = async (searchTerm: string) => {
    try {
        const supabase = createBrowserClient();
        const { data: artworks } = await supabase.from('artworks').select().textSearch('title', searchTerm);

        return artworks || [];
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const deleteArtwork = async (artworkId: string) => {
    try {
        const supabase = createServerClient();
        await supabase.from('artworks').delete().eq('id', artworkId);
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};

export const createArtwork = async (formData: FormData) => {
    try {
        const { title, category, surface, length, width, price, frame, description } = Object.fromEntries(formData);
        const file = formData.get('image') as File;

        const supabase = createServerClient();
        const { data } = await supabase.storage
            .from('images')
            .upload(`${title}_${Date.now()}.${file.name.split('.')[1]}`, file);

        const imageUrl = 'https://smisyrqgnqamsbzmlhox.supabase.co/storage/v1/object/public/images/' + data?.path;

        await supabase.from('artworks').insert([
            {
                title,
                category,
                surface,
                description,
                frame: frame === 'on' ? true : false,
                length: Number(length),
                width: Number(width),
                price: Number(price),
                image: imageUrl,
            },
        ]);

        revalidatePath('/admin');
        revalidatePath('/');
    } catch (error) {
        console.log(error);
    }
};

export const changeAvailability = async (artworkId: string, available: boolean) => {
    try {
        const supabase = createServerClient();
        await supabase.from('artworks').update({ available }).eq('id', artworkId);

        revalidatePath('/admin');
        revalidatePath('/');
        revalidatePath(`/artworks/${artworkId}`);
    } catch (error) {
        console.log(error);
    }
};
