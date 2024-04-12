import Link from 'next/link';

export default function ContactPage() {
    return (
        <section className="flex h-full flex-col justify-center items-center mx-auto p-8 text-center w-full">
            <h1 className="text-3xl mb-4">Контакти</h1>
            <p className="text-lg mb-8">За връзка с мен, моля използвайте следните контакти:</p>
            <ul className="mb-8">
                <li className="text-lg mb-2">Телефон: 0888 888 888</li>
                <li className="text-lg mb-2">
                    Имейл:{' '}
                    <a href="mailto:test@gmail.com" className="text-blue-500">
                        test@gmail.com
                    </a>
                </li>
            </ul>
            <div className="flex justify-between items-center w-full">
                <Link href="https://www.facebook.com" className="flex items-center flex-col">
                    <h3 className="text-2xl">Facebook</h3>
                    <i aria-hidden className="fa-brands fa-facebook text-4xl mb-2"></i>
                    <span>www.facebook.com</span>
                </Link>
                <Link href="https://www.instagram.com" className="flex items-center flex-col">
                    <h3 className="text-2xl">Instagram</h3>
                    <i aria-hidden className="fa-brands fa-instagram text-4xl mb-2"></i>
                    <span>www.instagram.com</span>
                </Link>
            </div>
        </section>
    );
}
