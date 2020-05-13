<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-form-title" style="background-image: url(/login/images/bg-01.jpg);">
          <span class="login100-form-title-1">Sign In</span>
        </div>

        <form class="login100-form validate-form">
          <div class="wrap-input100 validate-input m-b-26" data-validate="Username is required">
            <span class="label-input100">Username</span>
            <input class="input100" type="text" name="username" placeholder="Enter username" />
            <span class="focus-input100"></span>
          </div>

          <div class="wrap-input100 validate-input m-b-18" data-validate="Password is required">
            <span class="label-input100">Password</span>
            <input class="input100" type="password" name="pass" placeholder="Enter password" />
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
            <button class="login100-form-btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  data() {
    return {
      selectedTabIndex: 0,
      tabTitles: ["login"]
    };
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
