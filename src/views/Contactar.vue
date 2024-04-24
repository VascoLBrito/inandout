<template>
  <main>
    <router-link class="voltar" to="/inandout/">Página Principal</router-link>
    <form @submit.prevent="sendEmail" ref="emailForm">
      <h1>Deixa nos uma mensagem !</h1>
      <div class="form-box">
        <label>Name</label>
        <input type="text" v-model="name" name="from_name" required />
      </div>
      <div class="form-box">
        <label>Email</label>
        <input type="email" v-model="email" name="email_id" required />
      </div>
      <div class="form-box">
        <label>Telemovel</label>
        <input type="number" v-model="phone" name="phone_n" />
      </div>
      <div class="form-box">
        <label>Message</label>
        <textarea name="message" v-model="message" required></textarea>
      </div>
      <button>
        <input type="submit" value="Send" />
      </button>
    </form>
    <modal v-if="showModal" @close="showModal = false" />
  </main>
</template>
<script>
import emailjs from "@emailjs/browser";
import modal from "../components/modal.vue";

export default {
  data() {
    return {
      showModal: false,
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  components: {
    modal,
  },
  methods: {
    sendEmail() {
      const form = this.$refs.emailForm;
      emailjs
        .sendForm(
          "service_7ttqz8d",
          "template_a5r80c7",
          form,
          "VioJb7yUhHjBL02jh",
          console.log(form)
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.showModal = true;
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );

      setTimeout(() => {
        (this.name = ""),
          (this.email = ""),
          (this.phone = ""),
          (this.message = "");
      }, 2500);
    },
  },
};
</script>
<style lang="scss" scoped>
main {
  position: relative;
  min-height: 60svh;

  .voltar {
    padding: 1.2rem;
    position: absolute;
    top: -25%;
    right: 50%;
    transform: translateX(50%);
    transition: all 400ms cubic-bezier(0.165, 0.84, 0.44, 1);

    text-align: center;
    width: max-content;

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
}

form {
  margin-block: 8rem;
  padding: 2rem 3.2rem;

  width: 50rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  border: #8a8a8a8d solid thin;
  background-color: rgba(255, 255, 255, 0.23);
  box-shadow: 0 0 40px 10px rgba(119, 119, 119, 0.212);

  h1 {
    text-align: center;
    text-transform: capitalize;
    font-size: 2.2rem;
    font-weight: 300;
    padding-block-end: 0.5rem;
    border-bottom: #4949498d solid thin;
  }
  .form-box {
    display: grid;
    grid-template-columns: 50px 1fr;
    align-items: center;
    gap: 5rem;

    width: 100%;
    margin-inline: auto;

    label {
      font-size: 1.2rem;
    }

    input,
    textarea {
      background-color: #fff;
      padding: 1rem;
      border: none;
      width: 100%;
      color: #313131;
      font-size: 1rem;
    }
  }

  button {
    border: none;
    cursor: pointer;

    input {
      border: none;
      padding: 1rem 2rem;
      width: 15rem;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
}

// media queries
@media screen and (max-width: 900px) {
  main {
    .voltar {
      font-size: 1.4rem;
    }
    form {
      width: 80%;

      h1 {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 300;
      }
    }
  }
}
@media screen and (max-width: 530px) {
  main {
    .voltar {
      font-size: 1.2rem;
    }
    form {
      width: 80%;

      .form-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      h1 {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 300;
      }
    }

    button {
      input {
        width: 100%;
        font-size: 1.2rem;
        background-color: #313131b2;
        color: #fff;
      }
    }
  }
}
</style>
