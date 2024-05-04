'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Check, X } from 'lucide-react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminButtons } from '@/components/adminComponents/AdminButtons';

import { categoryMap, formatSize } from '@/utils/helpers';
import { Artwork } from '@/types';
import { SearchArtworks } from './SearchArtworks';

type DashboardProps = {
    artworks: Artwork[];
};

export const Dashboard = ({ artworks }: DashboardProps) => {
    const [searchValue, setSearchValue] = useState('');

    let filteredArtworks = artworks;

    if (searchValue && searchValue.length > 0) {
        filteredArtworks = artworks.filter((artwork) =>
            artwork.title.toLowerCase().includes(searchValue.toLowerCase())
        );
    } else {
        filteredArtworks = artworks;
    }

    return (
        <div className="flex-1 text-center">
            <h1 className="mb-4">Табло</h1>

            <SearchArtworks handleSearch={setSearchValue} />

            <Table className="w-full overflow-x-auto">
                <TableHeader>
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead className="text-center">Наличност</TableHead>
                        <TableHead className="text-center">Име</TableHead>
                        <TableHead className="text-center">Категория</TableHead>
                        <TableHead className="text-center">Размери</TableHead>
                        <TableHead className="text-center">Цена</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredArtworks.map((artwork) => (
                        <TableRow key={artwork.id}>
                            <TableCell className="flex items-center justify-center md:p-4 p-1">
                                <div className="relative md:h-40 md:w-40 h-20 w-20">
                                    <Image src={artwork.image} alt={artwork.title} fill className="object-contain" />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-center items-center">
                                    {artwork.available ? (
                                        <Check className="w-5 h-5 text-emerald-500 text-center" />
                                    ) : (
                                        <X className="w-5 h-5 text-rose-500" />
                                    )}
                                </div>
                            </TableCell>
                            <TableCell>{artwork.title}</TableCell>
                            <TableCell>{categoryMap[artwork.category]}</TableCell>
                            <TableCell>{formatSize(artwork.length, artwork.width)}</TableCell>
                            <TableCell>{artwork.price}</TableCell>
                            <TableCell>
                                <AdminButtons
                                    artworkId={artwork.id}
                                    available={artwork.available}
                                    category={artwork.category}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
