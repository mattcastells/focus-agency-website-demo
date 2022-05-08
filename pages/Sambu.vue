<template>
  <Background class="min-h-screen bg-black background-sambu">
    <Container>
      <div class="flex flex-col justify-center content-center items-center">
        <div class="mt-8">
          <img
            class="mt-16 mb-8 h-36 md:h-44 invert"
            src="../assets/sections/sambu/sambu-logo.png"
            alt="Logo-sambu"
          >
        </div>
        <div>
          <P class="mt-4 xl:mt-8 max-w-4xl font-focus text-sm md:text-xl text-center text-black">
            Con <span class="text-focus-red">Sambú Foods</span>, nos superamos día a día diseñando contenido de alto
            nivel para crear una imagen de marca profesional. Al ser una empresa
            de embutidos y sales, entendemos que la calidad visual es de suma
            importancia y el diseño debe estar a la altura.
          </P>
        </div>
        <div
          class="flex flex-col 2xl:flex-row gap-4 justify-around content-center items-center mt-8 xl:mt-14"
        >
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-80 img"
              src="../assets/sections/sambu/sambu-img-1.jpg"
              alt="Img1"
            >
            <img
              class="w-80 img"
              src="../assets/sections/sambu/sambu-img-2.jpg"
              alt="Img2"
            >
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <img
              class="w-80 img"
              src="../assets/sections/sambu/sambu-img-3.jpg"
              alt="Img3"
            >
            <img
              class="w-80 img"
              src="../assets/sections/sambu/sambu-img-4.jpg"
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
.background-sambu {
  background-color: #6d3c29;
  background-image: linear-gradient(315deg, #6d3c29 0%, #ffffff 74%);
  background-position: bottom right;
  background-size: cover;
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
