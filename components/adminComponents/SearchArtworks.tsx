import { Dispatch, SetStateAction } from 'react';

import { Input } from '@/components/ui/input';

export const SearchArtworks = ({ handleSearch }: { handleSearch: Dispatch<SetStateAction<string>> }) => {
    return (
        <Input
            name="searchValue"
            type="text"
            placeholder="Търси картина"
            className="p-2 border border-zinc-500 rounded-lg mb-2 focus:border-0 focus-visible:border-0"
            onChange={(e) => handleSearch(e.target.value)}
        />
    );
};
