<template>
  <main>
    <h1>Pontos de Interesse</h1>

    <div class="pontosdeinteresse">
      <div class="ponto">
        <div class="info">
          <div class="title">
            <h2>Passeio ao Mar</h2>
            <h3>Carcavelos, Lisboa</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas
            commodi, odit ipsum facere temporibus debitis eum, deleniti
            perferendis recusandae esse? Possimus nostrum eaque ratione aut,
            error natus molestias quam excepturi tempora ab exercitationem
            voluptatem, nisi eos fuga sed asperiores? Consequuntur, fuga qui
            vitae sunt expedita facilis! Architecto soluta earum beatae qui vel
            debitis nobis facilis veniam dolorem? Ipsa aut facere iusto, sunt
            accusamus consequuntur nobis nihil. Officiis, iste mollitia sint
            reprehenderit sed fugit magnam blanditiis id quas sunt voluptatum a
            quod nam obcaecati. Maxime eveniet consequuntur praesentium cum
            optio similique magnam molestias accusantium, odit ex itaque dolorem
            dolor dicta expedita non eligendi distinctio quas. Veniam mollitia,
            incidunt, vero blanditiis hic quia quod eveniet deleniti eligendi
            cum error. Voluptatem deserunt debitis natus ex numquam, ullam
            soluta consequuntur quisquam.
          </p>
        </div>
        <img src="../assets/rota1.jpeg" alt="" />
      </div>
      <div class="ponto">
        <div class="info">
          <div class="title">
            <h2>Transfere de Grupos</h2>
            <h3>Sete Rios, Lisboa</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptas
            commodi, odit ipsum facere temporibus debitis eum, deleniti
            perferendis recusandae esse? Possimus nostrum eaque ratione aut,
            error natus molestias quam excepturi tempora ab exercitationem
            voluptatem, nisi eos fuga sed asperiores? Consequuntur, fuga qui
            vitae sunt expedita facilis! Architecto soluta earum beatae qui vel
            debitis nobis facilis veniam dolorem? Ipsa aut facere iusto, sunt
            accusamus consequuntur nobis nihil. Officiis, iste mollitia sint
            reprehenderit sed fugit magnam blanditiis id quas sunt voluptatum a
            quod nam obcaecati. Maxime eveniet consequuntur praesentium cum
            optio similique magnam molestias accusantium, odit ex itaque dolorem
            dolor dicta expedita non eligendi distinctio quas. Veniam mollitia,
            incidunt, vero blanditiis hic quia quod eveniet deleniti eligendi
            cum error. Voluptatem deserunt debitis natus ex numquam, ullam
            soluta consequuntur quisquam.
          </p>
        </div>
        <img src="../assets/rota1.jpeg" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
main {
  max-width: 100rem;
  margin-inline: auto;
  margin-block: 10rem;

  h1 {
    text-align: center;
    font-size: 3.6rem;
    margin-block-end: 4rem;
  }

  .pontosdeinteresse {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    .ponto {
      display: grid;
      grid-template-columns: 1fr 0.6fr;
      justify-content: center;
      align-items: center;
      gap: 4rem;
      .info {
        padding: 2.4rem;
        display: flex;
        flex-direction: column;

        .title {
          display: flex;
          justify-content: space-between;
          align-items: end;
          padding-bottom: 0.5rem;

          h2 {
            text-transform: capitalize;
            font-size: 2rem;
          }

          h3 {
            opacity: 0.7;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        }

        p {
          text-align: justify;
          line-height: 1.6;
          font-size: 1.2rem;
          border-top: 3px solid #31313154;
          padding-top: 2rem;
        }
      }

      img {
        width: 100%;

        border-radius: 15px;
        box-shadow: 0 0 18px 6px rgba(0, 0, 0, 0.115);
      }
    }
  }
}
</style>
