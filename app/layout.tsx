import type { Metadata } from 'next';
import { Shantell_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/utils/helpers';

const shantell = Shantell_Sans({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: {
    default: 'Petar Yordanov Art',
    template: '%s | Petar Yordanov Art',
  },
  description: 'Галерия на художника Петър Йорданов - оригинални картини и произведения на изкуството',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" suppressHydrationWarning>
      <body className={cn(shantell.className, 'min-h-screen bg-background dark:bg-background flex flex-col')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="py-8 flex-grow flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
