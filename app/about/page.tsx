import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import about1 from '@/public/about1.jpg';
import about2 from '@/public/about2.jpg';
import about3 from '@/public/about3.jpg';

export const metadata: Metadata = {
  title: 'За мен',
  description: 'Научете повече за художника Петър Йорданов - самоук художник от Пловдив.',
};

export default function AboutPage() {
  return (
    <div>
      <div className="container max-w-4xl h-full mx-auto lg:bg-muted/50 p-8 md:p-12 rounded-sm lg:gallery-frame text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">За Мен</h1>
        <div className="space-y-4 max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Казвам се Петър Йорданов, самоук художник, който обича да изразява своите идеи чрез различни техники за
            рисуване.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Моите творби са плод на любовта ми към изкуството и отражават моите размисли и емоции.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Благодаря ви за посещението на моя уеб сайт. Надявам се, че ще се насладите на моето творчество!
          </p>
          <p className="text-lg leading-relaxed">
            За повече информация, не се колебайте да се свържите с мен{' '}
            <Link href="/contacts" className="text-primary underline font-semibold hover:text-primary/80 transition-colors">
              тук
            </Link>
          </p>
        </div>
        <div className="my-10 flex md:flex-row flex-col w-full justify-around items-center md:gap-6 gap-8">
          <div className="gallery-frame rounded-sm p-1 bg-white dark:bg-neutral-800 sm:-rotate-3 transition-transform hover:rotate-0 duration-300">
            <Image src={about1} alt="Петър Йорданов в ателието" width={240} height={320} className="rounded-sm" sizes="240px" />
          </div>
          <div className="gallery-frame rounded-sm p-1 bg-white dark:bg-neutral-800 sm:rotate-3 transition-transform hover:rotate-0 duration-300">
            <Image src={about2} alt="Петър Йорданов рисува" width={240} height={320} className="rounded-sm" sizes="240px" />
          </div>
          <div className="gallery-frame rounded-sm p-1 bg-white dark:bg-neutral-800 sm:-rotate-3 transition-transform hover:rotate-0 duration-300">
            <Image src={about3} alt="Творби на Петър Йорданов" width={240} height={320} className="rounded-sm" sizes="240px" />
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg text-muted-foreground">Пожелавам ви приятно разглеждане!</p>
        </div>
      </div>
    </div>
  );
}
