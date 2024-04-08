'use server';

import { revalidatePath } from 'next/cache';

import { Artwork } from '@/types';

import { supabase } from '@/lib/supabase';

export const getArchivedArtworks = async () => {
    try {
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
        const { data: artwork } = await supabase.from('artworks').select().eq('id', artworkId).single();
        return artwork;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getArtworksByCategory = async (category: string, page: number) => {
    try {
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
        await supabase.from('artworks').delete().eq('id', artworkId);
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};

export const createArtwork = async (formData: FormData) => {
    try {
        console.log(formData);
        await new Promise((resolve) => setTimeout(resolve, 5000));

        // await supabase.from('artworks').insert([{ ...formData }]);
        // revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};
