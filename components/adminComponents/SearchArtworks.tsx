import { redirect } from 'next/navigation';

export const SearchArtworks = () => {
    const handleSearch = async (formData: FormData) => {
        'use server';

        const searchValue = (formData.get('searchValue') as string).trim();
        redirect(`/admin?search=${encodeURIComponent(searchValue)}`);
    };

    return (
        <form action={handleSearch} className="flex items-center justify-center md:gap-4 gap-2 mb-4">
            <input
                name="searchValue"
                type="text"
                placeholder="Търси картина"
                className="p-2 border border-zinc-500 rounded-lg"
            />
            <button type="submit" className="bg-zinc-800 text-white py-2 px-4 rounded-lg">
                Търси
            </button>
        </form>
    );
};
