<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <div>
        <div class="row">
          <div class="flex xs6">
            <div class="grid__container">
              <va-card :title="$t('tables.searchInformacoesGerais')">
                <div class="row align--center">
                  <div class="flex xs12 md6">
                    <va-input
                      v-model="tableFilterValue"
                      :placeholder="$t('tables.searchByMatriculaNameCpf')"
                      @change="readItems()"
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
                  hoverable
                ></va-data-table>
                <div class="flex xs10 md6">
                  <va-card
                    class="flex xs10 mb-6"
                    color="linear-gradient(to right, hsl(196,77%,55%), hsl(211,74%,53%))"
                  >
                    <p class="display-6 xs10 mb-0" style="color: white;">{{ totalRecords }}</p>
                    <p>{{$t('charts.totalRecords')}}</p>
                  </va-card>
                </div>
              </va-card>
            </div>
          </div>
          <div class="flex xs6">
            <div class="grid__container">
              <va-card>
                <va-tabs grow v-model="tabsState">
                  <va-tab>{{$t('comum.meusdados')}}</va-tab>
                  <va-tab>{{$t('comum.documentacao')}}</va-tab>
                </va-tabs>
                <va-separator/>
                <component :is="tabs[tabsState]" @submit="submit" />
              </va-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

import { MeusDadosTab } from "./MeusDadosTab";
import { DocumentacaoTab } from "./DocumentacaoTab";

export default {
  name: "informacoes-gerais",
  components: {
    MeusDadosTab,
    DocumentacaoTab,
  },
  data() {
    return {
      perPage: "10",
      perPageOptions: ["5", "10", "15", "20"],
      totalPages: 0,
      loading: false,
      items: [],
      tableFilterValue: "",
      totalRecords: 0,
      tabsState: 0,
      tabs: ["MeusDadosTab", "DocumentacaoTab"]
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
    },
    computedStyle() {
      return {
        backgroundColor: this.$themes.primary
      };
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

      axios.get(url, { params }).then(response => {
        this.items = response.data.data;
        this.totalPages = response.data.total_pages;
        this.totalRecords = response.data.totalRecords;
        this.loading = false;
      });
    },
    submit(data) {
      this.$emit("submit", data);
    }
  },
  created() {
    this.readItems();
  }
};
</script>

<style lang="scss">
.va-table td,
.content table td {
  font-size: small;
}

.va-data-table__pagination .va-button--normal {
  padding: 0.3rem;
}
</style>
