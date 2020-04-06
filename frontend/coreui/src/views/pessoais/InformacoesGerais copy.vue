<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CTableWrapper
          :items="informacoesGerais"
          :fields="fields"
          hover
          striped
          bordered
          small
          fixed
          caption="Tabela de Informações Gerais"
          pagination
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
import CTableWrapper from "./InformacoesGeraisDetalhe.vue";
import usersData from "../users/UsersData";

export default {
  name: "InformacoesGerais",
  components: { CTableWrapper },
  data: function() {
    return {
      informacoesGerais: null,
      page: 1,
      limit: 0,
      count: 0
    };
  },
  methods: {},
  mounted() {
    const url = `${baseApiUrl}/api/dadoscadastrais?page=${this.page}`;
    axios.get(url).then(res => (this.informacoesGerais = res.data.data));
  }
};
</script>
