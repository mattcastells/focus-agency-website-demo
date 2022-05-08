<template>
  <div class="bg-opacity-80 backdrop-blur">
    <Container class="flex justify-between p-5">
      <!-- Left -->
      <img
        src="../../assets/logos/focus-logo-lateral.png"
        alt="focus-logo"
        class="h-11"
      />
      <div class="flex gap-8 lg:gap-10 justify-center items-center">
        <nuxt-link :to="{ path: '/', hash: '#home' }" class="menu-button">
          Home
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#nosotros' }" class="menu-button">
          Nosotros
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#servicios' }" class="menu-button">
          Servicios
        </nuxt-link>
        <nuxt-link :to="{ path: '/', hash: '#portfolio' }" class="menu-button">
          Portfolio
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash: '#contactanos' }"
          class="menu-button"
        >
          Contacto
        </nuxt-link>
      </div>
    </Container>
  </div>
</template>
<script>
export default {
  /* eslint-disable require-jsdoc */
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    function reveal() {
      const hr = document.getElementById("hr");

      const classes = "opacity-100";

      window.scrollY > 0
        ? hr.classList.add(classes)
        : hr.classList.remove(classes);
    }
    window.addEventListener("scroll", reveal);
  },
  methods: {
    openClose() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.menu-button {
  letter-spacing: 0em;
  color: white;
  transition: 300ms all;
}

.menu-button:hover {
  @apply text-focus-red;
}
</style>
