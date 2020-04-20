<template>
  <CContainer class="d-flex content-center min-vh-100">
    <CSpinner color="info" v-if="validatingAuth" />
    <CRow>
      <CCol>
        <CCardGroup>
          <CCard>
            <CForm>
              <CCardBody>
                <CAlert color="danger" :show.sync="alert">
                  <b>{{alertText}}</b>
                </CAlert>
                <h1>Login</h1>
                <p class="text-muted">Autenticar na sua conta</p>
                <CInput
                  v-model="user.username"
                  type="text"
                  description="Por favor entre com o seu usuário!"
                  placeholder="Informe o usuário..."
                  autocomplete="username"
                  required
                  was-validated
                >
                  <template #prepend-content>
                    <CIcon name="cil-user" />
                  </template>
                </CInput>
                <CInput
                  v-model="user.password"
                  type="password"
                  description="Por favor entre com a sua senha!"
                  autocomplete="current-password"
                  placeholder="Informe a senha..."
                  required
                  was-validated
                >
                  <template #prepend-content>
                    <CIcon name="cil-lock-locked" />
                  </template>
                </CInput>
                <CRow>
                  <CCol class="text-center">
                    <CButton color="primary" class="px-4" @click="login">Login</CButton>
                  </CCol>
                </CRow>
              </CCardBody>
            </CForm>
          </CCard>
        </CCardGroup>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import LoadingGrow from "@/views/components/spinners/LoadingGrow";

export default {
  name: "Login",
  components: { LoadingGrow },
  data: function() {
    return {
      alert: false,
      validatingAuth: false,
      alertText: "",
      user: {}
    };
  },
  methods: {
    login() {
      this.validatingAuth = true;

      axios
        .post(`${baseApiUrl}/login`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ name: "Dashboard" });
        })
        .catch(error => {
          this.alertText = error.data.message;
          this.alertMessage();
        });

      this.validatingAuth = false;
    },
    alertMessage() {
      this.alert = true;
      const timeout = setTimeout(() => {
        this.alert = false;
      }, 1500);
    }
  }
};
</script>
