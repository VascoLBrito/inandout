<template>
  <header class="header">
    <div class="logo-area">
      <img class="logo" src="../assets/LOGOTIPO.svg" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return { msg: "yooo" };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  border-bottom: 2px solid white;

  .logo-area {
    position: relative;
    width: 100%;
    display: grid;
    place-content: center;
    padding-block: 2rem;
    background-color: #313131;
    z-index: 2;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-image: url(../assets/texture-nav.png);
      opacity: 0.35;
      z-index: -1;
    }
    .logo {
      width: 16rem;
    }
  }

  h3 {
    background-color: red;
    font-size: 3rem;
  }
}

@media (max-width: 900px) {
  .header {
    .logo-area {
      .logo {
        width: 8rem;
      }
    }
  }
}
</style>
