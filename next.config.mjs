/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'smisyrqgnqamsbzmlhox.supabase.co',
            },
        ],
    },
};

export default nextConfig;
