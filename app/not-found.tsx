import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex-grow w-screen flex flex-col justify-center items-center select-none gap-4">
      <h1 className="text-7xl md:text-8xl text-primary/20 font-bold">404</h1>
      <p className="text-xl text-muted-foreground">Страницата не беше намерена</p>
      <Link href="/" className="text-primary hover:text-primary/80 transition-colors underline mt-2">
        Към началната страница
      </Link>
    </div>
  );
}
