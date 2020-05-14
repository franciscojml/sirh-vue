<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(/login/images/bg-01.jpg);">
          <span class="login100-form-title-1">Sign In</span>
        </div>
        <form @submit.prevent="onsubmit" class="login100-form">
          <div>
            <va-modal
              v-model="validatingAuth"
              :title=" $t('tables.loading') "
              noOutsideDismiss
              noEscDismiss
              hideDefaultActions
              size="small"
            >
              <Loading />
            </va-modal>
          </div>
          <div class="wrap-input100 m-b-26">
            <span class="label-input100">{{$t('auth.username')}}</span>
            <va-input
              v-model="user.username"
              type="text"
              :error="!!usernameErrors.length"
              :error-messages="usernameErrors"
              class="input100"
              placeholder="Enter username"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="wrap-input100 m-b-18">
            <span class="label-input100">{{$t('auth.password')}}</span>
            <va-input
              v-model="user.password"
              type="password"
              :error="!!passwordErrors.length"
              :error-messages="passwordErrors"
              class="input100"
              placeholder="Enter password"
            />
            <span class="focus-input100"></span>
          </div>
          <div class="flex-sb-m w-full p-b-30">
            <div class="contact100-form-checkbox">
              <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
              <label class="label-checkbox100" for="ckb1">Remember me</label>
            </div>

            <div>
              <a href="#" class="txt1">Forgot Password?</a>
            </div>
          </div>

          <div class="container-login100-form-btn">
            <va-button type="submit" class="login100-form-btn">{{ $t('auth.login') }}</va-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, userKey } from "@/global";
import axios from "axios";
import Loading from "@/components/ui/spinners/Loading";

export default {
  name: "AuthLayout",
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
      this.usernameErrors = this.user.username ? [] : ["Username is required"];
      this.passwordErrors = this.user.password ? [] : ["Password is required"];
      if (!this.formReady) {
        return;
      }
      this.validatingAuth = true;
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
@import "/login/vendor/bootstrap/css/bootstrap.min.css";
@import "/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
@import "/login/fonts/Linearicons-Free-v1.0.0/icon-font.min.css";
@import "/login/vendor/animate/animate.css";
@import "/login/vendor/css-hamburgers/hamburgers.min.css";
@import "/login/vendor/animsition/css/animsition.min.css";
@import "/login/vendor/select2/select2.min.css";
@import "/login/vendor/daterangepicker/daterangepicker.css";
@import "/login/css/util.css";
@import "/login/css/main.css";
</style>
