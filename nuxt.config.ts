// https: //nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ... other options
  modules: ["@pinia/nuxt"],
  imports: {
    dirs: ["stores"],
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: true },
    // "/ssr": { ssr: true }, default
  },
});
