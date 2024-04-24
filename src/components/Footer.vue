<template>
  <div class="footer">
    <div class="footer-wrap">
      <router-link to="/inandout/">
        <img class="logo" src="../assets/LOGOTIPO.svg" />
      </router-link>
      <div class="footer-wrap2">
        <div class="footer-info">
          <p>Carcavelos, Portugal</p>
          <p>(+351) xxx xxx xxx</p>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        Copyrigh © {{ new Date().getFullYear() }} | Todos os direitos
        reservados. Feito por
        <a href="http://www.vascobrito-dev.pt" target="_blank">Vasco Dev</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 2;
  min-height: 15rem;
  display: grid;
  place-items: center;
  padding-block: 3rem 1.5rem;
  margin-inline: auto;

  background-color: #313131;

  color: #fff;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(../assets/texture-nav.png);
    opacity: 0.35;
    z-index: -1;
  }

  .footer-wrap {
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 2rem;
    padding-inline: 10rem;

    .logo {
      width: 10rem;
      margin-inline: 1rem auto;
    }
    .footer-wrap2 {
      display: flex;

      justify-content: center;
      align-items: center;
      padding: 1.2rem;

      .footer-info {
        width: fit-content;
        margin-inline: 5rem;
        font-size: 1.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }

      p {
        font-size: 1.2rem;
        width: max-content;
        color: #fff;
      }

      .footer-links {
        display: flex;
        flex-direction: column;
        width: 40%;
        gap: 1rem;

        a {
          font-size: 1.2rem;
          text-decoration: none;
          color: #fff;
          transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

          &:hover {
            color: #949494;
          }
        }
      }
    }
  }

  .copyright {
    gap: 0.5rem;
    p {
      font-size: 1rem;
      position: relative;
    }

    a {
      text-decoration: none;
      color: #949494;
      transition: all 1s;
    }
  }
}
// media queries

@media (max-width: 1070px) {
  .footer {
    .footer-wrap {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      padding-inline: 2rem;

      .logo {
        margin-inline: auto;
      }

      .footer-wrap2 {
        & > * {
          padding: 1.2rem;
        }
        .footer-info,
        .footer-links {
          margin-inline: 0;
          width: max-content;
        }
      }
    }
  }
}
@media (max-width: 700px) {
  .footer {
    .footer-wrap {
      padding: 0.5rem 1rem;
      .footer-wrap2 {
        .footer-info p,
        .footer-links a {
          font-size: 0.8rem;
        }
      }
    }
    .copyright {
      text-align: center;
      width: 50%;
      margin-inline: auto;
      p {
        font-size: 0.8rem;
        line-height: 1.4;
        text-align: center;
      }
    }
  }
}
@media (max-width: 420px) {
  .footer {
    .footer-wrap {
      gap: 0.5rem;
      .logo {
        width: 6rem;
      }
      .footer-wrap2 {
        flex-direction: column;
        padding: 0.6rem;
      }
    }
  }
}
</style>
