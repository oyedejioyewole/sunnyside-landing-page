<template>
  <section
    class="mx-auto grid min-h-screen w-[90%] place-items-center gap-y-20 py-24"
  >
    <!-- Heading -->
    <h1
      class="text-center font-serif text-2xl uppercase text-grayish-blue md:text-left md:text-3xl 2xl:text-5xl"
    >
      Client Testimonials
    </h1>

    <!-- Testimonials -->
    <div class="grid gap-x-10 gap-y-20 lg:grid-cols-3">
      <!-- Emily R. -->
      <div class="grid place-items-center gap-y-10">
        <!-- Profile picture -->
        <NuxtImg
          alt="Emily R."
          class="w-28 rounded-full md:w-32"
          format="webp"
          loading="lazy"
          src="/images/image-emily.jpg"
        />

        <!-- Testimonial -->
        <p class="text-center text-lg text-very-dark-grayish-blue md:text-xl">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>

        <!-- Details -->
        <div class="space-y-2 text-center">
          <h2 class="font-serif text-lg md:text-xl">Emily R.</h2>
          <h3 class="text-lg text-dark-grayish-blue md:text-xl lg:mb-0">
            Marketing Director
          </h3>
        </div>
      </div>

      <!-- Thomas S. -->
      <div class="grid place-items-center gap-y-10">
        <!-- Profile picture -->
        <NuxtImg
          alt="Thomas S."
          class="w-28 rounded-full md:w-32"
          format="webp"
          loading="lazy"
          src="/images/image-thomas.jpg"
        />

        <!-- Testimonial -->
        <p class="text-center text-lg text-very-dark-grayish-blue md:text-xl">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>

        <!-- Details -->
        <div class="space-y-2 text-center">
          <h2 class="font-serif text-lg md:text-xl">Thomas S.</h2>
          <h3 class="text-lg text-dark-grayish-blue md:text-xl lg:mb-0">
            Chief Operating Officer
          </h3>
        </div>
      </div>

      <!-- Jennie F. -->
      <div class="grid place-items-center gap-y-10">
        <!-- Profile picture -->
        <NuxtImg
          alt="Jennie F."
          class="w-28 rounded-full md:w-32"
          format="webp"
          loading="lazy"
          src="/images/image-jennie.jpg"
        />

        <!-- Testimonial -->
        <p class="text-center text-lg text-very-dark-grayish-blue md:text-xl">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>

        <!-- Details -->
        <div class="space-y-3 text-center">
          <h2 class="font-serif text-lg md:text-xl">Jennie F.</h2>
          <h3 class="text-lg text-dark-grayish-blue md:text-xl">
            Business Owner
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
