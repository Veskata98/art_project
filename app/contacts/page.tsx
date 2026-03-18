import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import instagramIcon from '@/public/instagramIcon.png';
import facebookIcon from '@/public/facebookIcon.png';

export const metadata: Metadata = {
  title: 'Контакти',
  description: 'Свържете се с художника Петър Йорданов - телефон, имейл, социални мрежи и адрес в Пловдив.',
};

export default function ContactPage() {
  return (
    <section className="container px-4 md:px-8 md:mx-auto">
      <div className="lg:flex mb-10 gap-8 justify-around">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl mb-4">Контакти</h1>
          <p className="text-lg mb-8 text-muted-foreground">За връзка с мен, моля използвайте следните контакти:</p>
          <ul className="mb-8 space-y-3">
            <li className="text-lg">Телефон: 0988 728 392</li>
            <li className="text-lg">
              Имейл:{' '}
              <a href="mailto:yordanovpetar626@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                yordanovpetar626@gmail.com
              </a>
            </li>
          </ul>
          <div className="flex md:flex-row flex-col gap-8 md:gap-16 justify-between items-center">
            <Link
              href="https://www.facebook.com/profile.php?id=100014460672795"
              className="flex items-center flex-col gap-2 hover:opacity-80 transition-opacity"
              target="_blank"
            >
              <Image src={facebookIcon} alt="Facebook" width={44} height={44} />
              <span className="text-sm">Петър Йорданов</span>
            </Link>
            <Link
              href="https://www.instagram.com/art_petaryordanov/"
              className="flex items-center flex-col gap-2 hover:opacity-80 transition-opacity"
              target="_blank"
            >
              <Image src={instagramIcon} alt="Instagram" width={44} height={44} />
              <span className="text-sm">@art_petaryordanov</span>
            </Link>
          </div>
        </div>
        <Separator className="my-6 lg:hidden" />
        <div className="flex flex-col justify-center items-center">
          <div className="w-full lg:mt-0 text-center">
            <p className="font-semibold">Адрес за връзка:</p>
            <p className="mb-3 text-muted-foreground">гр. Пловдив, ул. Тракия 60А</p>
            <div className="gallery-frame rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.682066969948!2d24.7369521!3d42.1356891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd1cab3f9f975%3A0x82732e85acf25b90!2sTsentarPlovdiv%20Center%2C%20ulitsa%20Trakia%2060%D0%90%2C%204002%20Plovdiv!5e0!3m2!1sen!2sbg!4v1713181735008!5m2!1sen!2sbg"
                style={{ border: 0 }}
                className="border-0 lg:w-[500px] h-[400px] w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-frame rounded-sm p-6 md:p-8 bg-muted/30">
        <h2 className="text-xl mb-3">Доставка и гаранция</h2>
        <p className="text-muted-foreground text-balance leading-relaxed">
          При покупка на картина, гарантирамe внимателно опаковане и безпроблемна доставка до вашето населено място чрез
          услугите на Еконт или Спиди. За клиентите от град Пловдив осигурявамe възможност за лично вземане. Всеки
          продукт ще бъде придружен с официален сертификат за авторство, гарантирайки, че това което купувате е
          оригинално и уникално изкуство. Освен това, предлагаме възможност за издаване на фактура.
        </p>
      </div>
    </section>
  );
}
