<template>
  <Background class="w-full bg-focus-black bg-footer">
    <Container class="">
      <div
        class="flex flex-row justify-center content-between items-center p-5"
      >
        <div class="flex flex-row items-center" />
        <div class="flex flex-col justify-center content-center items-center">
          <div class="flex flex-row justify-between items-center">
            <hr class="h-[1px] bg-focus-red border-none" />
            <div class="flex flex-row justify-center items-center space-x-5">
              <a
                href="https://www.facebook.com/focusagencymedia"
                target="_blank"
              >
                <img
                  class="w-auto h-6 invert redes"
                  src="../../assets/footer/facebook.png"
                  alt="Facebook"
                />
              </a>
              <a href="mailto:focusagencymedia@gmail.com" target="_blank">
                <img
                  class="w-auto h-6 invert redes"
                  src="../../assets/footer/correo-electronico.png"
                  alt="Gmail"
                />
              </a>
              <a href="https://www.instagram.com/_focusagency" target="_blank">
                <img
                  class="w-auto h-6 invert redes"
                  src="../../assets/footer/instagram.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/focusagencymedia/"
                target="_blank"
              >
                <img
                  class="w-auto h-6 invert redes"
                  src="../../assets/footer/logotipo-de-linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </div>
            <hr class="h-[1px] bg-focus-red border-none" />
          </div>
          <div
            class="flex flex-col content-center items-center mt-7 text-center"
          >
            <H5 class="font-focus text-lg text-white">
              FOCUS <span class="text-focus-red">AGENCY</span>
            </H5>
            <P class="-mt-3 font-focus text-[9px] text-white">
              Copyright © 2021 Focus Agency, Inc.
            </P>
            <div
              class="flex flex-row justify-center content-center items-center"
            >
              <P class="w-32 text-xs text-white huver"> Derechos reservados </P>
              <P class="ml-2 text-xs text-white"> | </P>
              <nuxt-link to="privacy-policy">
                <P class="ml-2 text-xs text-white huver">
                  Pólitica de privacidad
                </P>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center" />
      </div>
    </Container>
  </Background>
</template>

<script>
export default {};
</script>

<style>
.redes,
.huver {
  transition: 200ms all;
}

.redes:hover {
  transform: scale(1.3);
}

.huver:hover {
  color: rgb(239, 18, 87);
}
</style>
