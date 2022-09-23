<template>
  <section
    class="
      h-screen
      bg-[url('/images/mobile/image-header.jpg')]
      lg:bg-[url('/images/desktop/image-header.jpg')]
      bg-center bg-no-repeat bg-cover
    "
  >
    <Navbar />
    <h1
      class="
        font-serif
        uppercase
        text-5xl
        2xl:text-7xl
        text-center text-white
        mt-24
        md:mt-96
        lg:mt-12
        2xl:mt-96 2xl:mb-40
        lg:mb-16
        md:mb-36
        mb-16
      "
    >
      We Are Creatives
    </h1>
    <div class="flex justify-center">
      <NuxtImg src="/images/icon-arrow-down.svg" />
    </div>
  </section>
</template>