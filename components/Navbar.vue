<script setup>
import { useToggle } from "@vueuse/core";
const navigationOpen = useState("navigationOpen", () => false);

const toggleNavigation = useToggle(navigationOpen);
</script>

<template>
  <nav class="p-10 flex justify-between">
    <NuxtImg src="/images/logo.svg" class="w-44" />

    <div class="gap-10 text-white items-center text-lg lg:flex hidden">
      <a href="#">About</a><a href="#">Services</a><a href="#">Projects</a>
      <button class="font-serif py-3 bg-white text-black px-8 rounded-full">
        Contact
      </button>
    </div>
    <NuxtImg
      src="/images/icon-hamburger.svg"
      class="lg:hidden block cursor-pointer w-10"
      @click="toggleNavigation()"
    />
    <div
      :class="`absolute bg-white w-full flex flex-col ${
        !navigationOpen ? 'hidden' : ''
      } top-24 right-8 left-0`"
    >
      <div class="flex flex-col items-center gap-4 py-16">
        <a href="#" class="mb-4">About</a>
        <a href="#" class="mb-4">Services</a>
        <a href="#" class="mb-4">Projects</a>
        <button class="uppercase font-serif p-3 bg-yellow w-48 rounded-full">
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
