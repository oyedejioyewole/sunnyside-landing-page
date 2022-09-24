// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image-edge", "@vueuse/nuxt"],
  ssr: false,
  meta: {
    viewport: "width=device-width, initial-scale=1",
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
        rel: "preconnect",
        href: "https://api.fonts.coollabs.io",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://api.fonts.coollabs.io/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/images/favicon-32x32.png",
      },
      {
        rel: "stylesheet",
        href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
      },
    ],
  },
});
