<template>
  <Background class="min-h-screen">
    <div class="flex flex-col min-h-screen bg-red-500">
      <div class="flex flex-col ssm:flex-row height">
        <div
          class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height cerronegro company-cellphone"
        >
          <nuxt-link
            to="/Cerronegro"
            class="flex justify-center content-center items-center text-center"
          >
            <H1 class="text-4xl company-name"> Cerronegro </H1>
            <img
              src="../assets/phones/phone-cerronegro.png"
              alt="CerroNegro"
              class="h-40 sm:h-96 company-image"
            />
          </nuxt-link>
        </div>
        <div
          class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height superglass company-cellphone"
        >
          <nuxt-link
            to="/Superglass"
            class="flex justify-center content-center items-center text-center"
          >
            <H1 class="text-4xl md:text-6xl company-name"> Superglass </H1>
            <img
              src="../assets/phones/phone-superglass.png"
              alt="Superglass"
              class="h-40 sm:h-96 company-image"
            />
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col ssm:flex-row height">
        <div
          class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height bior company-cellphone"
        >
          <nuxt-link
            to="/Bior"
            class="flex justify-center content-center items-center text-center"
          >
            <H1 class="text-4xl md:text-6xl company-name"> Bior </H1>
            <img
              src="../assets/phones/phone-bior.png"
              alt="Bior"
              class="h-40 sm:h-96 company-image"
            />
          </nuxt-link>
        </div>
        <div
          class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height sambu company-cellphone"
        >
          <nuxt-link
            to="/Sambu"
            class="flex justify-center content-center items-center text-center"
          >
            <H1 class="text-4xl md:text-6xl company-name"> Sambu </H1>
            <img
              src="../assets/phones/phone-sambu.png"
              alt="Sambu"
              class="h-40 sm:h-96 company-image"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </Background>
</template>

<style>
.company-name {
  display: none;
  z-index: 50;
  position: absolute;
  color: white;
  text-shadow: 2px 2px 3px black;
}

img,
.company-name {
  transition: 200ms all;
}

.company-cellphone:hover .company-name {
  display: block;
}

.company-cellphone:hover .company-image {
  filter: blur(2px);
  transform: scale(0.9);
}

.height {
  min-height: 50vh;
}

.mobile-height {
  min-height: 25vh;
}

.img-height {
  height: 25rem;
}

.img-height-m {
  height: 15rem;
}

.superglass {
  background: radial-gradient(
    circle,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 26, 255, 1) 42%,
    rgba(1, 115, 255, 1) 100%
  );
}

.cerronegro {
  background: radial-gradient(
    circle,
    rgba(191, 195, 16, 1) 0%,
    rgba(206, 210, 16, 1) 42%,
    rgba(245, 250, 19, 1) 100%
  );
}

.bior {
  background: radial-gradient(
    circle,
    rgba(221, 221, 221, 1) 0%,
    rgba(231, 231, 231, 1) 42%,
    rgba(255, 255, 255, 1) 100%
  );
}

.sambu {
  background: radial-gradient(
    circle,
    rgba(56, 31, 21, 1) 0%,
    rgba(66, 37, 25, 1) 42%,
    rgba(81, 45, 30, 1) 100%
  );
}
</style>
