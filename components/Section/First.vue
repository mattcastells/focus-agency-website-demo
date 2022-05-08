<template>
  <div>
    <Background
      id="home"
      class="w-full min-h-screen background"
    >
      <video
        class="object-cover absolute w-full h-screen -z-10"
        src="../../assets/backgrounds/videos/v1.mp4"
        autoplay
        loop
        muted
      />
      <Container class="content-center items-center">
        <div class="flex flex-col items-center mx-auto max-w-4xl text-center">
          <H1
            class="mt-32 md:mt-52"
            data-aos="fade-right"
          >
            <span class="text-white shadow-nashe">Focus</span><span class="text-focus-red shadow-nashe"> Agency</span>
          </H1>
          <H5
            class="mt-8 text-white shadow-nashe"
            data-aos="fade-left"
          >
            Expertos en Marketing Digital - Diseño Web - Ecommerce - Social
            Media - Fotografia Institucional
          </H5>

          <nuxt-link :to="{ path: '/', hash: '#contactanos' }">
            <button
              class="mt-8 w-40 h-10 text-base font-bold text-white uppercase rounded-sm bg-focus-red buttoon"
            >
              Contactanos
            </button>
          </nuxt-link>
        </div>
      </Container>
    </Background>
  </div>
</template>

<style scoped>
.buttoon {
  transition: 200ms all;
}
.buttoon:hover {
  transform: scale(1.05);
}
.shadow-nashe {
  text-shadow: -1px 2px 4px rgba(52, 42, 42, 0.5);
}
</style>
