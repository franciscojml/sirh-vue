<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard class="p-5">
          <CCardHeader>Pesquisa de Informações Gerais</CCardHeader>
          <CCardBody>
            <CDataTable
              :items="loadedItems"
              :fields="fields"
              :table-filter="{ external: true, lazy: true, placeholder: 'Nome, matrícula ou CPF', label: 'Filtro:' }"
              :table-filter-value.sync="tableFilterValue"
              :items-per-page="parseInt(perPage)"
              :active-page="1"
              :loading="loading"
              :items-per-page-select="{external:true, values: perPageOptions, label: 'Itens por página'}"
              responsive
              hover
              striped
            />
            <CRow alignVertical="center" alignHorizontal="center">
              <CCol col="12" sm="6" lg="3">
                <CPagination
                  v-show="totalPages > 1"
                  :pages="totalPages"
                  :active-page.sync="activePage"
                  size="sm"
                  align="center"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

const items = [];

const fields = [
  { key: "MATRICA", label: "Matrícula", _style: "width:10%" },
  { key: "NOMEFUNC", label: "Nome" },
  { key: "CPFFUNC", label: "N. CPF", _style: "width:20%;" }
];

export default {
  name: "InformacoesGerais",
  data: function() {
    return {
      perPage: "10",
      tableFilterValue: "",
      perPageOptions: ["5", "10", "15", "20"],
      activePage: 1,
      totalPages: 0,
      loading: false,
      loadedItems: [],
      fields
    };
  },
  watch: {
    tableState() {
      this.onTableChange();
    }
  },
  computed: {
    tableState() {
      return [this.tableFilterValue, this.activePage, this.perPage];
    }
  },
  methods: {
    onTableChange() {
      this.loading = true;

      const params = {
        per_page: this.perPage,
        page: this.activePage,
        tableFilterValue: this.tableFilterValue
      };

      const url = `${baseApiUrl}/api/pessoais/informacoesgerais`;

      axios.get(url, { params }).then(response => {
        this.loadedItems = response.data.data.map((item, id) => {
          return { ...item, id };
        });

        this.totalPages = response.data.total_pages;
        this.loading = false;
      });
    }
  },
  mounted() {
    this.onTableChange();
  }
};
</script>