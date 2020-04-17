<template>
  <div class="c-app">
    <CModal
      centered
      :show.sync="validatingToken"
      size="sm"
      :backdrop="close"
      :closeOnBackdrop="close"
    >
      <Loading />
    </CModal>
    <TheSidebar />
    <CWrapper>
      <TheHeader />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter />
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./TheSidebar";
import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";

import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import Loading from "@/views/components/spinners/Loading";

export default {
  name: "TheContainer",
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    Loading
  },
  computed: mapState(["user"]),
  data: function() {
    return {
      validatingToken: true,
      close: false,
      color: "rgba(250, 179, 0, 0,6;)!important",
      footer: false
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-content{
  border: 0px;
}
.modal-header {
  border-bottom: 0px;
}
</style>
