<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
<template>
  <router-link to="/inandout/">
    <Navigation></Navigation>
  </router-link>
  <router-view />
  <Footer></Footer>
</template>

<style scoped lang="scss">
@media (max-width: 1000px) {
}
</style>
