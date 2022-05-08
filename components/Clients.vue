<template>
  <div class="flex gap-6 my-12">
    <div>
      <nuxt-link to="/Bior">
        <button
          alt="Bior"
          class="client"
        >
          Bior
        </button>
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/Cerronegro">
        <button
          alt="CerroNegro"
          class="client"
        >
          Cerro Negro
        </button>
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/Sambu">
        <button
          alt="Sambu"
          class="client"
        >
          Sambu
        </button>
      </nuxt-link>
    </div>
    <div>
      <nuxt-link to="/Superglass">
        <button
          alt="Superglass"
          class="client"
        >
          SuperGlass
        </button>
      </nuxt-link>
    </div>
  </div>
</template>


<style>
.client {
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

.client:hover {
 background-color: #f31848;
 box-shadow: 0px 10px 10px rgba(184, 11, 26, 0.4);
 color: #fff;
 transform: translateY(-7px);
}

.client:active {
 transform: translateY(-1px);
}
</style>
