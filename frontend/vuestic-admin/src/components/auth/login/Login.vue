<template>
  <form @submit.prevent="onsubmit">
    <va-input
      v-model="user.username"
      type="text"
      :label="$t('auth.username')"
      :error="!!usernameErrors.length"
      :error-messages="usernameErrors"
    />

    <va-input
      v-model="user.password"
      type="password"
      :label="$t('auth.password')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />

    <div class="d-flex justify--center mt-3">
      <va-button type="submit" class="my-0">{{ $t('auth.login') }}</va-button>
    </div>
  </form>
</template>

<script>
import { baseApiUrl, userKey } from "@/global";
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      keepLoggedIn: false,
      usernameErrors: [],
      passwordErrors: [],
      user: {}
    };
  },
  computed: {
    formReady() {
      return !this.usernameErrors.length && !this.passwordErrors.length;
    }
  },
  methods: {
    onsubmit() {
      this.usernameErrors = this.user.username ? [] : ["Username is required"];
      this.passwordErrors = this.user.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }
      //this.$router.push({ name: "dashboard" });
      console.log("login");
      axios
        .post(`${baseApiUrl}/login`, this.user)
        .then(res => {
          console.log("entrou:" + JSON.stringify(res.data));
          this.$store.commit("setUser", res.data);
          console.log("store commit");
          localStorage.setItem(userKey, JSON.stringify(res.data));
          console.log("localStorage");
          this.$router.push({ name: "dashboard" });
          console.log("dash");
        })
        .catch(error => {
          console.log('error: ' + error);
        });
    }
  }
};
</script>

<style lang="scss">
</style>
