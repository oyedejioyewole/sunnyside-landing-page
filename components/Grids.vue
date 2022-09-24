<template>
  <section>
    <div class="flex items-center flex-col lg:flex-row">
      <div class="w-1/2 py-16 lg:py-0 lg:px-10 2xl:p-48">
        <h1
          class="
            font-serif
            text-5xl text-center
            lg:text-7xl lg:text-left
            text-very-dark-desaturated-blue
            mb-14
          "
        >
          Transform your
          <div>brand</div>
        </h1>
        <p
          class="
            text-xl text-very-dark-grayish-blue
            mb-16
            text-center
            lg:text-left
          "
        >
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a
          href="#"
          class="
            uppercase
            text-2xl
            font-serif
            lg:block
            flex
            mx-auto
            lg:mx-0
            relative
            before:content-['']
            before:absolute
            before:bottom-1
            before:-left-2
            before:h-3
            before:bg-[#fad400]
            before:opacity-40
            before:transition
            before:-z-10
            before:w-44
            before:rounded-md
            before:hover:opacity-80
            w-fit
          "
          >Learn more</a
        >
      </div>
      <NuxtImg
        format="webp"
        src="/images/desktop/image-transform.jpg"
        class="order-first lg:order-last w-full lg:w-1/2 lg:block hidden"
      />
      <NuxtImg
        format="webp"
        src="/images/mobile/image-transform.jpg"
        class="order-first lg:order-last w-full lg:w-1/2 lg:hidden"
      />
    </div>
    <div class="flex flex-col lg:flex-row items-center">
      <NuxtImg
        format="webp"
        src="/images/desktop/image-stand-out.jpg"
        class="w-full lg:w-1/2 lg:block hidden"
      />
      <NuxtImg
        format="webp"
        src="/images/mobile/image-stand-out.jpg"
        class="w-full lg:w-1/2 lg:hidden"
      />
      <div class="w-1/2 py-16 lg:py-0 lg:px-10 2xl:p-48">
        <h1
          class="
            font-serif
            text-5xl text-center
            lg:text-7xl lg:text-left
            text-very-dark-desaturated-blue
            mb-14
          "
        >
          Stand out to the right
          <div>audience</div>
        </h1>
        <p
          class="
            text-xl text-center
            lg:text-left
            text-very-dark-grayish-blue
            mb-16
          "
        >
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a
          href="#"
          class="
            uppercase
            text-2xl
            font-serif
            flex
            mx-auto
            lg:mx-0 lg:block
            relative
            before:content-['']
            before:absolute
            before:bottom-1
            before:-left-2
            before:h-3
            before:bg-[#fe7867]
            before:opacity-40
            before:transition
            before:-z-10
            before:w-44
            before:rounded-md
            before:hover:opacity-80
            w-fit
          "
          >Learn more</a
        >
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div
        class="
          w-full
          lg:w-1/2
          bg-[url('/images/mobile/image-graphic-design.jpg')]
          lg:bg-[url('/images/desktop/image-graphic-design.jpg')]
          bg-no-repeat bg-cover bg-center
        "
      >
        <h1
          class="
            text-5xl
            lg:text-6xl
            font-serif
            text-center text-dark-desaturated-cyan
            mb-14
            2xl:mt-50rem
            mt-96
          "
        >
          Graphic Design
        </h1>
        <p class="text-xl text-center text-very-dark-desaturated-blue pb-36">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div
        class="
          w-full
          lg:w-1/2
          bg-[url('/images/mobile/image-photography.jpg')]
          lg:bg-[url('/images/desktop/image-photography.jpg')]
          bg-no-repeat bg-cover bg-center
          py-40
          lg:py-0
        "
      >
        <h1
          class="
            text-5xl
            lg:text-6xl
            font-serif
            text-center text-dark-desaturated-cyan
            mb-14
            2xl:mt-50rem
            mt-96
          "
        >
          Photography
        </h1>
        <p class="text-xl text-center text-very-dark-desaturated-blue">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  </section>
</template>
