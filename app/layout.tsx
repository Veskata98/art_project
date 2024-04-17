import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header/Header';
import { Footer } from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Petar Yordanov Art',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main
                    className="flex flex-col items-center justify-between md:p-10 p-4"
                    style={{ minHeight: 'calc(100vh - 120px)' }}
                >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
