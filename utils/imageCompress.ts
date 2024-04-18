'use client';

import Compressor from 'compressorjs';

export const imageCompress = async (image: File) => {
    const compressedImage = await new Promise((resolve, reject) => {
        new Compressor(image, {
            width: 1000,
            height: 1000,
            resize: 'contain',
            success(result) {
                resolve(result);
            },
            error(error) {
                reject(error);
            },
        });
    });

    return compressedImage as File;
};
