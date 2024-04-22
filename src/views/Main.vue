<script>
import Home from "../components/Home.vue";
import Info from "../components/Info.vue";

import Houses from "../components/Houses.vue";

export default {
  name: "Main",
  components: {
    Home,
    Info,
    Houses,
  },
};
</script>

<template>
  <Home></Home>
  <Houses></Houses>
  <Info></Info>
</template>

<style scoped lang="scss"></style>
