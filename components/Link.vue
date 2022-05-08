<template>
  <nuxt-link
    :to="to"
    class="text-equo-blue hover:text-primary-button-hover"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/',
    },
  },
};
</script>
