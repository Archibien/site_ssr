// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    apiToken: "", // private
    public: {
      apiBase: "",
    },
  },
  routeRules: {
    "/": { isr: 86400 }, // homepage cached 24h
    // "/": { prerender: true },
    // "/agency/**": { isr: 86400 },
    // "/project/**": { isr: 86400 },
  },
});
