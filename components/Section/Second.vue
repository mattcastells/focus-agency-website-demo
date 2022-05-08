<template>
  <Background
    id="nosotros"
    class="min-h-screen bg-slate-50 background-second"
  >
    <Container class="py-8">
      <div
        class="flex flex-col justify-center content-center items-center mx-auto max-w-2xl"
      >
        <img
          class="mt-10 h-52"
          src="../../assets/logos/focus-logo-1.png"
          alt="Logo Focus Agency"
          data-aos="fade"
        >
        <H5
          class="max-w-md text-center"
          data-aos="fade"
        >
          Somos Focus Agency, la mejor opción para tus redes sociales.
        </H5>
        <P
          class="mt-8 text-center !tracking-normal !text-xl"
          data-aos="fade-right"
        >
          En nuestra
          <span class="text-focus-red">Agencia Digital</span> partimos de tus
          sueños, ideas y proyectos. Así originamos creativamente un mundo de
          posibilidades digitales que hacemos realidad, entregando de manera
          medible resultados que ayudarán a cumplir los objetivos de tu idea y/o
          negocio.
        </P>
        <P
          class="mt-5 mb-2 text-center !tracking-normal !text-xl"
          data-aos="fade-right"
        >
          Con profesionalidad, calidad, innovación, respaldo, responsabilidad y
          la proactividad que nos caracteriza por la pasión que sentimos en lo
          que hacemos, daremos a conocer tu marca o aumentar tus leads o ventas
          de productos y servicios. Desarrollamos
          <span class="text-focus-red">estrategias digitales</span> que se
          ajustan al presupuesto de tu compañía. ¡Tu éxito es el nuestro!
        </P>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-around md:justify-center items-center mt-12"
      >
        <div
          class="flex flex-col md:flex-row justify-center"
          data-aos="fade"
        >
          <div class="flex flex-col justify-center items-center p-8 text-center">
            <nuxt-link
              to="/Cerronegro"
              class=""
            >
              <img
                src="../../assets/sections/cerro-negro/logo-cerro-negro.png"
                alt="cerronegro-logo"
                class="w-auto h-8 invert logo-animation"
              >
            </nuxt-link>
          </div>
          <div class="flex flex-col justify-center items-center p-8 text-center">
            <nuxt-link to="/Bior">
              <img
                src="../../assets/sections/bior/logo-bior.png"
                alt="bior-logo"
                class="w-auto h-32 logo-animation"
              >
            </nuxt-link>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row justify-center"
          data-aos="fade"
        >
          <div class="flex flex-col justify-center items-center p-8 text-center">
            <nuxt-link to="/Sambu">
              <img
                src="../../assets/sections/sambu/sambu-logo.png"
                alt="sambu-logo"
                class="w-auto h-24 invert logo-animation"
              >
            </nuxt-link>
          </div>
          <div class="flex flex-col justify-center items-center p-8 text-center">
            <nuxt-link to="/Superglass">
              <img
                src="../../assets/sections/superglass/logo-superglass.png"
                alt="superglass-logo"
                class="w-auto h-8 logo-animation"
              >
            </nuxt-link>
          </div>
        </div>
      </div>
    </Container>
  </Background>
</template>

<style scoped>
/* .background-second { */
/* background: rgb(224,36,119);
background: radial-gradient(circle, rgba(224,36,119,1) 0%, rgba(252,70,107,1) 100%);
} */
</style>
