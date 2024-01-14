<script lang="ts" setup>
const isMobileMenuOpen = ref(false);
</script>

<template>
  <!-- Navigation menu -->
  <nav class="relative mx-auto w-[90%]">
    <!-- Logo, menu items (desktop) and mobile menu icons -->
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <SvgoLogo class="w-44" role="img" aria-label="Sunnyside logo" />

      <!-- Menu items -->
      <div
        class="hidden items-center gap-6 text-lg text-white md:flex lg:gap-10 2xl:gap-16"
      >
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <button
          class="rounded-full bg-white px-8 py-3 font-serif uppercase text-black transition hover:bg-[#6cd0fe] hover:text-white"
        >
          Contact
        </button>
      </div>

      <!-- Mobile menu (icon) -->
      <div class="text-white md:hidden">
        <!-- Open icon -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen">
          <BootstrapIcon
            class="text-4xl"
            :name="isMobileMenuOpen ? 'x' : 'filter-right'"
          />
        </button>
      </div>
    </div>

    <!-- Mobile menu (items) -->
    <div
      class="absolute top-0 z-10 w-full rounded-l-lg rounded-br-lg bg-white transition duration-500 md:hidden"
      :class="{
        '-translate-y-[500px]': !isMobileMenuOpen,
        'translate-y-24': isMobileMenuOpen,
      }"
    >
      <!-- Mobile menu pointer -->
      <BootstrapIcon
        class="absolute right-0 top-0 -translate-y-[18px] translate-x-[1.5px] -rotate-90 text-4xl text-white"
        name="triangle-fill"
      />

      <div class="flex flex-col items-center gap-4 py-16 text-xl">
        <a
          href="#"
          class="mb-4 text-dark-grayish-blue transition hover:text-black"
          >About</a
        >
        <a
          href="#"
          class="mb-4 text-dark-grayish-blue transition hover:text-black"
          >Services</a
        >
        <a
          href="#"
          class="mb-6 text-dark-grayish-blue transition hover:text-black"
          >Projects</a
        >
        <button
          class="w-48 rounded-full bg-[#fad400] p-3 font-serif uppercase opacity-50 transition hover:opacity-100"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
