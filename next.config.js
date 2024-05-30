/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*media.licdn.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: '*cdn-icons-png.flaticon.com',
                port: '',
            }
            
        ],
    },
    reactStrictMode: true,
    output: 'standalone',
};
