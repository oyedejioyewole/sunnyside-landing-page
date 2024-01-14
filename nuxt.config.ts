export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/images/favicon-32x32.png",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Frontend Mentor - Sunnyside Landing Page challenge solved by OyewoleOyedeji",
        },
      ],
      title: "Sunnyside Landing Page - OyewoleOyedeji",
    },
  },
  devtools: { enabled: true },
  googleFonts: {
    families: {
      Barlow: [600],
      Fraunces: {
        ital: [700, 900],
      },
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-bootstrap-icons",
    "nuxt-svgo",
  ],
  nitro: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  svgo: {
    defaultImport: "component",
  },
});
