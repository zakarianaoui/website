/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        domains: [
            'media.licdn.com',
            'cdn-icons-png.flaticon.com'
        ],
    },
    reactStrictMode: true,
    experimental:{appDir: true},
    output: 'standalone',
};
