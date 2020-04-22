<template>
  <div>
    <CRow>
      <CCol sm="12">
        <CCard class="p-5">
          <CCardBody>
            <CDataTable
              :items="loadedItems"
              :fields="fields"
              :column-filter-value="columnFilterValue"
              :table-filter="{ external: true, lazy: true }"
              :table-filter-value.sync="tableFilterValue"
              :sorter="{ external: true, resetable: true }"
              :sorter-value.sync="sorterValue"
              :items-per-page="10"
              :active-page="1"
              hover
              :loading="loading"
            />
            <CRow alignVertical="center" alignHorizontal="center">
              <CCol col="12" sm="6" lg="3">
                <CPagination
                  v-show="pages > 1"
                  :pages="pages"
                  :active-page.sync="activePage"
                  size="sm"
                  align="center"
                />
              </CCol>
            </CRow>
            <CRow alignVertical="center" alignHorizontal="center">
              <CCol col="12" sm="6" lg="3">
                <CWidgetIcon
                  :header="`${totalRecords}`"
                  text="Total de registros encontrados"
                  color="primary"
                >
                  <CIcon name="cil-people" width="24" />
                </CWidgetIcon>
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
      sorterValue: { column: 'NOMEFUNC', asc: true },
      columnFilterValue: {},
      tableFilterValue: "",
      activePage: 1,
      loadedItems: [],
      loading: false,
      fields,
      pages: 5,
      totalRecords: 0
    };
  },
  watch: {
    tableState() {
      this.onTableChange();
    }
  },
  computed: {
    tableState() {
      return [
        this.sorterValue,
        this.columnFilterValue,
        this.tableFilterValue,
        this.activePage
      ];
    }
  },
  methods: {
    onTableChange() {
      this.loading = true;

      const sorter =
        this.sorterValue.column == null
          ? ""
          : `&sorterValue=${this.sorterValue}`;

      console.log("sortevalu: " + this.sorterValue.column);
      console.log("sorteasc: " + this.sorterValue.asc);

      const tableFilter =
        this.tableFilterValue == null || this.tableFilterValue == ""
          ? ""
          : `&tableFilterValue=${this.tableFilterValue}`;

      const url = `${baseApiUrl}/api/pessoais/informacoesgerais?sorterValue=${this.sorterValue}&activePage=${this.activePage}`;

      console.log(url);
      axios.get(url).then(res => {
        console.log('dentro')
        this.loadedItems = res.data.data.map((item, id) => {
          return { ...item, id };
        });
        
        this.pages = res.data.pages;
        this.totalRecords = res.data.totalRecords;
        this.loading = false;
      });
    }
  },
  mounted() {
    this.onTableChange();
  }
};
</script>