// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ['@nuxtjs/tailwindcss'],
  // css: [
  //   "~/assets/style/styleHook.sass"
  // ],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       sass: {
  //         additionalData: '@use "~/assets/style/components.sass" as *\n'
  //       }
  //     }
  //   }
  // }
})
