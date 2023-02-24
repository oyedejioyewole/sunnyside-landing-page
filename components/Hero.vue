<template>
  <section
    class="h-screen bg-[url('/images/mobile/image-header.jpg')] md:bg-[url('/images/desktop/image-header.jpg')] bg-center bg-no-repeat bg-cover relative"
  >
    <Navbar />
    <div
      class="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:space-y-10 space-y-36"
    >
      <h1
        class="font-serif uppercase text-5xl 2xl:text-7xl text-center text-white"
      >
        We Are Creatives
      </h1>
      <div class="flex justify-center">
        <NuxtImg src="/images/icon-arrow-down.svg" alt="Arrow down" />
      </div>
    </div>
  </section>
</template>
