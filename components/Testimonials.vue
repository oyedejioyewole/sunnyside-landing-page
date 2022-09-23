<template>
  <section
    class="flex flex-col justify-center lg:py-0 2xl:h-screen items-center"
  >
    <h1
      class="
        uppercase
        font-serif
        text-grayish-blue text-3xl
        2xl:text-5xl
        mb-0
        2xl:mb-14
        py-16
        2xl:py-36
      "
    >
      Client Testimonials
    </h1>
    <div
      class="
        flex flex-col
        justify-center
        items-center
        lg:flex-row
        gap-10
        2xl:gap-16
        lg:p-10
        2xl:p-36
        py-16
      "
    >
      <div class="w-1/3">
        <NuxtImg
          format="webp"
          src="/images/image-emily.jpg"
          class="rounded-full w-32 mx-auto mb-10"
          alt="Emily R."
        />
        <p class="text-xl text-very-dark-grayish-blue text-center">
          We put our trust in Sunnyside and they delivered, making sure our
          needs were met and deadlines were always hit.
        </p>
        <h2 class="text-center font-serif text-xl mt-10">Emily R.</h2>
        <h3 class="text-xl text-dark-grayish-blue text-center mb-10 lg:mb-0">
          Marketing Director
        </h3>
      </div>
      <div class="w-1/3">
        <NuxtImg
          format="webp"
          src="/images/image-thomas.jpg"
          class="rounded-full w-32 mx-auto mb-10"
          alt="Thomas S."
        />
        <p class="text-xl text-very-dark-grayish-blue text-center">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
          success made it a satisfying and enjoyable experience.
        </p>
        <h2 class="text-center font-serif text-xl mt-10">Thomas S.</h2>
        <h3 class="text-xl text-dark-grayish-blue text-center mb-10 lg:mb-0">
          Chief Operating Officer
        </h3>
      </div>
      <div class="w-1/3">
        <NuxtImg
          format="webp"
          src="/images/image-jennie.jpg"
          class="rounded-full w-32 mx-auto mb-10"
          alt="Jennie F."
        />
        <p class="text-xl text-very-dark-grayish-blue text-center">
          Incredible end result! Our sales increased over 400% when we worked
          with Sunnyside. Highly recommended!
        </p>
        <h2 class="text-center font-serif text-xl mt-10">Jennie F.</h2>
        <h3 class="text-xl text-dark-grayish-blue text-center">
          Business Owner
        </h3>
      </div>
    </div>
  </section>
</template>