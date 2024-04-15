import Link from 'next/link';
import Image from 'next/image';

import about1 from '@/public/about1.png';
import about2 from '@/public/about2.webp';
import about3 from '@/public/about3.png';

export default function AboutPage() {
    return (
        <div>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-semibold mb-4">За Мен</h1>
                <p className="text-lg mb-4">
                    Здравейте! <br className="mb-2" />
                    Аз се казвам Петър Йорданов, самоук художник, който обича да изразява своите идеи чрез различни
                    техники за рисуване.
                </p>
                <p className="text-lg mb-4">
                    Моите творби са плод на любовта ми към изкуството и отражават моите размисли и емоции.
                </p>
                <p className="text-lg mb-4">
                    Благодаря ви за посещението на моя уеб сайт. Надявам се, че ще насладите на моето творчество!
                </p>
                <p className="text-lg mb-4">
                    За повече информация, не се колебайте да се свържите с мен{' '}
                    <Link href="/contacts" className="text-blue-500 underline">
                        тук
                    </Link>
                </p>
                <div className="my-6 flex md:flex-row flex-col w-full justify-around items-center gap-4">
                    <Image src={about1} alt="About 1" width={200} className="-rotate-12" />
                    <Image src={about2} alt="About 2" width={200} className="rotate-6" />
                    <Image src={about3} alt="About 3" width={200} className="-rotate-3" />
                </div>
                <div className="mt-4">
                    <p className="text-lg">Пожелавам ви приятно разглеждане!</p>
                </div>
            </div>
        </div>
    );
}
