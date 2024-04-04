'use client';

import { Edit, Trash } from 'lucide-react';

import { deleteArtwork } from '@/actions/artworkActions';

type AdminButtonsProps = {
    artworkId: string;
};

export const AdminButtons = ({ artworkId }: AdminButtonsProps) => {
    const onEditClick = () => {
        console.log('Edit');
    };

    const onDeleteClick = async () => {
        const confirm = window.confirm('Сигурен ли си, че искаш да изтриеш тази картина?');
        if (confirm) {
            await deleteArtwork(artworkId);
        }
    };

    return (
        <div className="flex gap-4 justify-around">
            <button onClick={onEditClick}>
                <Edit />
            </button>
            <button className="text-rose-500" onClick={onDeleteClick}>
                <Trash />
            </button>
        </div>
    );
};
