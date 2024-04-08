'use client';

import { ArchiveRestore, ArchiveX, Trash } from 'lucide-react';

import { changeAvailability, deleteArtwork } from '@/actions/artworkActions';

type AdminButtonsProps = {
    artworkId: string;
    available: boolean;
};

export const AdminButtons = ({ artworkId, available }: AdminButtonsProps) => {
    const updateAvailability = async () => {
        const confirm = window.confirm(`Натисни OK, за да ${available ? 'архивираш' : 'възстановиш'} картината`);
        if (confirm) {
            await changeAvailability(artworkId, !available);
        }
    };

    const onDeleteClick = async () => {
        const confirm = window.confirm('Сигурен ли си, че искаш да изтриеш тази картина?');
        if (confirm) {
            await deleteArtwork(artworkId);
        }
    };

    return (
        <div className="flex gap-6 justify-around">
            <button onClick={updateAvailability}>
                {available ? <ArchiveX className="text-orange-500" /> : <ArchiveRestore className="text-emerald-500" />}
            </button>
            <button className="text-rose-500" onClick={onDeleteClick}>
                <Trash />
            </button>
        </div>
    );
};
