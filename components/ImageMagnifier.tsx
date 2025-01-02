'use client';

import { useEffect, useRef, useState, MouseEvent } from 'react';
import Image from 'next/image';

interface ImageMagnifierProps {
  src: string;
  alt: string;
}

export const ImageMagnifier = ({ src, alt }: ImageMagnifierProps) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [windowWidth, setWindowWidth] = useState(0);

  const magnifierHeight = 120;
  const magnifierWidth = 120;
  const zoomLevel = 2;

  const imgRef = useRef<HTMLImageElement | null>(null);

  const mouseEnter = () => setShowMagnifier(true);

  const mouseLeave = () => setShowMagnifier(false);

  const mouseMove = (e: MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;

    const { top, left, width, height } = imgRef.current.getBoundingClientRect();

    // Calculate the position of the magnifier
    const x = Math.max(Math.min(e.clientX - left - magnifierWidth / 2, width - magnifierWidth), 0);
    const y = Math.max(Math.min(e.clientY - top - magnifierHeight / 2, height - magnifierHeight), 0);

    setXY([x, y]);
  };

  useEffect(() => {
    if (!window) return;

    const resizeFunc = () => {
      setWindowWidth(window.innerWidth);
    };

    resizeFunc();

    window.addEventListener('resize', resizeFunc);

    return () => {
      window.removeEventListener('resize', resizeFunc);
    };
  }, []);

  if (windowWidth < 1024) {
    return (
      <div className="relative flex justify-center items-center">
        <Image src={src} alt={alt} className="object-contain" width={600} height={600} />
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center">
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={600}
        height={600}
        className="object-contain"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
      />
      {showMagnifier && imgRef.current && (
        <div
          className="absolute pointer-events-none border border-gray-300 overflow-hidden rounded-md"
          style={{
            width: `${magnifierWidth}px`,
            height: `${magnifierHeight}px`,
            top: `${y}px`,
            left: `${x}px`,
          }}
        >
          <Image
            src={src}
            alt={`${alt} magnified`}
            fill
            style={{
              position: 'absolute',
              top: `-${y * zoomLevel}px`,
              left: `-${x * zoomLevel}px`,
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top left',
            }}
          />
        </div>
      )}
    </div>
  );
};
