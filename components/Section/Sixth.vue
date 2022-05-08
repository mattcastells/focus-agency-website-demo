<template>
  <Background id="contactanos" class="min-h-screen background-sixth">
    <Container class="py-16">
      <div class="flex flex-col font-focus text-center text-white">
        <H4 class="mt-0 md:mt-20" data-aos="fade">
          ¿Te interesa nuestro trabajo? ¿Quieres ponerte en contacto? ¡Utiliza
          el siguiente formulario!
        </H4>
        <hr class="mx-auto mt-10 w-32 h-1 bg-white rounded-sm border-none" />
        <div class="flex flex-col lg:flex-row-reverse justify-around md:mt-12">
          <form
            method="POST"
            action="https://getform.io/f/893b8113-cc54-4c71-8766-836f9d557fe2"
          >
            <div class="flex flex-col gap-6 mt-10">
              <input
                class="mx-auto w-64 md:w-96 h-9 bg-transparent border-2 border-white placeholder-slate-300 outline-none pl-2"
                type="text"
                name="name"
                placeholder="Nombres y apellidos*"
                data-aos="fade-left"
              />
              <input
                class="mx-auto w-64 md:w-96 h-9 bg-transparent border-2 border-white placeholder-slate-300 outline-none pl-2"
                type="email"
                name="email"
                placeholder="Email*"
                data-aos="fade-left"
              />
              <input
                class="mx-auto w-64 md:w-96 h-9 bg-transparent border-2 border-white placeholder-slate-300 outline-none pl-2"
                type="number"
                name="phone"
                placeholder="Teléfono*"
                data-aos="fade-left"
              />
              <textarea
                class="mx-auto w-64 md:w-96 h-28 bg-transparent border-2 border-white placeholder-slate-300 flex-start outline-none resize-none pl-2"
                type="text"
                name="message"
                placeholder="Mensaje*"
                data-aos="fade-left"
              />
              <button
                class="mx-auto w-32 h-12 font-focus font-bold text-white button-send"
              >
                Enviar
              </button>
            </div>
          </form>
          <div
            class="flex flex-col items-center m-auto lg:m-0 mt-6 max-w-sm text-white"
          >
            <H4 class="mt-5" data-aos="fade-right">
              Todo gran proyecto, comienza con una idea.
            </H4>
            <hr
              class="mt-5 w-64 md:w-80 h-1 bg-focus-red rounded-sm border-none"
              data-aos="fade-right"
            />
            <P class="mt-5 font-semibold text-white" data-aos="fade-right">
              Madrid, España.
            </P>
            <P class="mt-2 font-semibold text-white" data-aos="fade-left">
              focusagencymedia@gmail.com
            </P>
            <P class="mt-2 font-semibold text-white" data-aos="fade-left">
              +34 666 808 051
            </P>
            <img
              class="mt-6 mr-5 w-44 h-auto"
              src="../../assets/logos/logo-focus-sixth-section.png"
              alt="Logo Focus Agency"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </Container>
  </Background>
</template>

<style>
.background-sixth {
  background-image: url("../../assets/backgrounds/bg-sixth-section.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.button-send {
  border: 2px solid #fff;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  transition: 0.3s;
  z-index: 1;
  color: #fff;
}

.button-send::before {
  content: "";
  width: 0;
  height: 300%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #fff;
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

.button-send:hover::before {
  width: 105%;
}

.button-send:hover {
  color: #111;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}
</style>
