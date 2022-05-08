<template>
  <a
    :href="href"
    class="font-focus text-equo-blue hover:text-focus-red"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '',
    },
  },
};
</script>
