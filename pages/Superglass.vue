<template>
  <Background class="min-h-screen bg-black background-superglass">
    <Container>
      <div class="flex flex-col justify-center content-center items-center">
        <div class="mt-8">
          <img
            class="mt-16 mb-8 h-12 md:h-16"
            src="../assets/sections/superglass/logo-superglass.png"
            alt="Logo-Superglass"
          >
        </div>
        <div>
          <P class="mt-2 xl:mt-2 max-w-4xl font-focus text-sm md:text-xl text-center text-focus-black">
            Comunicar y gestionar la imagen de una empresa B2B también es un
            desafío que cumplimos con
            <span class="text-focus-red">Superglass S.A.</span> Nos enfocamos en
            transmitir los valores de calidad, detalle y transparencia de una
            empresa dedicada a vender vidrios y ventanas para edificios,
            constructoras o negocios.
          </P>
        </div>
        <div
          class="flex flex-col xl:flex-row gap-4 justify-around content-center items-center mt-8 xl:mt-14"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-56 md:w-64 h-96 md:h-96 img"
              src="../assets/sections/superglass/img-superglass-1.png"
              alt="Img1"
            >
            <img
              class="hidden sm:block w-56 md:w-64 h-96 md:h-96 img"
              src="../assets/sections/superglass/img-superglass-2.jpg"
              alt="Img2"
            >
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-56 md:w-64 h-96 md:h-96 img"
              src="../assets/sections/superglass/img-superglass-3.jpg"
              alt="Img3"
            >
            <img
              class="hidden sm:block w-56 md:w-64 h-96 md:h-96 img"
              src="../assets/sections/superglass/img-superglass-4.jpg"
              alt="Img4"
            >
          </div>
        </div>
        <Clients class="justify-end" />
      </div>
    </Container>
  </Background>
</template>

<style>
.background-superglass {
  background-color: #7eb0f1;
  background-image: linear-gradient(315deg, #7eb0f1 0%, #d9d7eb 74%);
  background-position: bottom right;
  background-size: cover;
}
.img {
  border-radius: 2%;
  box-shadow: 0px 10px 15px rgba(14, 13, 13, 0.822);
}

.VerMas {
 padding: 1.3em 3em;
 font-size: 12px;
 text-transform: uppercase;
 letter-spacing: 2.5px;
 font-weight: 500;
 color: #000;
 background-color: #fff;
 border: none;
 border-radius: 45px;
 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease 0s;
 cursor: pointer;
 outline: none;
}

.VerMas:hover {
 background: #EF1257;
 box-shadow: 0px 10px 15px rgba(148, 10, 33, 0.822);
 color: #fff;
 transform: translateY(-7px);
}

.VerMas:active {
 transform: translateY(-1px);
}
</style>
