<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <div>
        <div class="row">
          <div :class="style12 ? 'flex xs12 md12' : 'flex xs12 md6'">
            <div class="grid__container">
              <va-card :title="$t('tables.searchInformacoesGeraisestagiario')">
                <div class="row align--center">
                  <div class="flex xs12 md6">
                    <va-input
                      v-model="tableFilterValue"
                      :placeholder="$t('tables.searchByNameCpf')"
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
                >
                  <template slot="actions" slot-scope="props">
                    <va-button
                      flat
                      small
                      color="gray"
                      icon="fa fa-info-circle"
                      @click="info(props.rowData)"
                    />
                  </template>
                </va-data-table>
                <div class="flex xs10 md6">
                  <va-card :class="style12 ? 'flex xs3 mb-6' : 'flex xs7 mb-6'" color="#34495e">
                    <p class="display-6 xs10 mb-0" style="color: white;">{{ totalRecords }}</p>
                    <p style="color: white;">{{$t('charts.totalRecords')}}</p>
                  </va-card>
                </div>
              </va-card>
            </div>
          </div>
          <div class="flex xs6" v-if="!style12">
            <div class="grid__container">
              <va-card>
                <DetalhesInformacoesGerais
                  :pessoa="pessoa"
                  :fechar="fecharDetalhe"
                  v-if="pessoa != null"
                />
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

import DetalhesInformacoesGerais from "@/components/views/estagiario/DetalhesInformacoesGerais";

export default {
  name: "informacoes-gerais-estagiario",
  components: {
    DetalhesInformacoesGerais
  },
  data() {
    return {
      perPage: "5",
      perPageOptions: ["5", "10", "15", "20"],
      totalPages: 0,
      loading: false,
      items: [],
      tableFilterValue: "",
      totalRecords: 0,
      pessoa: null,
      style12: true
    };
  },
  computed: {
    fields() {
      return [
        {
          name: "NU_CPF_ESTAGIARIO",
          title: this.$t("forms.comum.cpf"),
          width: "30%"
        },
        {
          name: "NM_ESTAGIARIO",
          title: this.$t("forms.comum.nome"),
          width: "70%"
        },
        {
          name: "__slot:actions",
          dataClass: "text-right"
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

      const url = `${baseApiUrl}/api/estagiario/informacoesgerais`;

      axios.get(url, { params }).then(response => {
        this.items = response.data.data;
        this.totalPages = response.data.total_pages;
        this.totalRecords = response.data.totalRecords;
        this.loading = false;
      });
    },
    submit(data) {
      this.$emit("submit", data);
    },
    info(pessoa) {
      this.style12 = false;
      this.pessoa = pessoa;
    },
    fecharDetalhe() {
      this.style12 = true;
      this.pessoa = null;
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

