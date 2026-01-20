// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    apiToken: "", // private
    revalidateSecret: "", // private
    public: {
      apiBase: "",
    },
  },
  routeRules: {
    "/": { isr: 86400 }, // homepage cached 24h
    "/agence/**": {
      isr: 86400, // regenerate at most once per 24h
    },
  },
  nitro: {
    vercel: {
      config: {
        bypassToken: "bJ8bbyI9p/suIZV1CeBXvOWsynhaS616IqW5BrNDLWU=",
      },
    },
  },
});
