<template>
  <div v-if="casa" class="main">
    <router-link class="voltar" to="/">Página Principal</router-link>
    <div class="casa-detail">
      <div class="info">
        <h1>HU2i - {{ casa.nome }}</h1>
        <h3>{{ casa.subnome }}</h3>
        <div class="more-info">
          <h2>Sobre este Espaço</h2>
          <div v-if="Array.isArray(casa.descrição)">
            <p v-for="descricao in casa.descrição" :key="descricao">
              {{ descricao }}
              <br />
            </p>
          </div>
          <div v-else>
            <p>{{ casa.descrição }}</p>
          </div>
        </div>

        <div class="houses-specs">
          <ul>
            <li v-for="(spec, index) in casa.specs" :key="spec">
              <img :src="spec.svg" />
              <p>{{ spec.nome }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="gallery-main">
        <button class="click click-back" @click="previousImage(casa)">
          <img
            class="arrow arrow-back"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXJJREFUSEuNllG2wyAIRIed6c7yVmZ25tNqFGE06UdPT1QGmCupoH4EQF5+6Ie/LXNVAMl9v3mO3EO1PXVbDb3RMIFGEkNvJNGW9HdbehHQgUwSOrSpxp5qFYxkffm6PzTW7kiveLTokGOzx3y8bdwbI7CLQhRW53YbusnGQOrnylUAcDsNQuP3CqZqgiAUbP6KedfkR3s5C/KYego1MykDoQjcyIiMb119/V2deW4ZTUGtptKWpzXRUE896AKeH8JMAnIQ4M6QuFzjrb0zrroHpj8N/CVzd/NfwDMtoulQAX8BOXuUInKJEiQHybVFiC+2DS/7LDpTr8zslcgN5EbQosTN+NIifTIBEorh9ZJ1EbVMcm0CfXb/Ri6d9Uu+jyexiNVqjhx5D3YdWwG7StxrJYqPVSowiqBnPnv2uPRx0hkudSe95MzsI6aGGV3Zy+j1FNEDdoStxg6UySvPU3R+fxn2D38Mek6vFOnsdu/kE6n/Oiu6H7WPJtAAAAAASUVORK5CYII="
          />
        </button>
        <div class="gallery">
          <div class="big-image">
            <img
              class="image"
              :src="'../' + casa.imagem[0]"
              :alt="casa.imagem[0]"
              @click="handleImageClick(0)"
            />
          </div>
          <div class="small-images">
            <img
              class="image"
              v-for="(image, index) in casa.imagem.slice(1)"
              :src="'../' + image"
              :key="index"
              :alt="image"
              @click="handleImageClick(index + 1)"
            />
          </div>
        </div>
        <button class="click click-next" @click="nextImage(casa)">
          <img
            class="arrow next"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWZJREFUSEuVVV0agyAMS2+GJ5s3g5t1MBT7B7g97FNsKU2TQFj9CAA/AeOVAOLrk4kZ0VdM+wzITLmjjB7rckfzHFTtBWQNewTRgYycHdwCYgq8TRPbbBpqSAmg+/PsP+xAziOANIRo28c2QBNjwiNHobPO+fx1PIZpUoPCHaIwQUGXAM4EFAYOi2pPj4cxIPJcch1kMBKAglYk4l6gm0UHIXK5FkggFPBdRMdZlLY09YxCrgVS7aYAdCipGz21XKPkpXFIlHsnFi7ia5x9rm02nqYz4WiFB/PwjHoKbDdVycHpI4PovDIsCk1JLmaAGmUFk9a24QvMHJQ4EyMxqAB8rA3mlZJV22c1qU8XGh33AH8gLC4GxSKvRseoizWSuB29mXPc14AImrmY2XTNZiXycAbvzTKQYeB/mgZSLPKaXBiiP9Cz4pU8MP23j/hu31rF7HTr8rYDw/2BrITFED9knWFUS/kCgh+xIpOf0U8AAAAASUVORK5CYII="
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  props: ["casa"],
  data() {
    return {
      showBigImage: false,
      bigImageIndex: null,
    };
  },

  methods: {
    handleImageClick(index) {
      if (this.casa && this.casa.imagem) {
        const clickedImage = this.casa.imagem[index];
        this.casa.imagem.splice(index, 1);
        this.casa.imagem.unshift(clickedImage);
      }
    },
    previousImage(casa) {
      const lastImage = casa.imagem.pop();
      casa.imagem.unshift(lastImage);
    },
    nextImage(casa) {
      const firstImage = casa.imagem.shift();
      casa.imagem.push(firstImage);
    },
  },

  components: {
    gallery: VueGallery,
  },

  setup() {
    const casa = ref(null);
    const route = useRoute();

    onMounted(async () => {
      try {
        const response = await fetch("../../data/db.json");

        if (!response.ok) {
          throw new Error("Failed to fetch casa data");
        }

        const data = await response.json();

        // Check if data has 'casas' array
        if (!Array.isArray(data.casas)) {
          throw new Error("Data is not in the expected format");
        }

        // Find the casa object with the matching ID
        const casaData = data.casas.find(
          (casa) => casa.id === parseInt(route.params.id)
        );
        if (!casaData) {
          throw new Error("Casa not found");
        }

        casa.value = casaData;
      } catch (error) {
        console.error("Error fetching casa data:", error);
      }
    });

    return {
      casa,
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery-main {
  display: grid;
  place-items: center;
  position: relative;
  .click {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9999;

    padding: 0.5rem;
    background: #fff;
    border: none;
    border-radius: 50%;
    appearance: none;
    display: grid;
    place-items: center;

    cursor: pointer;
    overflow: hidden;
    transition: all 300ms, backgroundColor 300ms;

    &:hover {
      background-color: rgb(239, 239, 239);
      box-shadow: 0 0 10px 5px rgb(239, 239, 239);
    }

    .arrow {
      width: 2.3rem;
    }
  }
  .click-back {
    left: 1%;
  }
  .click-next {
    right: 1%;
  }

  .gallery {
    width: 100%;
    max-height: 70rem;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    border-radius: 13px;

    border: 2px solid #ffffff;
    box-shadow: 0 0 20px 4px #0000001b;
    background-color: #ffffff;
    transition: all 1s;
    // background-color: #313131;

    .big-image {
      .image {
        border-bottom: 1px solid #ffffff;
        aspect-ratio: 5/3;

        &:hover {
          filter: brightness(0.8) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.288));
        }
      }
    }

    .small-images {
      margin-block-start: -0.11rem;
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      height: 10rem;
      // gap: 1rem;

      .image {
        aspect-ratio: 5/3;
        border-left: 2px solid #313131;

        &:hover {
          filter: brightness(0.5) drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.647));
        }
      }
    }

    .image {
      width: 100%;
      object-fit: cover;
      object-position: center;
      transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);

      &:hover {
        cursor: pointer;
      }
    }
  }
}
.main {
  max-width: 120rem;
  min-height: 100svh;
  margin-inline: auto;
  position: relative;
  padding-inline: 2rem;

  .voltar {
    padding: 1.2rem;
    position: absolute;
    top: -2%;
    right: 50%;
    transform: translateX(50%);
    transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);

    text-align: end;

    margin-block: 2rem;
    text-underline-offset: 10px;

    color: #313131;
    font-size: 1.6rem;

    &:hover {
      color: #535353;

      text-underline-offset: 5px;
      text-decoration-color: #535353;
    }
  }

  .casa-detail {
    padding-block: 8rem;

    display: grid;
    column-gap: 3rem;
    grid-template-columns: 0.8fr 1fr;
    height: 100%;

    .info {
      padding: 2rem;
      width: 100%;

      h1 {
        font-size: 4rem;
        text-decoration: 2px underline;
        text-decoration-color: #000000;
        text-underline-offset: 5px;
        color: #313131;
      }
      h3 {
        font-size: 1.2rem;
        font-weight: 300;

        margin-block-end: 2rem;
      }

      .more-info {
        padding: 2rem 0;

        h2 {
          font-size: 2rem;
          color: #474747;
          margin-block-end: 1.2rem;
        }
        p {
          font-size: 1.4rem;
          line-height: 1.7;
          text-align: justify;
          width: 80%;
        }
      }
      .houses-specs {
        margin-block-start: 2rem;
        padding: 1.2rem 0 0.2rem;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        background-color: rgba(255, 255, 255, 0.261);

        backdrop-filter: blur(10px);
        border-radius: 13px;
        overflow: hidden;

        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          grid-template-columns: repeat(3, 200px);
          justify-content: center;
          align-items: center;
          column-gap: 0.4rem;
          row-gap: 1rem;

          padding: 0.8rem;

          li {
            display: flex;
            // flex-grow: 1;

            align-items: center;
            gap: 0.5rem;

            max-height: 2.5rem;
            min-width: 11rem;

            border-radius: 15px;
            padding: 0.8rem;

            font-size: 1.2rem;
            transition: all 300ms;
            cursor: pointer;

            &:hover {
              background-color: rgba(194, 194, 194, 0.135);
              box-shadow: 0 10px 20px 1px rgba(159, 159, 159, 0.081);
              scale: 0.97;
            }

            img {
              width: 2rem;
              opacity: 0.5;
            }

            p {
              font-size: 1rem;
              text-transform: capitalize;
              font-weight: 500;
            }
          }
        }

        a {
          font-size: 1rem;

          text-decoration: none;

          color: #313131;

          width: 100%;
          height: 2rem;
          padding-block: 0.4rem;
          text-align: center;
          transition: all 1s;

          &:hover {
            text-decoration: 1px underline #313131;
            text-underline-offset: 2px;
          }
        }
      }
    }
  }
}

// media queries
@media (max-width: 1300px) {
  .main {
    .voltar {
      top: 0;
    }
    .casa-detail {
      grid-template-columns: 1fr;
      grid-template-rows: 0.8fr auto;
      place-items: center;

      width: 75%;
      margin-inline: auto;

      .info {
        text-align: center;

        .more-info {
          text-align: center;

          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
              text-align: center;
            }
          }
        }
        .houses-specs {
          margin-block-end: 4rem;
          ul {
            li {
              align-items: center;
              justify-content: center;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .main {
    .voltar {
      font-size: 1rem;
      margin-block: 1rem;
    }
    .casa-detail {
      gap: 1rem;
      padding-block: 6rem;
      width: 100%;

      .info {
        h1 {
          font-size: 2.2rem;
        }
        h3 {
          font-size: 1rem;

          margin-block: 0.5rem 1rem;
        }
        .more-info {
          h2 {
            font-size: 1.4rem;
          }
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            p {
              font-size: 1rem;
            }
          }
        }
        .houses-specs {
          margin-block-start: 0;
          gap: 1rem;

          ul {
            li {
              padding: 0.3rem;

              img {
                width: 1.2rem;
              }

              p {
                font-size: 0.8rem;
              }
            }
          }
        }
      }

      .gallery-main {
        .click {
          scale: 0.8;
        }

        .click-back {
          left: -3%;
        }
        .click-next {
          right: -3%;
        }

        // .gallery {
        //   width: 85%;
        //   margin-inline: auto;
        //   height: 40rem;
        //   align-self: flex-start;
        // }
      }
    }
  }
}
@media (max-width: 530px) {
  .main {
    padding: 1rem;
    .casa-detail {
      gap: 1rem;
      padding-block: 6rem;

      .info {
        padding: 1rem;
      }

      .gallery-main {
        .gallery {
          .big-image {
            .image {
              border-bottom: none;
            }
          }

          .small-images {
            height: 7rem;
          }
        }
        .click {
          top: 50%;
          transform: translateY(-65%);
        }
        .click-back {
          left: -1%;
        }
        .click-next {
          right: -1%;
        }
      }
    }
  }
}

@media (max-width: 420px) {
  .main {
    .casa-detail {
      .info {
        .houses-specs {
          ul {
            row-gap: 0.5rem;
            li {
              min-width: auto;
            }
          }
        }
      }
      .gallery-main {
        width: 100%;

        .click {
          transform: translateY(-100%);
          scale: 0.6;
        }
        .click-back {
          left: -2%;
        }
        .click-next {
          right: -2%;
        }
      }
    }
  }
}
</style>
