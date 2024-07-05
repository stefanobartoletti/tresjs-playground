// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    '@nuxt/eslint',
  ],

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  socialShare: {
    baseUrl: 'https://tresjs-playground.vercel.app/',
  },

})
