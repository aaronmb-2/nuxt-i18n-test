// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default 
    // locales: ['en', 'fr'],  // used in URL path prefix
    strategy: 'prefix',
    defaultLocale: 'en',    // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true
    },
    baseUrl: 'localhost:3000',
    langDir: '/locales',
    locales: [
      {
        code: "en",
        name: "English",
        file: "en-us.json",
        iso: "en-US",
      },
      {
        code: "nl",
        name: "Nederlands",
        file: "nl-be.json",
        iso: "nl-BE",
      },
      {
        code: "fr",
        name: "Français",
        file: "fr-be.json",
        iso: "fr-FR",
      },
    ],
  }
});