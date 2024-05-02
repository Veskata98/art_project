'use client';

import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterShareButton,
    ViberIcon,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    XIcon,
} from 'react-share';

export const ShareButtons = ({ url }: { url: string }) => {
    return (
        <>
            <p>Сподели: </p>
            <div className="flex gap-2">
                <FacebookShareButton url={url}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                    <XIcon size={32} round />
                </TwitterShareButton>
                <ViberShareButton url={url}>
                    <ViberIcon size={32} round />
                </ViberShareButton>
                <TelegramShareButton url={url}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <WhatsappShareButton url={url}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            </div>
        </>
    );
};
