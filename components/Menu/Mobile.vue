<template>
  <div>
    <div class="flex justify-between">
      <nuxt-link to="/" />
      <MenuHamburguer
        :is-change-icon="isOpen"
        class="z-50 animate-fade-in"
        @click.native="openClose"
      />
    </div>
    <transition name="fade">
      <div
        v-show="isOpen"
        class="md:hidden fixed top-0 right-0 gap-4 justify-center content-center items-center w-full h-full backdrop-blur-xl backdrop-brightness-50 dark:bg-equo-black dropdown-navbar-mobile"
      >
        <nuxt-link
          :to="{ path: '/', hash:'#home'}"
          class="flex mt-4 text-3xl menu-button justify-left animate-fade-in"
          @click.native="openClose"
        >
          Home
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash:'#nosotros'}"
          class="flex text-3xl menu-button justify-left animate-fade-in"
          @click.native="openClose"
        >
          Nosotros
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash:'#servicios'}"
          class="flex text-3xl menu-button justify-left animate-fade-in"
          @click.native="openClose"
        >
          Servicios
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash:'#portfolio'}"
          class="flex text-3xl menu-button justify-left animate-fade-in"
          @click.native="openClose"
        >
          Portfolio
        </nuxt-link>
        <nuxt-link
          :to="{ path: '/', hash:'#contactanos'}"
          class="flex text-3xl menu-button justify-left animate-fade-in"
          @click.native="openClose"
        >
          Contacto
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openClose() {
      this.isOpen = ! this.isOpen;
    },
  },

};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}

.fade-enter, .fade-leave-to {
  opacity: 0
}

.dropdown-navbar-mobile {
  display: grid;
  grid-template-columns: fit-content(50%);
}
</style>


