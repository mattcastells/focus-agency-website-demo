<template>
  <Background
    id="portfolio"
    class="min-h-screen background-fourth"
  >
    <Container class="py-44">
      <div class="flex flex-col content-center max-w-xl text-white">
        <H4
          class="mb-2"
          data-aos="fade"
        >
          Creamos contenido profesional
        </H4>
        <hr
          class="w-11/12 h-1 rounded-sm border-none bg-focus-red"
          data-aos="fade-right"
        >
        <P
          class="my-8 text-white !text-lg"
          data-aos="fade-right"
        >
          Contamos con equipos profesionales para capturar los mejores vídeos y
          fotografías de tu producto o servicio para promocionarlo por las
          distintas plataformas digitales.
        </P>
        <a
          href="https://www.youtube.com/channel/UC2b7H389HjWHKJpBAiYfzNw"
          target="_blank"
        >
          <button class="learn-more">
            <span
              class="circle"
              aria-hidden="true"
            >
              <span class="icon arrow" />
            </span>
            <span class="button-text">¡Quiero ver!</span>
          </button>
        </a>
      </div>
    </Container>
  </Background>
</template>

<style scoped>
.background-fourth {
  background-image: url("../../assets/backgrounds/bg-fourth-section.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.learn-more {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  text-decoration: none;
  background: transparent;
  font-size: inherit;
}

button.learn-more {
  width: 12rem;
  height: auto;
}

button.learn-more .circle {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: #ef1257;
  border-radius: 1.625rem;
}

button.learn-more .circle .icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
}

button.learn-more .circle .icon.arrow {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  left: 0.625rem;
  width: 1.125rem;
  height: 0.125rem;
  background: none;
}

button.learn-more .circle .icon.arrow::before {
  position: absolute;
  content: "";
  top: -0.28rem;
  right: 0.0625rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #fff;
  border-right: 0.125rem solid #fff;
  transform: rotate(45deg);
}

button.learn-more .button-text {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: #ef1257;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
}

button:hover .circle {
  width: 100%;
}

button:hover .circle .icon.arrow {
  background: #fff;
  transform: translate(1rem, 0);
}

button:hover .button-text {
  color: #fff;
}
</style>
