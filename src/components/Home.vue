<script>
export default {
  data() {
    return {
      msg: ["uma casa perfeita para si"],
      activeMsg: 0,
      transitioning: false,
      image: [
        "src/assets/Carcavelos/1.webp",
        "src/assets/SeteRios/1.webp",
        "src/assets/Carcavelos/2.webp",
        "src/assets/rooms/room3.jpeg",
      ],
      imgLength: 0,
    };
  },
  created() {
    if (window.innerWidth < 700 || window.innerWidth > 530) {
      this.imgLength = this.image.length * 100 + 20 + "%";
    } else {
      this.imgLength = this.image.length * 100 + "%";
    }
  },
};
</script>

<template>
  <main>
    <div class="main-wrapper" :style="{ backgroundImage: image[1] }">
      <div class="main-images" :style="`width: ${imgLength}`">
        <img :src="image[0]" alt="" />
        <img :src="image[1]" alt="" />
        <img :src="image[2]" alt="" />
        <img :src="image[3]" alt="" />
      </div>
      <section class="hero">
        <div class="container">
          <h1>{{ msg[activeMsg] }}</h1>
          <a href="#casas">
            <button>Saber mais</button>
          </a>
        </div>
      </section>
      <ul class="nav-bar">
        <li class="nav-link">
          <a href="#casas"> casas </a>
        </li>
        <li class="nav-link">
          <router-link :to="{ name: 'ZonaInteresse' }">
            Pontos de Interesse
          </router-link>
        </li>
        <li class="nav-link">
          <a href="#sobrenós"> sobre nós </a>
        </li>
        <li class="nav-link">
          <router-link :to="{ name: 'Contactar' }"> contactar </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  overflow-x: hidden;
  .main-wrapper {
    position: relative;
    width: 100vw;
    min-height: var(--height-main);
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    background-position: center;
    background-size: cover;
    overflow: hidden;

    .main-images {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      height: var(--height);
      display: flex;

      animation: swap 45s cubic-bezier(0.56, 0.9, 0.5, 1) infinite;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        aspect-ratio: 5/3;
      }
    }

    .hero {
      width: 100%;
      display: grid;
      place-content: center;
      z-index: 2;
      background-image: linear-gradient(
        90deg,
        #282828db 30%,
        #2828288d 80%,
        rgba(255, 0, 0, 0)
      );
      padding-block: 8rem 5rem;

      .container {
        margin-inline: 10rem auto;
        h1 {
          font-size: 5rem;
          color: #fff;
          text-transform: uppercase;
          line-height: 1.2;
          letter-spacing: 10px;
          font-weight: 400;
          width: 70%;
        }
        a {
          text-decoration: none;
          color: #ffffff;

          button {
            cursor: pointer;
            margin-block-start: 2rem;
            margin-inline-start: 1rem;
            background-color: transparent;
            min-width: 10rem;
            min-height: 4rem;
            padding: 0.6rem 1.8rem;
            border: 1px solid white;
            font-size: 1.4rem;
            transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
            color: #fff;

            &:hover {
              color: #313131;
              background-color: #fff;
            }
          }
        }
      }
    }
    .nav-bar {
      z-index: 9;
      position: absolute;
      top: 0;
      width: 100%;
      height: 5rem;
      padding: 1.2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3rem;

      border: none;
      box-shadow: none;
      transform: translate(0);
      background-color: #313131;
      transition: none;
      transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background-image: url(../assets/texture-nav.png);
        opacity: 0.35;
        z-index: -1;
      }

      &:hover {
        transform: translateX(0%);
      }

      .nav-link {
        text-align: center;

        list-style: none;
        cursor: pointer;
        transition: all 300ms;

        a {
          text-decoration: none;
          color: #ffffff;
          font-size: 1.6rem;

          text-transform: capitalize;
          transition: all 300ms cubic-bezier(0.9, 1, 0.42, 1);

          &:hover {
            text-decoration: 3px solid rgb(255, 255, 255);
            text-decoration-line: underline;
            text-underline-offset: 5px;
          }
        }
        &:hover {
          transform: translateY(-0.3rem);
        }
      }
    }

    /* .contact {
      background-color: rgba(255, 0, 0, 0.49);
      height: 100%;
      width: 100%;
    } */
  }
}

@keyframes jump {
  0%,
  100% {
    transform: translateX(0%);
  }
  50% {
    transform: translateX(10%);
  }
}
@keyframes swap {
  0%,
  25% {
    transform: translateX(0%);
  }

  28%,
  50% {
    transform: translateX(25%);
  }
  53%,
  74% {
    transform: translateX(55%);
  }
  77%,
  99% {
    transform: translateX(75%);
  }
}

/* media queries  */
@media (max-width: 1300px) {
  main {
    .main-wrapper {
      .nav-bar {
        .arrow {
          left: -35%;
        }
      }
    }
  }
}

@media (max-width: 1070px) {
  main {
    .main-wrapper {
      .hero {
        .container {
          margin-inline-start: 5rem;
          h1 {
            font-size: 3rem;
          }
        }
      }
      .nav-bar {
        .nav-link {
          a {
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}

@media (max-width: 700px) {
  main {
    .main-wrapper {
      grid-template-columns: 1fr 0.2fr;

      .nav-bar {
        height: 3rem;
        padding: 0.5rem;
        gap: 2rem;

        .nav-link {
          a {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
@media (max-width: 530px) {
  main {
    .main-wrapper {
      grid-template-columns: 1fr;
      text-align: center;
      margin-inline: auto;

      .hero {
        padding-block: 1rem;

        .container {
          margin-inline: auto;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
@media (max-width: 420px) {
  main {
    .main-wrapper {
      grid-template-columns: 1fr;
      text-align: center;
      margin-inline: auto;

      min-height: 22rem;

      .hero {
        padding-block-start: 5rem;

        .container {
          h1 {
            font-size: 1.6rem;
          }

          a {
            button {
              scale: 0.7;
              margin: 1rem 0;
              font-size: 1rem;
            }
          }
        }
      }

      .nav-bar {
        gap: 1.2rem;

        .nav-link {
          a {
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
