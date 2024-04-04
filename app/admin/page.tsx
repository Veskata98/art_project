import { getAllArtworks } from '@/actions/artworkActions';
import { AdminButtons } from '@/components/AdminButtons';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { categoryMap } from '@/lib/utils';
import { Check, X } from 'lucide-react';

import Image from 'next/image';

export default async function AdminPage() {
    const artworks = await getAllArtworks();

    return (
        <section className="flex w-4/5 justify-between">
            <div className="w-96 text-center">
                <h1>Добави картина</h1>
            </div>
            <div className="flex-1 text-center">
                <h1>Табло</h1>
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
                                <TableCell className="flex justify-center">
                                    <Image src={artwork.image} alt={artwork.title} width={100} height={100} />
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
                                <TableCell>{artwork.size}</TableCell>
                                <TableCell>{artwork.price}</TableCell>
                                <TableCell>
                                    <AdminButtons artworkId={artwork.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
