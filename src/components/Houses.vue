<template>
  <section class="houses" id="casas">
    <h2>As Nossas Casas</h2>
    <div class="houses-grid">
      <div class="houses-box" v-for="(casa, index) in casas" :key="casa.nome">
        <router-link
          :to="{ name: 'CasasDetail', params: { id: casa.id + casa.nome } }"
        >
          <img :src="casa.imagem[0]" alt="" />
          <div class="houses-info">
            <h3>{{ casa.nome }}</h3>
            <div class="location">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAe9JREFUSEuNVlGihCAIHE726mTVyWpP5hNBQLR9b79aQxmYYYzAPwJQhgdZpDKsW1jbpL+41+L9TH495ph3LpMtw+KiJpMES2gRZns+CTgK8Gj8BdCjJSYQuYLUIvlrixuA23EMaGgNzmOsRRNe54AP5ySLvuPiyuZXwh936T8tkgSR85EABRnr9mfeFhqSyJC/lmBWWuNjl/VUh5O8PDRGn7XeY2DF3+4gPMsEuphkmvrgue960GYVaH8LsNf2PW/8OQd/KrVlUpk2EFdNJuR+kTi/SiqaojcCntDi/hiJZYVJFYupNpJtnoUcRndo6VFpKrwSE2hSuqouz8xHlimjOSrqrQ0aFSZwD9BSBW0+NN4qMF60RcPc9gMegC6gKIEWU9QTKSHdqm1sQBmrNg5kf2/LNJ1dJdWLJIFxN3HWz2jzkVVU1H/oizD4gB+IPD2Vq4BFcTdDBHZX0TixPJncotHyZERO3ezaH9GoMbZgGipQx+ySc4STx7mRTQ7hlm5tjnMg2QURI7zcBlI1c3+amoLrRoeYOn4nmX7aIHli7t4Wbkc/WHxJqlfXSV5kWrZB+0J4vMW4Ygbid4NuTFYx3Xx9AyuHf3LxEB6poJ3C/U6G57DeKkhdfiP27ctjSPBq0eOXy5zS7m2TwOKz5RdQmvMi7CPPiQAAAABJRU5ErkJggg=="
              />
              <h4>{{ casa.subnome }}</h4>
            </div>

            <div class="houses-specs">
              <ul>
                <li v-for="spec in casa.specs.slice(0, 4)" :key="spec">
                  <img :src="spec.svg" />
                  <p>{{ spec.nome }}</p>
                </li>
              </ul>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      casas: [],
    };
  },

  mounted() {
    fetch("../../../data/db.json")
      .then((res) => res.json())
      .then((data) => (this.casas = data.casas))
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
.houses {
  max-width: 100rem;
  margin-inline: auto;
  margin-block: 8rem;

  h2 {
    font-size: 4rem;
    text-transform: capitalize;
    text-align: center;
    margin-block-end: 6.5rem;
  }

  .houses-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    gap: 5rem;

    .houses-box {
      width: 25rem;
      padding-block-end: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      background-color: #fff;

      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.099);

      overflow: hidden;

      text-decoration: none;
      transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);

      a {
        text-decoration: none;
        color: #313131;
      }

      &:hover {
        transform: translateY(-1.2rem);
        box-shadow: 0 20px 20px 2px rgba(0, 0, 0, 0.307);
      }

      .houses-info {
        width: 100%;
        padding: 1.6rem;

        h3 {
          font-size: 1.8rem;
        }

        h4 {
          font-size: 0.8rem;
          opacity: 0.6;

          line-height: 2;
          padding-inline-start: 0.6rem;
        }

        .location {
          display: flex;
          align-items: center;

          img {
            width: 2rem;
            scale: 0.8;
            height: auto;
            aspect-ratio: 1/1;
            opacity: 0.6;
          }
        }
      }

      img {
        width: 100%;
      }
      .houses-specs {
        margin-block-start: 2rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          align-items: center;
          column-gap: 0.4rem;
          row-gap: 1rem;

          li {
            display: flex;
            flex-grow: 1;
            justify-content: start;
            align-items: center;
            gap: 0.5rem;

            max-height: 2.5rem;

            background-color: rgba(235, 235, 235, 0.551);
            border-radius: 15px;
            padding: 0.8rem;

            font-size: 1rem;
            transition: all 300ms;
            cursor: pointer;

            &:hover {
              background-color: rgba(194, 194, 194, 0.331);
              box-shadow: 0 10px 20px 1px rgba(159, 159, 159, 0.129);
              scale: 0.97;
            }

            &:nth-child(1) {
              width: max-content;
            }

            img {
              width: 1.5rem;
              opacity: 0.5;
            }

            p {
              font-size: 0.9rem;
              text-transform: capitalize;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}

router-link {
  text-decoration: none;
}

// media queries

@media (max-width: 700px) {
  .houses {
    margin-block: 6rem;
    h2 {
      font-size: 3rem;
      margin-block-end: 3rem;
    }
    .houses-grid {
      flex-direction: column;
      gap: 1rem;
      .houses-box {
        scale: 0.9;
      }
    }
  }
}
@media (max-width: 530px) {
  .houses {
    h2 {
      font-size: 2.4rem;
      margin-block-end: 1rem;
    }
    .houses-grid {
      gap: 0;
      .houses-box {
        scale: 0.78;
      }
    }
  }
}
@media (max-width: 420px) {
  .houses {
    h2 {
      font-size: 2.4rem;
      margin-block-end: 1rem;
    }
    .houses-grid {
      gap: 2rem;
      .houses-box {
        scale: 1;
        width: 80%;
        height: 100%;

        .houses-info {
          h3 {
            font-size: 1.4rem;
          }

          .location {
            margin-inline-start: -0.3rem;
            img {
              scale: 0.5;
            }
          }
          .houses-specs {
            display: none;
          }
        }
      }
    }
  }
}
</style>
