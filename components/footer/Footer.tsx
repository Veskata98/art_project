import { Separator } from '@/components/ui/separator';

export const Footer = () => {
    return (
        <footer className="flex md:flex-row gap-4 md:gap-0 flex-col justify-center items-center p-4 bg-gray-800 text-white">
            <p>&copy; 2024 Petar Yordanov Art</p>
            <Separator className="md:hidden bg-zinc-600" />
            <p className="ml-4">Всички права запазени</p>
        </footer>
    );
};
