import { getAllArtworks } from '@/actions/artworkActions';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import sql from '@/lib/db';
import { categoryMap } from '@/lib/utils';
import { Artwork } from '@/types';
import Image from 'next/image';

export default async function AdminPage() {
    const artworks = await getAllArtworks();

    return (
        <section className="flex w-full justify-between">
            <div className="w-96 text-center">
                <h1>Добави картина</h1>
            </div>
            <div className="flex-1 text-center">
                <h1>Табло</h1>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead></TableHead>
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
                                <TableCell>
                                    <Image src={artwork.image} alt={artwork.title} width={100} height={100} />
                                </TableCell>
                                <TableCell>{artwork.title}</TableCell>
                                <TableCell>{categoryMap[artwork.category]}</TableCell>
                                <TableCell>{artwork.size}</TableCell>
                                <TableCell>{artwork.price}</TableCell>
                                <TableCell>
                                    <div className="flex gap-4 justify-around">
                                        <button>Редактирай</button>
                                        <button>Изтрий</button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </section>
    );
}
