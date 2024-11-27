// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'My Nuxt App'
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
