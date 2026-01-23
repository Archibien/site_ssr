// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { departments } from './app/data/departments'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    vercelBypassToken: '', // private
    apiToken: '', // private
    apiSecret: '', // private
    public: {
      apiBase: '',
      googleMapsApiKey: '',
    },
  },

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },

  css: ['~/assets/main.css', '~/assets/fonts.css'],

  routeRules: {
    '/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    }, // prerender with revalidation every 24h
    '/typologies/amenagement-bureau/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/construction-maison/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/construction-immeuble/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/extension-maison/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/renovation-appartement/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/renovation-immeuble/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/renovation-maison/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/surelevation-immeuble/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/surelevation-maison/': {
      prerender: true,
      isr: 60 * 60 * 24, // 24h
    },
    '/typologies/**': {
      isr: 60 * 60 * 24 * 3, // 3 days
    },
    '/agence/**': {
      isr: 60 * 60 * 24, // regenerate at most once per 24h
    },
    '/project/**': {
      isr: 60 * 60 * 24, // regenerate at most once per 24h
    },
    '/france/**': {
      isr: 60 * 60 * 24 * 3, // regenerate at most once per 3 days
    },
    '/sitemap.xml': { isr: 3600 },
    '/sitemap-*.xml': { isr: 60 * 60 * 24 },
  },

  socialShare: {
    baseUrl: 'https://www.archibien.com', // required!
  },

  nitro: {
    vercel: {
      config: {
        bypassToken: process.env.NUXT_VERCEL_BYPASS_TOKEN || '',
      },
    },
    prerender: {
      routes: Object.values(departments).map((d) => d.url),
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Trois architectes dessinent votre projet',
      titleTemplate: '%s | Archibien',
      htmlAttrs: {
        lang: 'fr',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Preload font to avoid layout shift on first load, only one weight
        {
          rel: 'preload',
          as: 'font',
          type: 'font/ttf',
          href: '/fonts/IBMPlexSansCondensed-Light.ttf',
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  modules: ['@nuxt/scripts', 'nuxt-easy-lightbox', '@stefanobartoletti/nuxt-social-share'],
})
