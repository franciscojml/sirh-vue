<template>
  <div id="app" class="app">
    <router-view />
    <Loading v-if="validatingToken" />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import Loading from "@/components/ui/spinners/Loading";

export default {
  name: "app",
  components: { Loading },
  computed: mapState(["user"]),
  data() {
    return {
      // Temporary config for 2.1.
      contextConfig: {
        gradient: true,
        shadow: "lg", // 3 states: 'sm', 'lg', undefined (no shadow).
        invertedColor: false,
        validatingToken: true
      }
    };
  },
  provide() {
    return {
      contextConfig: this.contextConfig
    };
  },
  watch: {
    // Temporary colors fix for 2.1.
    "contextConfig.invertedColor"(val) {
      const invertedColorClass = "va-inverted-color";
      if (val) {
        document.body.classList.add(invertedColorClass);
      } else {
        document.body.classList.remove(invertedColorClass);
      }
    }
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "login" });
        return;
      }

      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "login" });
      }

      this.validatingToken = false;
    }
  },
  created() {
    this.validateToken();
  }
};
</script>

<style lang="scss">
@import "../sass/main.scss";

body {
  height: 100%;

  #app {
    height: 100%;
  }
}
</style>
