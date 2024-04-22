<template>
  <div class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <div class="text">
        <h2>Contacto Enviado</h2>
        <p>O teu email foi email enviado com sucesso</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped lang="scss">
/* Modal styles */
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

$modal-content-height: 20rem;

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 40rem;
  max-height: $modal-content-height;

  .text {
    display: grid;
    gap: 1rem;
    place-items: center;
    margin-block: calc(#{$modal-content-height}/ 3);
  }
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
// media queries

@media screen and (max-width: 700px) {
  .modal {
    .modal-content {
      margin: 40% 2rem;

      .text {
        display: grid;
        gap: 1rem;
        place-items: center;
        margin-block: calc(#{$modal-content-height}/ 3);
      }
    }
  }
}
</style>
