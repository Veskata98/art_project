'use client';

import { MouseEvent, useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageMagnifierProps {
    src: string;
    alt: string;
}

export const ImageMagnifier = ({ src, alt }: ImageMagnifierProps) => {
    const [showMagnifier, setShowMagnifier] = useState(false);

    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [[x, y], setXY] = useState([0, 0]);

    const [windowWidth, setWindowWidth] = useState(0);

    const magnifierHeight = 120;
    const magnifierWidth = 120;
    const zoomLevel = 1.2;

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
        return <Image src={src} alt={alt} className="object-contain p-2" fill />;
    }

    const mouseEnter = (e: MouseEvent<HTMLImageElement>) => {
        const el = e.currentTarget;

        const { width, height } = el.getBoundingClientRect();
        setSize([width, height]);

        setShowMagnifier(true);
    };

    const mouseLeave = (e: MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        setShowMagnifier(false);
    };

    const mouseMove = (e: MouseEvent<HTMLImageElement>) => {
        const el = e.currentTarget;
        const { top, left } = el.getBoundingClientRect();

        // Calculate the scale factor
        const scaleX = imgWidth / el.offsetWidth;
        const scaleY = imgHeight / el.offsetHeight;

        // Adjust mouse coordinates
        const x = (e.clientX - left) * scaleX;
        const y = (e.clientY - top) * scaleY;

        setXY([x, y]);
    };

    return (
        <>
            <Image
                src={src}
                alt={alt}
                className="object-contain p-2"
                fill
                onMouseEnter={(e) => mouseEnter(e)}
                onMouseLeave={(e) => mouseLeave(e)}
                onMouseMove={(e) => mouseMove(e)}
            />
            {showMagnifier && (
                <div
                    className="absolute pointer-events-none opacity-100 bg-no-repeat"
                    style={{
                        height: `${magnifierHeight}px`,
                        width: `${magnifierWidth}px`,
                        top: `${y - magnifierHeight / 2}px`,
                        left: `${x - magnifierWidth / 2}px`,
                        border: '1px solid lightgray',
                        backgroundImage: `url('${src}')`,
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
                    }}
                ></div>
            )}
        </>
    );
};
