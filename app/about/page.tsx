import Link from 'next/link';

export default function AboutPage() {
    return (
        <div>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-semibold mb-4">За Мен</h1>
                <p className="text-lg mb-4">
                    Здравейте! Аз съм [Вашето Име], един скромен художник, който обича да изразява своите идеи чрез
                    различни техники за рисуване.
                </p>
                <p className="text-lg mb-4">
                    Моите творби са плод на любовта ми към изкуството и отражават моите размисли и емоции.
                </p>
                <p className="text-lg mb-4">
                    Благодаря ви за посещението на моя уеб сайт. Надявам се, че ще насладите на моето творчество!
                </p>
                <p className="text-lg mb-4">
                    За повече информация, не се колебайте се свържите с мен{' '}
                    <Link href="/contacts" className="text-blue-500 underline">
                        тук
                    </Link>
                    .
                </p>
                <div className="mt-8">
                    <p className="text-lg">Пожелавам ви приятно разглеждане!</p>
                </div>
            </div>
        </div>
    );
}
