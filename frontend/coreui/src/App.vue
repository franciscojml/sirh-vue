<template>
  <div>
    <CModal
      centered
      :show.sync="validatingToken"
      size="sm"
      :backdrop="close"
      :closeOnBackdrop="close"
      addContentClasses="loading-modal"
    >
      <LoadingGrow />
    </CModal>
    <router-view>
      <font-awesome-icon icon="user-secret" />
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import LoadingGrow from "@/views/components/spinners/LoadingGrow";

export default {
  name: "App",
  components: { LoadingGrow },
  computed: mapState(["user"]),
  data: function() {
    return {
      validatingToken: true,
      close: false
    };
  },
  methods: {
    validateToken() {
      this.validatingToken = true;

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        this.validatingToken = false;
        this.$router.push({ name: "Login" });
        return;
      }

      const res = axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        this.$store.commit("setUser", userData);
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "Login" });
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
// Import Main styles for this application
@import "assets/scss/style";

.modal-content {
  background: transparent !important; // fundo transparente
  width: 50%;
  border: none;
}

.loading-modal {
  .modal-header {
    display: none;
  }

  .modal-footer {
    display: none;
  }
}
</style>
