import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getAllArtworks } from '@/actions/artworkActions';
import { AddArtwork } from '@/components/adminComponents/AddArtwork';
import { Dashboard } from '@/components/adminComponents/Dashboard';

import { createClient } from '@/utils/supabase/server';
import { Separator } from '@/components/ui/separator';

import { Artwork } from '@/types';

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect('/login');
  }

  const artworks: Artwork[] = await getAllArtworks();

  return (
    <>
      <Link href="/" replace className="bg-zinc-800 text-white p-4 py-2 mb-8 rounded-lg text-xl font-semibold">
        Обратно в сайта
      </Link>
      <section className="flex lg:flex-row flex-col w-full 2xl:w-4/5 justify-between gap-8">
        <div className="text-center w-full lg:min-w-[400px] lg:w-[500px]">
          <h1 className="lg:mb-8 mb-4">Добави картина</h1>
          <AddArtwork />
        </div>
        <Separator className="md:hidden" />
        <Dashboard artworks={artworks} />
      </section>
    </>
  );
}
