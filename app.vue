<script setup lang="ts">
useFont([
  {
    family: "Fraunces",
    weight: "700",
    src: "/fonts/fraunces-bold-italic.woff2",
    display: "swap",
  },
  {
    family: "Fraunces",
    weight: "900",
    src: "/fonts/fraunces-black-italic.woff2",
    display: "swap",
  },
  {
    family: "Barlow",
    weight: "600",
    src: "/fonts/barlow-semibold.woff2",
    display: "swap",
  },
]);
</script>

<template>
  <Hero />
  <Grids />
  <Testimonials />
  <Gallery />
  <Footer />
</template>
