<template>
  <div class="grid row">
    <div class="flex xs12 md12">
      <div>
        <div class="row">
          <div :class="style12 ? 'flex xs12 md12' : 'flex xs12 md6'">
            <div class="grid__container">
              <va-card :title="$t('tables.searchInformacoesFuncionaisEstagiario')">
                <div class="row align--center">
                  <div class="flex xs12 md6">
                    <va-input
                      v-model="tableFilterValue"
                      :placeholder="$t('tables.searchByCpf')"
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
                  :data="groupKeys"
                  :per-page="parseInt(perPage)"
                  :loading="loading"
                  :totalPages="totalPages"
                  @page-selected="readItems"
                  api-mode
                  hoverable
                >
                  <template slot="records" slot-scope="props">
                    <va-tree-root>
                      <va-tree-category :label="props.rowData.NU_CPF_ESTAGIARIO">
                        <va-tree-node
                          v-for="(item, idx) in itemsKey(props.rowData.NU_CPF_ESTAGIARIO)"
                          :key="idx"
                        >
                          <div class="flex sm6 md12">
                            <div class="row flex" v-if="idx == 0">
                              <div style="width: 30%;">
                                <b>{{ $t('forms.comum.datainicio') }}</b>
                              </div>
                              <div style="width: 30%;">
                                <b>{{ $t('forms.comum.datatermino') }}</b>
                              </div>
                              <div style="width: 30%;">
                                <b>{{ $t('forms.comum.contrato') }}</b>
                              </div>
                              <div style="width: 10%;"></div>
                            </div>
                            <div class="row flex">
                              <div style="width: 30%;">{{item.DT_INICIO_ESTAGIO | formatDate}}</div>
                              <div style="width: 30%;">{{item.DT_TERMINO_ESTAGIO | formatDate}}</div>
                              <div style="width: 30%;">
                                <va-badge
                                  :color="getStatusColor(item.DATA_ENCERRAMENTO_CONTRATO)"
                                >{{ item.DATA_ENCERRAMENTO_CONTRATO ? 'Encerrado' : 'Vigente' }}</va-badge>
                              </div>
                              <div style="width: 10%;">
                                <va-button
                                  flat
                                  small
                                  color="gray"
                                  icon="fa fa-info-circle"
                                  @click="info(item)"
                                />
                              </div>
                            </div>
                          </div>
                        </va-tree-node>
                      </va-tree-category>
                    </va-tree-root>
                  </template>
                </va-data-table>

                <div class="flex xs10 md6">
                  <va-card :class="style12 ? 'flex xs3 mb-6' : 'flex xs7 mb-6'" color="#34495e">
                    <p class="display-6 xs10 mb-0" style="color: white;">{{ totalRecords }}</p>
                    <p>{{$t('charts.totalRecords')}}</p>
                  </va-card>
                </div>
              </va-card>
            </div>
          </div>
          <div class="flex xs6" v-if="!style12">
            <div class="grid__container">
              <va-card>
                <DetalhesInformacoesFuncionais
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
import DetalhesInformacoesFuncionais from "@/components/views/estagiario/DetalhesInformacoesFuncionais";

export default {
  name: "informacoes-funcionais-estagiario",
  components: {
    DetalhesInformacoesFuncionais
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
      style12: true,
      groupKeys: [],
      cpfDiv: []
    };
  },
  computed: {
    fields() {
      return [
        {
          name: "__slot:records",
          width: "30px",
          dataClass: "text-center"
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

      const url = `${baseApiUrl}/api/estagiario/informacoesfuncionais`;

      axios.get(url, { params }).then(response => {
        this.items = response.data.data;
        const group = this.$_.groupBy(this.items, "NU_CPF_ESTAGIARIO");
        const keys = this.$_.keys(group);
        this.groupKeys = this.$_.map(keys, function(value, key) {
          return { NU_CPF_ESTAGIARIO: value };
        });

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
    },
    getStatusColor(status) {
      if (status != null) {
        return "danger";
      }

      return "success";
    },
    itemsKey(param) {
      return this.$_.where(this.items, { NU_CPF_ESTAGIARIO: param });
    },
    isDivHeader(param) {
      if (!this.$_.contains(this.cpfDiv, param)) {
        this.cpfDiv.push(param);
        return true;
      }

      return false;
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

.markup-tables {
  .va-table {
    width: 100%;
  }

  .va-card__body--padding-top {
    padding-top: 0.5rem;
  }

  .va-tree-category__list-container {
    margin-top: 0.1rem;
  }
}
</style>