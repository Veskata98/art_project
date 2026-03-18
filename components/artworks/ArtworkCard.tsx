import Image from 'next/image';
import Link from 'next/link';

import { categoryMap, cn, formatSize, surfaceMap } from '@/utils/helpers';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const ArtworkCard = ({ artwork }: { artwork: any }) => {
  return (
    <Link href={`/artwork/${artwork.id}`} className="group">
      <Card className="gallery-frame rounded-sm w-[340px] max-w-[340px] transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
        <CardContent className="p-2">
          <div className="relative md:w-80 h-80 mx-auto w-full overflow-hidden">
            <Image
              className={cn('rounded-sm object-contain overflow-hidden transition-transform duration-500 group-hover:scale-105')}
              src={artwork.image}
              alt={artwork.title}
              fill
              sizes="(max-width: 768px) 340px, 320px"
              loading="lazy"
            />
          </div>
          <Separator className="mt-2" />
          <CardFooter className="flex flex-col mt-2 p-2 pt-0 max-w-full">
            <h2 className="text-lg font-bold mb-3 truncate overflow-hidden w-full text-center">{artwork.title}</h2>

            <p className="font-semibold text-sm text-primary">{categoryMap[artwork.category]}</p>

            <div className="flex flex-col mt-2 text-center text-muted-foreground">
              <p className="text-sm">Размери: {formatSize(artwork.length, artwork.width)}</p>
              <p className="text-sm">Повърхност: {surfaceMap[artwork.surface]}</p>
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
};
