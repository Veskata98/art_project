import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const surfaceMap: any = {
    canvas: 'Платно',
    cardboard: 'Картон',
    paper: 'Хартия',
    wood: 'Дърво',
    canava: 'Канава',
};

export const categoryMap: any = {
    '/': 'Всички',
    landscapes: 'Пейзаж',
    abstractions: 'Абстракция',
    portraits: 'Портрет',
    'still-life': 'Натюрморт',
    figurative: 'Фигуративно',
    realism: 'Реализъм',
    impressionism: 'Импресионизъм',
};

export const formatSize = (length: number, width: number) => `${length} x ${width} см`;
