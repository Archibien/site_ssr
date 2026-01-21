// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    apiToken: '', // private
    apiSecret: '', // private
    public: {
      apiBase: '',
    },
  },
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },
  routeRules: {
    '/': {
      prerender: true,
      isr: 86400, // 24h
    }, // prerender with revalidation every 24h
    '/typologies/amenagement-bureau/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/construction-maison/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/construction-immeuble/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/extension-maison/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/renovation-appartement/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/renovation-immeuble/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/renovation-maison/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/surelevation-immeuble/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/typologies/surelevation-maison/': {
      prerender: true,
      isr: 86400, // 24h
    },
    '/agence/**': {
      isr: 86400, // regenerate at most once per 24h
    },
    '/project/**': {
      isr: 86400, // regenerate at most once per 24h
    },
    '/france/**': {
      isr: 60 * 60 * 24 * 3, // regenerate at most once per 3 days
    },
  },
  nitro: {
    vercel: {
      config: {
        bypassToken: 'bJ8bbyI9p/suIZV1CeBXvOWsynhaS616IqW5BrNDLWU=',
      },
    },
  },
})
