// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  postcss:{
    plugins:{
        autoprefixer:{},
        'tailwindcss':true,
        'postcss-import':true

    }
},
// css: ['~/assets/css/defaultstyles.css'],
tailwindcss: {
  configPath: 'tailwind.config.ts',
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'last' }],
  },
})
