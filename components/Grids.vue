<template>
  <section>
    <!-- 1st section -->
    <div class="grid h-screen lg:h-fit lg:grid-cols-2">
      <!-- Images -->
      <NuxtImg
        alt="An egg"
        class="order-last hidden lg:block lg:w-full"
        format="webp"
        loading="lazy"
        src="/images/desktop/image-transform.jpg"
      />
      <NuxtImg
        alt="An egg"
        class="w-full lg:hidden"
        format="webp"
        loading="lazy"
        src="/images/mobile/image-transform.jpg"
      />

      <div class="grid place-content-center space-y-10 px-10 py-16 2xl:p-48">
        <!-- Heading -->
        <h1
          class="text-center font-serif text-4xl text-very-dark-desaturated-blue md:text-5xl lg:text-left lg:text-7xl"
        >
          Transform your brand
        </h1>

        <!-- Copy -->
        <p
          class="text-center text-lg text-very-dark-grayish-blue md:text-xl lg:text-left"
        >
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>

        <!-- Learn more -->
        <a
          class="relative mx-auto font-serif text-xl uppercase before:absolute before:-left-2 before:bottom-1 before:-z-10 before:h-3 before:w-[152px] before:rounded-md before:bg-[#fad400] before:bg-opacity-40 before:transition before:hover:bg-opacity-80 md:text-2xl md:before:w-44 lg:mx-0"
          href="#"
          >Learn more</a
        >
      </div>
    </div>

    <!-- 2nd section -->
    <div class="h-screen lg:grid lg:h-fit lg:grid-cols-2">
      <!-- Images -->
      <NuxtImg
        alt="A pink cup"
        class="hidden lg:block lg:w-full"
        format="webp"
        loading="lazy"
        src="/images/desktop/image-stand-out.jpg"
      />
      <NuxtImg
        alt="A pink cup"
        class="w-full lg:hidden"
        format="webp"
        loading="lazy"
        src="/images/mobile/image-stand-out.jpg"
      />

      <div class="grid place-content-center space-y-10 px-10 py-16 2xl:p-48">
        <!-- Heading -->
        <h1
          class="text-center font-serif text-4xl text-very-dark-desaturated-blue md:text-5xl lg:text-left lg:text-7xl"
        >
          Stand out to the right audience
        </h1>

        <!-- Copy -->
        <p
          class="text-center text-lg text-very-dark-grayish-blue md:text-xl lg:text-left"
        >
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>

        <!-- Learn more -->
        <a
          class="relative mx-auto font-serif text-xl uppercase before:absolute before:-left-2 before:bottom-1 before:-z-10 before:h-3 before:w-[152px] before:rounded-md before:bg-[#fe7867] before:bg-opacity-40 before:transition before:hover:bg-opacity-80 md:text-2xl md:before:w-44 lg:mx-0"
          href="#"
          >Learn more</a
        >
      </div>
    </div>

    <!-- Split section -->
    <div class="grid h-screen lg:grid-cols-2">
      <!-- 1st section -->
      <div
        class="flex flex-col justify-end gap-y-5 bg-[url('/images/mobile/image-graphic-design.jpg')] bg-cover bg-center bg-no-repeat object-center px-10 py-12 md:bg-[url('/images/desktop/image-graphic-design.jpg')]"
      >
        <!-- Heading -->
        <h1
          class="text-center font-serif text-4xl text-dark-desaturated-cyan md:text-5xl 2xl:text-6xl"
        >
          Graphic Design
        </h1>

        <!-- Copy -->
        <p class="text-center text-xl text-very-dark-desaturated-blue">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>

      <!-- 2nd section -->
      <div
        class="flex flex-col justify-end gap-y-5 bg-[url('/images/mobile/image-photography.jpg')] bg-cover bg-center bg-no-repeat object-center px-10 py-12 md:bg-[url('/images/desktop/image-photography.jpg')]"
      >
        <!-- Heading -->
        <h1
          class="text-center font-serif text-4xl text-dark-desaturated-cyan md:text-5xl 2xl:text-6xl"
        >
          Photography
        </h1>

        <!-- Copy -->
        <p class="text-center text-xl text-very-dark-desaturated-blue">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  </section>
</template>
