<template>
  <Background class="min-h-screen background-fourth-bis">
    <Container class="">
      <div class="flex flex-col items-center max-w-2xl">
        <div class="grid grid-cols-2 mt-6 w-40 h-40 bg-black bg-opacity-50">
          <img
            class="object-cover p-1 w-auto h-16"
            src="../../assets/imgs/img1-fourth-section.png"
            alt="Img1"
          />
          <img
            class="object-cover p-1 w-auto h-12"
            src="../../assets/imgs/img4-fourth-section.png"
            alt="Img4"
          />
          <img
            class="object-cover p-1 w-auto h-12"
            src="../../assets/imgs/img2-fourth-section.png"
            alt="Img2"
          />
          <img
            class="object-cover p-1 w-20 h-auto"
            src="../../assets/imgs/img5-fourth-section.png"
            alt="Img5"
          />
          <img
            class="object-cover p-1 w-auto h-12"
            src="../../assets/imgs/img3-fourth-section.png"
            alt="Img3"
          />
          <img
            class="object-cover p-1 w-auto h-12"
            src="../../assets/imgs/img6-fourth-section.png"
            alt="Img6"
          />
        </div>
        <div class="mt-5 w-80 h-[180px] bg-black bg-opacity-50">
          <iframe
            class="p-1"
            width="320"
            height="180"
            src="https://www.youtube.com/embed/2YD2keMBTto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="flex flex-col items-center mt-5">
          <P class="font-focus text-sm text-center text-white">
            Contamos con fotógrafos, videógrafos y editores profesionales para
            realizar el mejor contenido para tus redes sociales, web, tienda, o
            negocio.
          </P>
          <H4 class="mt-3 font-focus text-center text-white">
            Contenido de calidad
          </H4>
          <hr class="mt-3 w-56 h-1 bg-focus-red rounded-sm border-none" />
        </div>
      </div>
    </Container>
  </Background>
</template>

<script>
export default {};
</script>

<style>
.background-fourth-bis {
  background-image: url("../../assets/backgrounds/bg-fourth-section-bis.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
</style>
