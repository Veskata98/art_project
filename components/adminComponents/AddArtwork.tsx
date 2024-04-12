'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';

import { createArtwork } from '@/actions/artworkActions';

import { categoryMap, surfaceMap } from '@/lib/utils';

import { Textarea } from '@/components/ui/textarea';

export const AddArtwork = () => {
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form
            action={async (formData) => {
                await createArtwork(formData);
                ref.current?.reset();
            }}
            ref={ref}
            className="flex flex-col gap-3 w-full md:w-3/4 mx-auto px-4 md:px-0"
        >
            <input
                required
                type="text"
                name="title"
                placeholder="Име"
                className="w-full p-2 mb-2 border-2 rounded-md"
            />
            <select name="category" className="bg-zinc-100 font-sans w-full p-2 mb-2 border-2 rounded-md">
                {Object.entries(categoryMap)
                    .slice(1)
                    .map(([categoryValue, categoryLabel]) => (
                        <option key={categoryValue} value={categoryValue}>
                            {categoryLabel as string}
                        </option>
                    ))}
            </select>
            <select name="surface" className="bg-zinc-100 font-sans w-full p-2 mb-2 border-2 rounded-md">
                {Object.entries(surfaceMap).map(([surfaceValue, surfaceLabel]) => (
                    <option key={surfaceValue} value={surfaceValue}>
                        {surfaceLabel as string}
                    </option>
                ))}
            </select>
            <input
                required
                type="number"
                name="length"
                placeholder="Дължина"
                className="w-full p-2 mb-2 border-2 rounded-md"
            />
            <input
                required
                type="number"
                name="width"
                placeholder="Ширина"
                className="w-full p-2 mb-2 border-2 rounded-md"
            />
            <input
                required
                type="number"
                name="price"
                placeholder="Цена"
                className="w-full p-2 mb-2 border-2 rounded-md"
            />
            <Textarea
                name="description"
                placeholder="Описание"
                className="w-full p-2 mb-2 border-2 rounded-md text-md"
            />
            <label htmlFor="image" className="font-semibold">
                Качи изображение
            </label>
            <input required type="file" name="image" className="w-full p-2 mb-2 text-center" />
            <SubmitButton />
        </form>
    );
};

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="disabled:bg-zinc-300 bg-zinc-600 text-white p-2 rounded-lg w-full"
            disabled={pending}
        >
            {pending ? 'Прикачване...' : 'Добави'}
        </button>
    );
};
