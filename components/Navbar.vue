<script setup>
import { useToggle } from "@vueuse/core";
const navigationOpen = useState("navigationOpen", () => false);

const toggleNavigation = useToggle(navigationOpen);
</script>

<template>
  <nav class="p-10 flex justify-between items-center">
    <NuxtImg src="/images/logo.svg" class="w-44" alt="Sunnyside logo" />

    <div
      class="
        gap-6
        lg:gap-10
        2xl:gap-16
        text-white
        items-center
        text-lg
        md:flex
        hidden
      "
    >
      <a href="#">About</a><a href="#">Services</a><a href="#">Projects</a>
      <button
        class="
          font-serif
          py-3
          bg-white
          text-black
          px-8
          rounded-full
          transition
          uppercase
          hover:bg-[#6cd0fe] hover:text-white
        "
      >
        Contact
      </button>
    </div>
    <div class="block md:hidden cursor-pointer text-white">
      <i
        :class="`las ${!navigationOpen ? 'la-bars' : 'la-times'} text-3xl`"
        @click="toggleNavigation()"
      ></i>
    </div>
    <div
      :class="`absolute  bg-white w-1/2 flex flex-col ${
        !navigationOpen ? 'hidden' : ''
      } top-36 w-[78vw] md:hidden left-10 after:absolute after:w-10 after:h-10 after:-top-5 after:-right-[1.88rem] after:rotate-45 after:border-l-white after:border-[30px] after:bg-transparent after:border-r-transparent after:border-t-transparent after:border-b-transparent`"
    >
      <div class="flex flex-col items-center gap-4 py-16 text-xl">
        <a href="#" class="mb-4 text-dark-grayish-blue">About</a>
        <a href="#" class="mb-4 text-dark-grayish-blue">Services</a>
        <a href="#" class="mb-6 text-dark-grayish-blue">Projects</a>
        <button
          class="
            uppercase
            font-serif
            p-3
            bg-[#fad400]
            w-48
            rounded-full
            transition
            hover:opacity-50
          "
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
