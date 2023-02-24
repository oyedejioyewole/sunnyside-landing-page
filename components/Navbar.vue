<script setup>
const isNavigationOpen = ref(false);

const toggleNavigation = useToggle(isNavigationOpen);
</script>

<template>
  <nav class="p-10 flex justify-between items-center">
    <NuxtImg src="/images/logo.svg" class="w-44" alt="Sunnyside logo" />

    <div
      class="gap-6 lg:gap-10 2xl:gap-16 text-white items-center text-lg md:flex hidden"
    >
      <a href="#">About</a><a href="#">Services</a><a href="#">Projects</a>
      <button
        class="font-serif py-3 bg-white text-black px-8 rounded-full transition uppercase hover:bg-[#6cd0fe] hover:text-white"
      >
        Contact
      </button>
    </div>
    <div class="block md:hidden cursor-pointer text-white">
      <!-- Open icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 fill-white cursor-pointer"
        viewBox="0 0 16 16"
        @click="toggleNavigation()"
        v-if="!isNavigationOpen"
      >
        <path
          fill-rule="evenodd"
          d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <!-- Close icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-10 h-10 fill-white"
        viewBox="0 0 16 16"
        @click="toggleNavigation()"
        v-else-if="isNavigationOpen"
      >
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
        />
      </svg>
    </div>
    <div
      class="absolute bg-white w-[87%] sm:w-[90%] flex flex-col top-36 left-6 mx-auto md:hidden rounded-lg z-10 transition duration-500"
      :class="{
        '-translate-y-[500px]': !isNavigationOpen,
        'translate-y-[10px]': isNavigationOpen,
      }"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-12 absolute -top-5 -rotate-90 -right-[3px] fill-white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
        />
      </svg>
      <div class="flex flex-col items-center gap-4 py-16 text-xl">
        <a
          href="#"
          class="mb-4 text-dark-grayish-blue hover:text-black transition"
          >About</a
        >
        <a
          href="#"
          class="mb-4 text-dark-grayish-blue hover:text-black transition"
          >Services</a
        >
        <a
          href="#"
          class="mb-6 text-dark-grayish-blue hover:text-black transition"
          >Projects</a
        >
        <button
          class="uppercase font-serif p-3 bg-[#fad400] w-48 rounded-full transition opacity-50 hover:opacity-100"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
