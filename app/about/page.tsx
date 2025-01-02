import Link from 'next/link';
import Image from 'next/image';

import about1 from '@/public/about1.jpg';
import about2 from '@/public/about2.jpg';
import about3 from '@/public/about3.jpg';

export default function AboutPage() {
  return (
    <div>
      <div className="container max-w-4xl h-full mx-auto bg-muted p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-semibold mb-4">За Мен</h1>
        <p className="text-lg mb-4">
          Казвам се Петър Йорданов, самоук художник, който обича да изразява своите идеи чрез различни техники за
          рисуване.
        </p>
        <p className="text-lg mb-4">
          Моите творби са плод на любовта ми към изкуството и отражават моите размисли и емоции.
        </p>
        <p className="text-lg mb-4">
          Благодаря ви за посещението на моя уеб сайт. Надявам се, че ще се насладите на моето творчество!
        </p>
        <p className="text-lg mb-4">
          За повече информация, не се колебайте да се свържите с мен{' '}
          <Link href="/contacts" className="text-blue-500 underline font-semibold">
            тук
          </Link>
        </p>
        <div className="my-6 flex md:flex-row flex-col w-full justify-around items-center md:gap-4 gap-8">
          <Image src={about1} alt="About 1" width={200} className="-rotate-3" />
          <Image src={about2} alt="About 2" width={200} className="rotate-3" />
          <Image src={about3} alt="About 3" width={200} className="-rotate-3" />
        </div>
        <div className="mt-4">
          <p className="text-lg">Пожелавам ви приятно разглеждане!</p>
        </div>
      </div>
    </div>
  );
}
