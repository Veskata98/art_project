import Image from 'next/image';
import Link from 'next/link';

import { categoryMap, cn, formatSize, surfaceMap } from '@/utils/helpers';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const ArtworkCard = ({ artwork }: { artwork: any }) => {
  return (
    <Link href={`/artwork/${artwork.id}`}>
      <Card className="dark:border dark:border-primary">
        <CardContent className="p-2">
          <div className="relative w-80 h-80 mx-auto">
            <Image
              className={cn('rounded object-contain overflow-hidden')} /*, !artwork.available && 'opacity-30')*/
              src={artwork.image}
              alt={artwork.title}
              fill
            />
          </div>
          <Separator className="mt-2" />
          <CardFooter className="flex flex-col mt-2 p-2 pt-0 max-w-full">
            <h2 className="text-lg font-bold mb-4 truncate overflow-hidden w-full text-center">{artwork.title}</h2>

            <p className="font-semibold text-sm">{categoryMap[artwork.category]}</p>

            <div className="flex flex-col mt-2 text-center italic">
              <p className="text-sm">Размери: {formatSize(artwork.length, artwork.width)}</p>
              <p className="text-sm">Повърхност: {surfaceMap[artwork.surface]}</p>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
};
