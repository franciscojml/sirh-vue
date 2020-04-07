<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardBody>
            <CDataTable
              :items="items"
              :fields="fields"
              :noItemsView="{ noResults: 'Nenhum resultado disponível para a consulta', noItems: 'Nenhum resultado disponível' }"
              :items-per-page="limit"
              :activePage="page"
              pagination
              column-filter
              table-filter
              sorter
              responsive
              hover
              bordered
              small
              fixed
            >
              <template #show_details="{item, index}">
                <td class="py-2">
                  <CButton
                    color="info"
                    variant="outline"
                    square
                    size="sm"
                    @click="toggleDetails(item, index)"
                  >{{Boolean(item._toggled) ? 'Ocultar' : 'Detalhes'}}</CButton>
                </td>
              </template>
              <template #details="{item}">
                <CCollapse :show="Boolean(item._toggled)" :duration="collapseDuration">
                  <CCardBody>
                    <CForm inline>
                      <CInput class="mr-2" :value="item.MATRICA">
                        <template #label>
                          <small>Matrícula:&nbsp;</small>
                        </template>
                      </CInput>
                      <CInput :value="item.NOMEFUNC">
                        <template #label>
                          <small>Nome:&nbsp;</small>
                        </template>
                      </CInput>
                    </CForm>
                  </CCardBody>
                </CCollapse>
              </template>
            </CDataTable>            
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
  { key: "CPFFUNC", label: "N. CPF", _style: "width:20%;" },
  {
    key: "show_details",
    label: "",
    _style: "width:1%",
    sorter: false,
    filter: false
  }
];

export default {
  name: "InformacoesGerais",
  data: function() {
    return {
      page: 1,
      limit: 0,
      count: 0,
      items: [],
      fields,
      details: [],
      collapseDuration: 0
    };
  },
  methods: {
    toggleDetails(item) {
      this.$set(this.items[item.id], "_toggled", !item._toggled);
      this.collapseDuration = 300;
      this.$nextTick(() => {
        this.collapseDuration = 0;
      });
    },
    loadInformacoesGerais() {
      const url = `${baseApiUrl}/api/dadoscadastrais?page=${this.page}`;

      axios.get(url).then(res => {
        this.items = res.data.data.map((item, id) => {
          return { ...item, id };
        });
        this.count = res.data.count;
        this.limit = res.data.limit;
      });
    }
  },
  created() {},
  mounted() {
    this.loadInformacoesGerais();
  }
};
</script>