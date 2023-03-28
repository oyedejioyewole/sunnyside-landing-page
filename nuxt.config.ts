export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "nuxt-fonty",
  ],
  app: {
    head: {
      title: "Sunnyside Landing Page - OyewoleOyedeji",
      meta: [
        {
          name: "description",
          content:
            "Frontend Mentor - Sunnyside Landing Page challenge solved by OyewoleOyedeji",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon-32x32.png",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  fonty: {
    autoImport: true,
  },
  nitro: {
    preset: "vercel-edge",
  },
});
