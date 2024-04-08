import { getAllArtworks } from '@/actions/artworkActions';
import { AdminButtons } from '@/components/AdminButtons';
import { AddArtwork } from '@/components/adminComponents/AddArtwork';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { categoryMap, formatSize } from '@/lib/utils';
import { Check, X } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

export default async function AdminPage() {
    const artworks = await getAllArtworks();

    return (
        <>
            <Link href="/" replace className="bg-zinc-600 text-white p-4 py-2 mb-8 rounded-lg text-xl font-semibold">
                Към сайта
            </Link>
            <section className="flex md:flex-row flex-col w-full md:w-4/5 justify-between gap-8">
                <div className="text-center w-full md:w-96">
                    <h1 className="md:mb-16 mb-4">Добави картина</h1>
                    <AddArtwork />
                </div>
                <div className="flex-1 text-center">
                    <h1 className="mb-4">Табло</h1>
                    <Table className="w-full">
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
                            {artworks.map((artwork) => (
                                <TableRow key={artwork.id}>
                                    <TableCell className="flex items-center justify-center">
                                        <div className="relative h-40 w-40">
                                            <Image
                                                src={artwork.image}
                                                alt={artwork.title}
                                                fill
                                                className="object-contain"
                                            />
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
                                        <AdminButtons artworkId={artwork.id} available={artwork.available} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}
