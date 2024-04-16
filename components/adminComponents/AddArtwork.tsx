'use client';

import { useRef, useState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';

import { createArtwork } from '@/actions/artworkActions';

import { categoryMap, surfaceMap } from '@/utils/helpers';

import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

export const AddArtwork = () => {
    const [imagePreview, setImagePreview] = useState<File | null>(null);
    const ref = useRef<HTMLFormElement>(null);

    return (
        <form
            action={async (formData) => {
                await createArtwork(formData);
                // ref.current?.reset();
                // setImagePreview(null);
            }}
            ref={ref}
            className="flex flex-col gap-3 w-full md:w-3/4 mx-auto px-4 md:px-0"
        >
            {' '}
            <label htmlFor="image" className="font-semibold">
                Качи изображение
            </label>
            <Input
                required
                type="file"
                name="image"
                onChange={(e) => setImagePreview(e.target.files?.[0] || null)}
                className="w-full p-2 mb-2"
                accept="image/*"
            />
            {imagePreview && (
                <div className="flex flex-col justify-center items-center pt-2 pb-4">
                    <Image
                        src={URL.createObjectURL(imagePreview)}
                        alt="Preview"
                        width={256}
                        height={256}
                        className="rounded"
                    />
                </div>
            )}
            <input required type="text" name="title" placeholder="Име" className="w-full p-2  border-2 rounded-md" />
            <div className="flex items-center gap-4">
                <label htmlFor="frame" className="">
                    Рамка
                </label>
                <Checkbox name="frame" className="border-2 w-5 h-5" />
            </div>
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
