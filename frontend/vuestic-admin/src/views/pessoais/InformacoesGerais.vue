<template>
  <va-card :title="$t('tables.searchInformacoesGerais')">
    <div class="row align--center">
      <div class="flex xs12 md6">
        <va-input
          :value="term"
          :placeholder="$t('tables.searchByMatriculaNameCpf')"
          @change="search"
        >
          <va-icon name="fa fa-search" slot="prepend" />
        </va-input>
      </div>
      <div class="flex xs12 md3 offset--md3">
        <va-select
          v-model="perPage"
          :label="$t('tables.perPage')"
          :options="perPageOptions"
          noClear
        />
      </div>
    </div>
    <va-data-table
      :fields="fields"
      :data="items"
      :per-page="parseInt(perPage)"
      :loading="loading"
      :totalPages="totalPages"
      @page-selected="readItems"
      api-mode
    ></va-data-table>
  </va-card>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
import { debounce } from "lodash";

export default {
  name: "informacoes-gerais",
  data() {
    return {
      term: null,
      perPage: "10",
      perPageOptions: ["5", "10", "15", "20"],
      totalPages: 0,
      loading: false,
      items: [],
      tableFilterValue: ""
    };
  },
  computed: {
    fields() {
      return [
        {
          name: "MATRICA",
          title: this.$t("comum.matricula"),
          width: "30%"
        },
        {
          name: "NOMEFUNC",
          title: this.$t("comum.nome"),
          width: "70%"
        }
      ];
    }
  },
  methods: {
    readItems(page = 1) {
      this.loading = true;

      const params = {
        per_page: this.perPage,
        page: page,
        tableFilterValue: this.tableFilterValue
      };

      const url = `${baseApiUrl}/api/pessoais/informacoesgerais`;

      axios
        .get(url, { params })
        .then(response => {
          this.items = response.data.data;
          this.totalPages = response.data.total_pages;
          this.loading = false;
        });
    },
    search: debounce(function(term) {
        console.log('term: ' + term)
      this.tableFilterValue = term;
      this.readItems();
    }, 400)
  },
  created () {
    this.readItems()
  }
};
</script>
