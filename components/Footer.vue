<template>
  <footer
    class="flex flex-col bg-footer justify-center items-center py-10"
    id="footer"
  >
    <NuxtImg
      src="/images/logo-footer.svg"
      class="w-64 mb-10 2xl:mb-20"
      alt="Sunnyside logo"
    />
    <div class="flex gap-16 lg:gap-10 mb-16 text-[#2c7566]">
      <a href="#" class="text-xl" title="About">About</a
      ><a href="#" class="text-xl" title="Services">Services</a
      ><a href="#" class="text-xl" title="Projects">Projects</a>
    </div>
    <div class="flex gap-10">
      <NuxtImg src="/images/icon-facebook.svg" class="w-8" alt="Facebook" />
      <NuxtImg src="/images/icon-instagram.svg" class="w-8" alt="Instagram" />
      <NuxtImg src="/images/icon-twitter.svg" class="w-8" alt="Twitter" />
      <NuxtImg src="/images/icon-pinterest.svg" class="w-8" alt="Pinterest" />
    </div>
    <div class="text-xl text-center mt-10 leading-9 text-[#2c7566]">
      Challenge by
      <NuxtLink
        to="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline underline-offset-4"
        title="Visit Frontend Mentor"
        >Frontend Mentor</NuxtLink
      >
      <div>
        Coded by
        <NuxtLink
          to="https://github.com/OyewoleOyedeji/"
          target="_blank"
          class="underline underline-offset-4"
          title="Visit my GitHub profile"
          >OyewoleOyedeji</NuxtLink
        >.
      </div>
    </div>
  </footer>
</template>