<template>
  <form @submit.prevent="onsubmit">
    <div>
      <va-modal
        v-model="validatingAuth"
        :title=" $t('tables.loading') "        
        noOutsideDismiss
        noEscDismiss
        hideDefaultActions
        maxHeight="90vh"
        maxWidth="90%"
      >
        <Loading />
      </va-modal>
    </div>
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
import Loading from "@/components/ui/spinners/Loading";

export default {
  name: "login",
  components: { Loading },
  data() {
    return {
      validatingAuth: false,
      usernameErrors: [],
      passwordErrors: [],
      user: {},
      toastText: "",
      toastDuration: 3000,
      toastIcon: "exclamation-circle",
      toastPosition: "top-center",
      isToastFullWidth: false
    };
  },
  computed: {
    formReady() {
      return !this.usernameErrors.length && !this.passwordErrors.length;
    },
    isToastContentPresent() {
      return !!(this.toastText || this.toastIcon);
    }
  },
  methods: {
    async onsubmit() {
      this.validatingAuth = true;
      this.usernameErrors = this.user.username ? [] : ["Username is required"];
      this.passwordErrors = this.user.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }

      await axios
        .post(`${baseApiUrl}/login`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ name: "dashboard" });
        })
        .catch(error => {
          this.toastText = error.data.message;
          this.launchToast();
        });

      this.validatingAuth = false;
    },
    launchToast() {
      this.showToast(this.toastText, {
        icon: this.toastIcon,
        position: this.toastPosition,
        duration: this.toastDuration,
        fullWidth: this.isToastFullWidth
      });
    }
  }
};
</script>

<style lang="scss">
</style>
