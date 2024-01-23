/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')


const locales = {
  fr: 'fr',
  en: 'en',
};
module.exports = nextTranslate({
    reactStrictMode: true,
    experimental:{appDir: true},
    output: 'standalone',
    publicRuntimeConfig: {
      locales,
    },
});
