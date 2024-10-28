// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-28',
  modules: ['@nuxt/eslint', '@nuxt/content', '@unocss/nuxt', '@nuxthq/studio'],
  css: ['@unocss/reset/tailwind.css'],
  devtools: { enabled: true },
  studio: { enabled: true },
  routeRules: {
    '/': { prerender: true }
  }
})
