<template>
  <Background
    id="servicios"
    class="bg-black"
  >
    <Container class="">
      <div
        class="flex justify-center content-center items-center w-full h-screen"
      >
        <div class="hidden md:block">
          <img
            class=""
            src="../../assets/imgs/phone-third-section.png"
            alt="Phone"
            data-aos="fade-left"
          >
        </div>
        <div class="flex flex-col items-center md:items-start p-6 max-w-3xl">
          <div class="py-10 text-center">
            <H4
              class="inline text-white rounded-md border-b-4 border-focus-red"
              data-aos="fade"
            >
              Redes sociales para empresas.
            </H4>
          </div>
          <div>
            <P
              class="text-center md:text-left text-white"
              data-aos="fade-right"
            >
              Construimos tu presencia en las redes sociales. Cuidamos tu marca,
              tu contenido y tu estratégia, para ayudarte a conseguir tus
              objetivos de visibilidad y ventas dentro de estas plataformas.
            </P>
          </div>
          <div class="py-10">
            <nuxt-link to="/Companies">
              <button class="font-focus btn">
                <span>ECHA UN VISTAZO</span>
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </Container>
  </Background>
</template>

<script>
export default {};
</script>

<style>
.btn {
  display: inline-block;
  border-radius: 4px;
  background-color: #ef1257;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 17px;
  padding: 12px;
  width: 205px;
  transition: all 0.5s;
  cursor: pointer;
}

.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn span:after {
  content: "»";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -15px;
  transition: 0.5s;
}

.btn:hover span {
  padding-right: 15px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
