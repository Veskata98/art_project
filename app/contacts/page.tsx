import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import instagramIcon from '@/public/instagramIcon.png';
import facebookIcon from '@/public/facebookIcon.png';

export default function ContactPage() {
    return (
        <section className="h-full p-8 xl:w-2/3 lg:w-3/4 w-full">
            <div className="lg:flex mb-8 gap-4 justify-around">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl mb-4">Контакти</h1>
                    <p className="text-lg mb-8">За връзка с мен, моля използвайте следните контакти:</p>
                    <ul className="mb-8">
                        <li className="text-lg mb-2">Телефон: 0988 728 392</li>
                        <li className="text-lg mb-2">
                            Имейл:{' '}
                            <a href="mailto:yordanovpetar626@gmail.com" className="text-blue-500">
                                yordanovpetar626@gmail.com
                            </a>
                        </li>
                    </ul>
                    <div className="flex md:flex-row flex-col gap-8 md:gap-16 justify-between items-center">
                        <Link
                            href="https://www.facebook.com/profile.php?id=100014460672795"
                            className="flex items-center flex-col"
                        >
                            <Image src={facebookIcon} alt="Facebook" width={50} height={50} />
                            <span>Петър Йорданов</span>
                        </Link>
                        <Link
                            href="https://www.instagram.com/art_petaryordanov/"
                            className="flex items-center flex-col"
                        >
                            <Image src={instagramIcon} alt="Instagram" width={50} height={50} />
                            <span>@art_petaryordanov</span>
                        </Link>
                    </div>
                </div>
                <Separator className="my-4 lg:hidden" />
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full lg:mt-0 text-center">
                        <p className="font-semibold">Адрес за връзка:</p>
                        <p className="mb-2">гр. Пловдив, ул. Тракия 60А</p>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.682066969948!2d24.7369521!3d42.1356891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1cab3f9f975%3A0x82732e85acf25b90!2sTsentarPlovdiv%20Center%2C%20ulitsa%20Trakia%2060%D0%90%2C%204002%20Plovdiv!5e0!3m2!1sen!2sbg!4v1713181735008!5m2!1sen!2sbg"
                            style={{ border: 0 }}
                            className="border-0 lg:w-[500px] h-[400px] w-full"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl mb-2 text-center">Доставка и гаранция</h2>
                <p className="font-semibold">
                    При покупка на картина, гарантирамe внимателно опаковане и безпроблемна доставка до вашето населено
                    място чрез услугите на Еконт или Спиди. За клиентите от град Пловдив осигурявамe възможност за лично
                    вземане. Всеки продукт ще бъде придружен с официален сертификат за авторство, гарантирайки, че това
                    което купувате е оригинално и уникално изкуство. Освен това, предлагаме възможност за издаване на
                    фактура.
                </p>
            </div>
        </section>
    );
}
