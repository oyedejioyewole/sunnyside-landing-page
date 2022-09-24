<script setup>
import { useToggle } from "@vueuse/core";
const navigationOpen = useState("navigationOpen", () => false);

const toggleNavigation = useToggle(navigationOpen);
</script>

<template>
  <nav class="p-10 flex justify-between">
    <NuxtImg src="/images/logo.svg" class="w-44 text-white" />

    <div
      class="gap-10 2xl:gap-16 text-white items-center text-lg lg:flex hidden"
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
    <div class="block lg:hidden cursor-pointer text-white">
      <i class="las la-bars text-3xl" @click="toggleNavigation()"></i>
    </div>
    <div
      :class="`absolute bg-white w-full flex flex-col ${
        !navigationOpen ? 'hidden' : ''
      } top-24 right-8 left-0`"
    >
      <div class="flex flex-col items-center gap-4 py-16">
        <a href="#" class="mb-4">About</a>
        <a href="#" class="mb-4">Services</a>
        <a href="#" class="mb-4">Projects</a>
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
