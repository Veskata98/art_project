import type { Metadata } from 'next';
import { Shantell_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '../components/header/Header';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { cn } from '@/utils/helpers';

const caveat = Shantell_Sans({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Petar Yordanov Art',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(caveat.className, 'min-h-screen bg-[#FDF8F6] dark:bg-card flex flex-col')}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main className="py-6 flex-grow flex flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
