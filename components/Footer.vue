<template>
  <footer class="grid place-items-center space-y-10 bg-footer py-10">
    <NuxtLink to="/">
      <SvgoLogoFooter class="w-44" aria-label="Sunnyside logo" role="img" />
    </NuxtLink>

    <div class="space-x-6 text-[#2c7566] md:space-x-10">
      <a
        href="#"
        class="text-lg transition hover:text-white md:text-xl"
        title="About"
        >About</a
      ><a
        href="#"
        class="text-lg transition hover:text-white md:text-xl"
        title="Services"
        >Services</a
      ><a
        href="#"
        class="text-lg transition hover:text-white md:text-xl"
        title="Projects"
        >Projects</a
      >
    </div>

    <div class="space-x-6 md:space-x-10">
      <NuxtLink to="https://facebook.com" target="_blank">
        <BootstrapIcon
          name="facebook"
          class="text-3xl text-footer-content transition hover:text-white hover:opacity-80"
        />
      </NuxtLink>
      <NuxtLink target="_blank" to="https://instagram.com">
        <BootstrapIcon
          name="instagram"
          class="text-3xl text-footer-content transition hover:text-white hover:opacity-80"
        />
      </NuxtLink>
      <NuxtLink target="_blank" to="https://twitter.com"
        ><BootstrapIcon
          name="twitter"
          class="text-3xl text-footer-content transition hover:text-white hover:opacity-80"
        />
      </NuxtLink>
      <NuxtLink target="_blank" to="https://pinterest.com">
        <BootstrapIcon
          name="pinterest"
          class="text-3xl text-footer-content transition hover:text-white hover:opacity-80"
        />
      </NuxtLink>
    </div>

    <div
      class="text-center text-lg leading-6 text-footer-content md:text-xl md:leading-9"
    >
      Challenge by
      <NuxtLink
        to="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="underline underline-offset-4 transition hover:text-white hover:decoration-white"
        title="Visit Frontend Mentor"
        >Frontend Mentor</NuxtLink
      >
      <div>
        Coded by
        <NuxtLink
          to="https://github.com/OyewoleOyedeji/"
          target="_blank"
          class="underline underline-offset-4 transition hover:text-white hover:decoration-white"
          title="Visit my GitHub profile"
          >OyewoleOyedeji</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>
