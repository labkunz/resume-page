// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/style/components.sass",
    // "~/assets/style/components.scss",
    // "~/assets/scss/components.scss",
  ],
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
