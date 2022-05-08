<template>
  <div>
    <SectionFirst />
    <SectionSecond />
    <SectionThird />
    <SectionFourth />
    <SectionServices />
    <SectionSixth />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  mounted() {
    AOS.init();
  },
  render: (h) => h(App),
};
</script>
