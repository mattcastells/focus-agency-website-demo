<template>
  <Background class="min-h-screen bg-black background-bior">
    <Container>
      <div class="flex flex-col justify-center content-center items-center">
        <div class="mt-8">
          <img
            class="mt-16 mb-8 h-16 md:h-20"
            src="../assets/sections/bior/logo-bior-3.png"
            alt="Logo-Bior"
          >
        </div>
        <div>
          <P class="mt-4 xl:mt-8 max-w-4xl text-sm md:text-xl text-center text-white font-focus">
            Con <span class="text-focus-red">Bior Corp</span>, nos comprometimos
            a crear una comunidad de seguidores que pudieran interactuar con la
            marca en las redes sociales. Teniendo en cuenta que es una empresa
            que vende productos para envasar alimentos al vacío, asumimos el
            desafío de generar interacción y que los usuarios se sientan
            identificados con la empresa.
          </P>
        </div>
        <div
          class="flex flex-col 2xl:flex-row gap-4 justify-around content-center items-center mt-8 xl:mt-14"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-96 img"
              src="../assets/sections/bior/img-bior-1.png"
              alt="Img1"
            >
            <img
              class="w-96 img"
              src="../assets/sections/bior/img-bior-2.png"
              alt="Img2"
            >
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-96 img"
              src="../assets/sections/bior/img-bior-3.png"
              alt="Img3"
            >
            <img
              class="w-96 img"
              src="../assets/sections/bior/img-bior-4.png"
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
.background-bior {
  background-color: #5a92db;
  background-image: linear-gradient(315deg, #5a92db 0%, #08061a 74%);
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
