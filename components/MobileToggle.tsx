import Link from 'next/link';

import { Menu } from 'lucide-react';

import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { useState } from 'react';

export const MobileToggle = ({ className, isActive }: { className: string; isActive: (href: string) => boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={cn(className)}>
            <Sheet onOpenChange={setIsOpen} open={isOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full bg-gray-800 text-white">
                    <h1 className="text-lg md:text-2xl font-bold text-center">Art Gallery</h1>

                    <Separator className="my-4" />
                    <ul className="flex flex-col text-lg">
                        <li className={cn('p-3 rounded', isActive('/') ? 'bg-white text-zinc-800' : '')}>
                            <Link href="/" className="w-full block" onClick={onLinkClick}>
                                <p>Начало</p>
                            </Link>
                        </li>
                        <li className={cn('p-3 rounded', isActive('/artworks') ? 'bg-white text-zinc-800' : '')}>
                            <Link href="/artworks" className="w-full block" onClick={onLinkClick}>
                                Картини
                            </Link>
                        </li>
                        <li className={cn('p-3 rounded', isActive('/archive') ? 'bg-white text-zinc-800' : '')}>
                            <Link href="/archive" className="w-full block" onClick={onLinkClick}>
                                Архив
                            </Link>
                        </li>
                        <li className={cn('p-3 rounded', isActive('/contacts') ? 'bg-white text-zinc-800' : '')}>
                            <Link href="/contacts" className="w-full block" onClick={onLinkClick}>
                                Контакти
                            </Link>
                        </li>
                        <li className={cn('p-3 rounded', isActive('/about') ? 'bg-white text-zinc-800' : '')}>
                            <Link href="/about" className="w-full block" onClick={onLinkClick}>
                                За мен
                            </Link>
                        </li>
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
};
