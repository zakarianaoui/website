/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
    reactStrictMode: true,
    experimental:{appDir: true},
    output: 'standalone',
    webpack: (config, { isServer, webpack }) => {
        return config;
      }
});
