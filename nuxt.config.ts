// https://nuxt.com/docs/api/configuration/nuxt-config
import { departments } from './app/data/departments'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
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
  nitro: {
    vercel: {
      config: {
        bypassToken: 'bJ8bbyI9p/suIZV1CeBXvOWsynhaS616IqW5BrNDLWU=',
      },
    },
    prerender: {
      routes: Object.values(departments).map((d) => d.url),
    },
  },
})
