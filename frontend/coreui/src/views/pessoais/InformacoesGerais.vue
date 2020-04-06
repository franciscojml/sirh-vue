<template>
  <div>
    <CRow>
      <CCol lg="6">
        <CTableWrapper
          :items="getShuffledUsersData()"
          striped
          caption="Striped Table"
        />
      </CCol>
    </CRow>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
import { EmpregadoService } from './services/EmpregadoService'
import CTableWrapper from './InformacoesGeraisDetalhe.vue'
import usersData from '../users/UsersData'

export default {
  name: 'InformacoesGerais',
  components: { CTableWrapper, EmpregadoService },
  methods: {
    shuffleArray (array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },

    getShuffledUsersData () {
      return this.shuffleArray(usersData.slice(0))
    }
  }
}
</script>
