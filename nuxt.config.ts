// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  ssr: true,
  nitro: {
    // preset: 'digital-ocean',
    prerender: {
      // crawlLinks: false,
      //ignore: ['/404.html'],
      routes: ['/', '/slug1']
    }
  },
  // experimental: {
  //   // noScripts: true,
  //   payloadExtraction: false,
  // }
  // generate: {
  //   fallback: true
  // }
});
