'use server';

import sql from '@/lib/db';
import { Artwork } from '@/types';
import { revalidatePath } from 'next/cache';

export const getArchivedArtworks = async () => {
    try {
        const artworks: Artwork[] = await sql`
        SELECT *
        FROM artworks
        WHERE available = false
        ORDER BY created_at DESC
        `;

        return artworks;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getLatestArtworks = async () => {
    try {
        const latestArtworks: Artwork[] = await sql`
            SELECT * 
            FROM artworks
            WHERE available = true
            ORDER BY created_at DESC 
            LIMIT 5
        `;

        return latestArtworks;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const getArtworkById = async (artworkId: string) => {
    try {
        const artwork = (await sql`SELECT * FROM artworks WHERE id = ${artworkId}`).at(0) as Artwork;
        return artwork;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getArtworksByCategory = async (category: string, page: number) => {
    try {
        const offset = (page - 1) * 6;

        const result = await sql`
            SELECT *, (SELECT COUNT(*) FROM artworks WHERE category=${category} AND available = true) as total 
            FROM artworks
            WHERE category = ${category} AND available = true
            ORDER BY created_at DESC 
            LIMIT 6 OFFSET ${offset}
        `;

        const artworks: Artwork[] = result.map((result: any) => ({ ...result }));
        const totalArtworks = Number(result[0]?.total);

        return { artworks, totalArtworks };
    } catch (error) {
        console.log(error);
        return { artworks: [], totalArtworks: 0 };
    }
};

export const getArtworksFromAllCategories = async (page: number) => {
    try {
        const offset = (page - 1) * 6;

        const result = await sql`
            SELECT *, (SELECT COUNT(*) FROM artworks WHERE available = true) as total 
            FROM artworks
            WHERE available = true
            ORDER BY created_at DESC 
            LIMIT 6 OFFSET ${offset}
        `;

        const artworks: Artwork[] = result.map((result: any) => ({ ...result }));
        const totalArtworks = Number(result[0]?.total);

        return { artworks, totalArtworks };
    } catch (error) {
        console.log(error);
        return { artworks: [], totalArtworks: 0 };
    }
};

export const getAllArtworks = async () => {
    try {
        const artworks: Artwork[] = await sql`
            SELECT *
            FROM artworks
            ORDER BY created_at DESC
        `;

        return artworks;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const deleteArtwork = async (artworkId: string) => {
    try {
        await sql`DELETE FROM artworks WHERE id = ${artworkId}`;
        revalidatePath('/admin');
    } catch (error) {
        console.log(error);
    }
};
