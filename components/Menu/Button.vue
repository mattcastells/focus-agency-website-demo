<template>
  <component
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
  >
    <P class="!tracking-normal text-white hover:!text-focus-red transition-all">
      <slot />
    </P>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: '',
    },
  },

};
</script>

