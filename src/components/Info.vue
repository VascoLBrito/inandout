<template>
  <main>
    <section class="info" id="sobrenós">
      <h1>Mais Informações</h1>
      <div class="grid">
        <div class="info-grid">
          <div class="info-box" v-for="(msg, index) in info" :key="msg">
            <h3>{{ msg.title }}</h3>
            <p>{{ msg.msg }}</p>
          </div>
          <div class="more-info">
            <div class="info-container">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZpJREFUSEuNVlsSwyAIXG6WnCzNyeLNrPggiGCbj3aaUXAfrCWAAGTsn3WNu8t5ya9qD8p+m32h3425dFT9KNAuAPw9ztGwSt22tx1O6qSy4gYh8eKGwH+esujQ7LW6umiIPoFw+g0iSSKg7/oZMYF6g988xiANmkbn0zkkrtw0aDwchdALlCda1uJC1NCDub7Lfuaen2HJpcEzBHW53ohFQMrAaRsMPwyH5CrgqqqU3sgjehKQO4RqIG1Td9r2YzgpPxwpFL0IWpXuWoXD9bvh6u3BvuGZsAhkgyD431fTygiBLDIUabf8lSUVQWciAbmKrm0qFGkSjClNZuif7MpK71MKiW11VLQGUepJBIWyu7FjGuyTdfWrbiYIpvCXuEauI350mA2sfOrGGqVOUDq9wDdRMcfzlMxGGMVkKkXuzFFheodx3c8+gn4oeZcNnyUx9sPf7wNfN3W30F3gv8VdL0x6SOQIRXpou0rcYIIfXd1mYhyR3aSkD586mgPt5vVwLxrXu9P4BP851kh3j+LfyetSQ/omYq0SX7qz0BzqOLrDAAAAAElFTkSuQmCC"
              />
              <p>Idiomas Falados: Portugês, Inglês, Espanhol</p>
            </div>
            <div class="info-container">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAdVJREFUSEuVVglywzAIXH5mv8zpy+yfUSMQ4rA7qaeTyTgI2GUXlSAPAcQAp+8EeaOfXz4PwfLq5ekF/HxpyDsrrUi8Fognc9BGwMHAVqHEZr0V4usG/QPgml3/gWAUPsHYZgcvSReHGiDJ91ygIAiJJv2tkU73eNPiHxEE9tkS5bjHYQzEbGIZ8WsGcQxx5AS2kcwC3qHVqB1bQ3SPThUoengRokKOCOSUSZm0Uxp/lmsgMEWNAhNFk2lgoEEefUXTZNUZIkWwCryDqBR1z2RpfYFgHThB2AzyBbBLL7CaZ9BnZkbrfZ23WcRcl7GxmXmSvst2kSxryDYeH3JAqslBsWt7JyaiPTkrL7E1s6UOHZrFhUTYywo5CdjutTGc+jK2J6N56OeGeBhbqvsoGP2BTdZzHYSEXdZVpl7A8mZOVexsC9wKuAnkS/ABaKL3FRCdaaTl3aIBhYKwVByhYa87xgusM3mNa7PTPSLI8sRlRzSHWldF5dSQ+jDmDMSq5b6LBZb8C0WF0+4PLUBsCJqWXlbFSjSv5UT2vJnzVlh3+ANdgyJptxiNPiA+Eo7A9SMtffHJlSmKdKWHdR1N103QzZVM2gmN90Hvzjv41z8vYdUPDn8Bzt/6Hgag4skAAAAASUVORK5CYII="
              />
              <p>Empresa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      info: [{ title: "Anfitrião", msg: "Frederico" }],
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: rgba(255, 255, 255, 0.666);
  min-height: 50svh;
  padding-block: 2rem;
}

.info {
  margin-block: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  max-width: 100rem;
  margin-inline: auto;

  h1 {
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;

    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      justify-self: center;

      .info-box {
        padding: 2rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        background-color: #ffffff4d;
        border: 2px solid #313131;
        width: 50%;
        margin-inline: auto;
        border-radius: 25px;

        color: #313131;

        h3 {
          font-size: 2rem;
          text-decoration: 1px underline rgba(253, 253, 253, 0.463);
          text-underline-offset: 5px;
        }
        p {
          font-size: 1.4rem;
        }
      }
      .more-info {
        display: flex;
        flex-direction: column;

        gap: 1rem;
        padding: 1.4rem;

        .info-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.4rem 1rem;

          img {
            width: 2rem;
          }

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

// media queries
@media (max-width: 700px) {
  .info {
    h1 {
      font-size: 3rem;
      margin-block-end: 3rem;
    }

    .grid {
      .info-grid {
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
      }
    }
  }
}
@media (max-width: 420px) {
  .info {
    gap: 1rem;
    h1 {
      font-size: 2rem;
      width: fit-content;
      text-align: center;
      margin-block-end: 1.4rem;
      padding-inline: 0.4rem;
    }

    .grid {
      .info-grid {
        padding: 1rem;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr;
        gap: 1rem;

        .info-box {
          scale: 0.9;
          padding: 1rem;
          width: 100%;
          justify-content: center;
        }

        .more-info {
          width: 100%;
          padding: 1rem;
          color: #000;
          .info-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.3rem;

            p {
              text-align: center;
              font-size: 0.8rem;
              line-height: 1.4;
            }
          }
        }
      }
    }
  }
}
</style>
