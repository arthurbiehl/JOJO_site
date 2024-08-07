export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [`assets/css/style.css`],
  
  modules: [
    '@pinia/nuxt',
    'nuxt-icon',
    '@vueuse/nuxt',
    'vue3-carousel-nuxt'
  ],

  imports: {
    dirs: ["./store"],
  },

  pinia: {
    storesDirs: ["defineStore", "acceptHMRUpdate", "storeToRefs"],
  },
  
  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.API_URL || "http://127.0.0.1:8000/api",
  //     imageURL: process.env.IMAGE_URL || "http://127.0.0.1:8000"
  //   },
  // },

})
