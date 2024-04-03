'use client';

import { useRouter } from 'next/navigation';

import { ArrowLeft } from 'lucide-react';

interface ReturnButtonProps {
    className?: string;
}

export const ReturnButton = ({ className }: ReturnButtonProps) => {
    const router = useRouter();

    return (
        <button onClick={router.back} className={className}>
            <ArrowLeft />
            Назад
        </button>
    );
};
