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
    <div class="flex gap-16 lg:gap-10 mb-12 text-[#2c7566]">
      <a href="#" class="text-xl transition hover:text-white" title="About"
        >About</a
      ><a href="#" class="text-xl transition hover:text-white" title="Services"
        >Services</a
      ><a href="#" class="text-xl transition hover:text-white" title="Projects"
        >Projects</a
      >
    </div>
    <div class="flex gap-10">
      <NuxtLink to="https://facebook.com" target="_blank"
        ><i
          class="
            lab
            la-facebook
            text-footer-content text-5xl
            transition
            hover:text-white
          "
        ></i>
      </NuxtLink>
      <NuxtLink target="_blank" to="https://instagram.com"
        ><i
          class="
            lab
            la-instagram
            text-footer-content text-5xl
            transition
            hover:text-white
          "
        ></i
      ></NuxtLink>
      <NuxtLink target="_blank" to="https://twitter.com"
        ><i
          class="
            lab
            la-twitter
            text-footer-content text-5xl
            transition
            hover:text-white
          "
        ></i
      ></NuxtLink>
      <NuxtLink target="_blank" to="https://pinterest.com"
        ><i
          class="
            lab
            la-pinterest
            text-footer-content text-5xl
            transition
            hover:text-white
          "
        ></i
      ></NuxtLink>
    </div>
    <div class="text-xl text-center mt-10 leading-9 text-[#2c7566]">
      Challenge by
      <NuxtLink
        to="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="
          underline underline-offset-4
          transition
          hover:decoration-white hover:text-white
        "
        title="Visit Frontend Mentor"
        >Frontend Mentor</NuxtLink
      >
      <div>
        Coded by
        <NuxtLink
          to="https://github.com/OyewoleOyedeji/"
          target="_blank"
          class="
            underline underline-offset-4
            transition
            hover:text-white hover:decoration-white
          "
          title="Visit my GitHub profile"
          >OyewoleOyedeji</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>