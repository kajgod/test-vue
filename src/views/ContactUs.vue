<template>
  <article class="contact-us">
    <h1>Contact us</h1>
    <p v-if="response.length > 0" class="correct">{{ response }}</p>
    <div v-if="errors.length > 0" class="errors">
      <p>Message wasn't sent. Please notice:</p>
      <ul>
        <li v-for="error in errors" :key="error">
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="form">
      <form @submit.prevent="submit">
        <label for="contact-us-email" :class="{ ok: isValidEmail }"
          >E-mail:</label
        >
        <input
          type="text"
          id="contact-us-email"
          placeholder="name@domain.com"
          v-model="email"
        />
        <div class="small" v-if="!isValidEmail">
          Please, enter a valid e-mail address.
        </div>
        <label for="contact-us-message" :class="{ ok: isValidText }"
          >Message:</label
        >
        <textarea
          class="message-text"
          placeholder="A text message"
          v-model="text"
        ></textarea>
        <div class="small">
          You have entered {{ textLength }} characters <span class="no-newline">(>30 required)</span>.
        </div>
        <input
          type="checkbox"
          id="contact-us-do-not-validate"
          v-model="doNotValidate"
          class="checkbox"
        />
        <label for="contact-us-do-not-validate" class="checkbox-label"
          ><span>Submit regardless of validation.</span></label
        >
        <button type="submit" :class="{ active: isValidAll }" class="btn">
          Submit
        </button>
      </form>
    </div>
  </article>
</template>

<script>
import {
  textLength,
  validateEmail,
  validateText,
} from "../../shared/validation";
import api from "../api/model";
const { submitForm } = api;

export default {
  data: function () {
    return {
      text: "",
      email: "",
      doNotValidate: false,
      response: "",
      errors: [],
    };
  },
  computed: {
    textLength: function () {
      return textLength(this.text);
    },
    isValidEmail: function () {
      return validateEmail(this.email);
    },
    isValidText: function () {
      return validateText(this.text);
    },
    isValidAll: function () {
      if (this.doNotValidate) return true;
      return this.isValidText && this.isValidEmail;
    },
  },
  methods: {
    submit() {
      if (!this.isValidAll) return;
      const load = {
        email: this.email,
        text: this.text,
      };
      submitForm(load).then((ret) => {
        if (ret.errors) {
          this.errors = ret.errors;
          this.response = "";
          return;
        }
        if (ret.message) {
          this.response = ret.message;
          this.errors = [];
          this.text = "";
          this.email = "";
          return;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/contactus.scss";
</style>