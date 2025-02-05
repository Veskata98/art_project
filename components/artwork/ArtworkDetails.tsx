import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

interface ArtworkDetailsProps {
  available: boolean;
  description: string;
}

export const ArtworkDetails = ({ available, description }: ArtworkDetailsProps) => {
  return (
    <div className="md:shadow rounded dark:shadow-white-shadow md:p-8 md:pt-4 p-4 mt-2 mb-4 md:mb-0">
      <h5 className="text-lg mb-4">Допълнителна информация</h5>
      {available ? (
        <>
          <p className="mb-8 text-pretty">{description}</p>
          <Separator className="my-2" />
          <p className="font-semibold md:text-center text-balance">
            За повече информация относно картината, моля свържете се с мен{' '}
            <Link href="/contacts" className="underline text-blue-500">
              тук
            </Link>
          </p>
        </>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};
