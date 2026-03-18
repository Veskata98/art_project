import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 dark:bg-neutral-900 text-neutral-300 border-t border-neutral-700/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm tracking-wider uppercase font-semibold text-white">Petar Yordanov Art</p>
          <nav className="flex gap-6 text-sm">
            <Link href="/artworks" className="hover:text-white transition-colors">
              Картини
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              За мен
            </Link>
            <Link href="/contacts" className="hover:text-white transition-colors">
              Контакти
            </Link>
          </nav>
        </div>
        <Separator className="my-4 bg-neutral-700/50" />
        <p className="text-center text-xs text-neutral-400">&copy; {year} Petar Yordanov Art. Всички права запазени.</p>
      </div>
    </footer>
  );
};
