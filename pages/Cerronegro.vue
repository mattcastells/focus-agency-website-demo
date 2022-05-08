<template>
  <Background class="min-h-screen bg-black background-third-cerro-negro">
    <Container>
      <div class="flex flex-col justify-center content-center items-center">
        <div class="mt-8">
          <img
            class="mt-16 mb-8 h-8 md:h-12 invert"
            src="../assets/sections/cerro-negro/logo-cerro-negro.png"
            alt="Logo-Cerro-Negro"
          >
        </div>
        <div>
          <P class="mt-2 xl:mt-4 max-w-4xl font-focus text-sm md:text-xl text-center text-black">
            Desde octubre del 2020,
            <span class="text-focus-red">Cerro Negro</span> nos elige como
            gestores integrales de todas sus redes sociales. Entendemos lo
            importante que es cuidar la imagen de una empresa grande, por lo que
            cuidadosamente diseñamos y publicamos el contenido que mejor se
            adecúe a sus necesidades.
          </P>
        </div>
        <div
          class="flex xl:flex-row gap-4 justify-around content-center items-center mt-8 xl:mt-8"
        >
          <div class="flex flex-col md:flex-col xl:flex-row ssm:flex-row gap-4">
            <img
              class="w-40 md:w-64 img"
              src="../assets/sections/cerro-negro/cerro-img-3.png"
              alt="Img1"
            >
            <img
              class="w-40 md:w-64 img"
              src="../assets/sections/cerro-negro/cerro-img-2.png"
              alt="Img2"
            >
          </div>
          <div class="flex flex-col xl:flex-row gap-4">
            <img
              class="hidden lg:block w-40 md:w-64 img"
              src="../assets/sections/cerro-negro/cerro-img-1.png"
              alt="Img3"
            >
            <img
              class="hidden xl:block w-40 md:w-64 h-[455px] img"
              src="../assets/sections/cerro-negro/cerro-img-4.png"
              alt="Img4"
            >
          </div>
        </div>
        <Clients />
      </div>
    </Container>
  </Background>
</template>

<style>
.background-third-cerro-negro {
  background-size: auto;
  background-color: #94999e;
  background-image: linear-gradient(315deg, #94999e 0%, #f5f7fa 74%);
}

.img {
  border-radius: 2%;
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
