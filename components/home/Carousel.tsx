'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { Artwork } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/helpers';
import Link from 'next/link';

interface HomePageCarouselProps {
  latestArtworks: Artwork[];
}

export const HomePageCarousel = ({ latestArtworks }: HomePageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleArtworkCount, setVisibleArtworkCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }[visibleArtworkCount];

  useEffect(() => {
    if (isPaused) return; // Don't set the interval if paused

    const timer = setInterval(() => {
      const newIndex = currentIndex + visibleArtworkCount;

      if (newIndex + visibleArtworkCount > latestArtworks.length) {
        setCurrentIndex(0);
        return;
      }

      setCurrentIndex(newIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [latestArtworks.length, visibleArtworkCount, currentIndex, isPaused]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleArtworkCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleArtworkCount(2);
      } else {
        setVisibleArtworkCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="relative w-full h-[500px] md:h-[450px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full flex py-2 pt-0"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 1.5,
          }}
        >
          <div className={cn('grid gap-4 w-full h-full px-4 sm:px-2 md:px-0', gridColsClass)}>
            {Array.from({ length: visibleArtworkCount }).map((_, index) => {
              const artwork = latestArtworks[currentIndex + index];
              return (
                <div key={artwork.id} className="relative flex-shrink-0 h-full shadow rounded-sm">
                  <Link href={`/artwork/${artwork.id}`}>
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      className={cn('object-cover rounded-sm', visibleArtworkCount === 1 && 'object-contain')}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
