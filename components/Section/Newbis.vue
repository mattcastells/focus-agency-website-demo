<template>
  <Background class="min-h-screen">
    <div class="flex flex-col min-h-screen bg-red-500">
      <div class="flex flex-col ssm:flex-row height">
        <div class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height cerronegro">
          <nuxt-link to="/Cerronegro">
            <img
              src="../../assets/phones/phone-cerronegro.png"
              alt="CerroNegro"
              class="h-40 ssm:h-96"
            >
          </nuxt-link>
        </div>
        <div class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height superglass">
          <nuxt-link to="/Superglass">
            <img
              src="../../assets/phones/phone-superglass.png"
              alt="Superglass"
              class="h-40 sm:h-96"
            >
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col ssm:flex-row height">
        <div class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height bior">
          <nuxt-link to="/Bior">
            <img
              src="../../assets/phones/phone-bior.png"
              alt="Bior"
              class="h-40 sm:h-96"
            >
          </nuxt-link>
        </div>
        <div class="flex justify-center items-center ssm:w-6/12 bg-blue-300 mobile-height sambu">
          <nuxt-link to="/Sambu">
            <img
              src="../../assets/phones/phone-sambu.png"
              alt="Sambu"
              class="h-40 sm:h-80"
            >
          </nuxt-link>
        </div>
      </div>
    </div>
  </Background>
</template>

<style>
.height {
  min-height: 50vh;
}

.mobile-height {
  min-height: 25vh;
}

.img-height {
  height:25rem;
}

.img-height-m {
  height: 15rem;
}

.cerronegro {
  background: yellow;
}

.superglass {
  background: blue;
}

.bior {
  background: green;
}

.sambu {
  background: red;
}
</style>
