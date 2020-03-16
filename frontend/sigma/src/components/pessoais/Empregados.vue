<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="card card-w-title">
        <DataTable
          :value="dataTableEmpregados"
          class="p-datatable-responsive p-datatable-borderless"
          :selection.sync="dataTableSelectedEmpregados"
          selectionMode="single"
          data-key="MATRICA"
          :paginator="true"
          :rows="10"
        >
          <template #header>Lista de Empregados</template>
          <Column field="MATRICA" header="Matrícula" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Matrícula</span>
              {{slotProps.data.MATRICA}}
            </template>
          </Column>
          <Column field="NOMEFUNC" header="Nome" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Nome</span>
              {{slotProps.data.NOMEFUNC}}
            </template>
          </Column>
          <Column headerStyle="width: 8em; text-align: center" bodyStyle="text-align: center">
            <template #header>
              <Button type="button" icon="pi pi-cog"></Button>
            </template>
            <template #body="slotProps">
              <Button
                type="button"
                icon="pi pi-search"
                class="p-button-success"
                @click="openDetalhe"
              ></Button>
              <Dialog
                header="Informações detalhadas"
                :visible.sync="display"
                :style="{width: '30vw'}"
                :modal="true"
              >
                <Card style="margin-bottom: 1em">
                  <template slot="title" ><h1>Meus dados</h1></template>
                  <template slot="content">
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Matrícula:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box" style="text-decoration: overline;">{{slotProps.data.MATRICA}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Nome:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.MATRICA}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Data de nascimento:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.DATANASC}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Estado civil:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.ESTACIVI}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Sexo:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.SEXOFUN}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Nome do pai:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.NOMEPAI}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Nome do mãe:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.NOMEMAE}}</div>
                      </div>
                    </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Naturalidade</template>
                  <template slot="content">
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Cidade de nascimento:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.NATURCID}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>UF de naturalidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.NATURUF}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Sigla do País de nascionalidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.NACIONA}}</div>
                        </div>
                      </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Endereço</template>
                  <template slot="content">
                      <div class="p-grid">
                          <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                            <div class="box">
                              <strong>Rua do endereço:</strong>
                            </div>
                          </div>
                          <div class="p-col p-col-12 p-md-6 p-lg-4">
                            <div class="box">{{slotProps.data.ENDRUAF}}</div>
                          </div>
                        </div>
                        <div class="p-grid">
                          <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                            <div class="box">
                              <strong>Bairro do endereço:</strong>
                            </div>
                          </div>
                          <div class="p-col p-col-12 p-md-6 p-lg-4">
                            <div class="box">{{slotProps.data.ENDBAIF}}</div>
                          </div>
                        </div>
                        <div class="p-grid">
                          <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                            <div class="box">
                              <strong>Cidade do endereço:</strong>
                            </div>
                          </div>
                          <div class="p-col p-col-12 p-md-6 p-lg-4">
                            <div class="box">{{slotProps.data.ENDCIDF}}</div>
                          </div>
                        </div>
                        <div class="p-grid">
                          <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                            <div class="box">
                              <strong>Estado do endereço:</strong>
                            </div>
                          </div>
                          <div class="p-col p-col-12 p-md-6 p-lg-4">
                            <div class="box">{{slotProps.data.ENDESTF}}</div>
                          </div>
                        </div>
                        <div class="p-grid">
                          <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                            <div class="box">
                              <strong>CEP do endereço:</strong>
                            </div>
                          </div>
                          <div class="p-col p-col-12 p-md-6 p-lg-4">
                            <div class="box">{{slotProps.data.ENDCEPF}}</div>
                          </div>
                        </div>
                  </template>
                </Card>
                 <Card>
                  <template slot="title">Contato</template>
                  <template slot="content">
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>DDD do telefone:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.DDDFUNC}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Número do telefone:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.TELEFUNC}}</div>
                      </div>
                    </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Documentaçao</template>
                  <template slot="content">
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Número da carteira de identidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.CIDNUME}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Órgão expedidor da carteira de identidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.CIDORGAO}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>UF da carteira de identidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.CIDUNFED}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Data de expedição da carteira de identidade:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.CIDDATA}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>CPF:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.CPFFUNC}}</div>
                        </div>
                      </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Título de Eleitor</template>
                  <template slot="content">
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Número do título de eleitor:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.NUMTITEL}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Zona do título de eleitor:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.ZONTITEL}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Seção do título de eleitor:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.SECTITEL}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Indicativo de votação do 1º turno:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.VOTITEL1}}</div>
                        </div>
                      </div>
                      <div class="p-grid">
                        <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                          <div class="box">
                            <strong>Indicativo de votação do 2º turno:</strong>
                          </div>
                        </div>
                        <div class="p-col p-col-12 p-md-6 p-lg-4">
                          <div class="box">{{slotProps.data.VOTITEL2}}</div>
                        </div>
                      </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Escolaridade</template>
                  <template slot="content">
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Nível de grau de instrução:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.INSTNIVE}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Situação do grau de instrução:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.INSTSITU}}</div>
                      </div>
                    </div>
                  </template>
                </Card>
                <Card>
                  <template slot="title">Profissional</template>
                  <template slot="content">
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Tipo de contrato:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.TIPOCONT}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Data de admissão:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.DATAADIM}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Unidade da Embrapa de lotação atual:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.LOTATUAL}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Sub-unidade da Embrapa de lotação atual:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.SUBLOTATUAL}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Jornada de trabalho em horas:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.JORNADA}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Número da carteira de trabalho:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.CARTNUME}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>UF da carteira de trabalho:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.CARTESTA}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Série da carteira de trabalho:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.CARTSERI}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Data da carteira de trabalho:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.CARTDATA}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Código de afastamento atual:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.AFASCODI}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Data de início de afastamento atual:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.AFASINIC}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Data de término de afastamento atual:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.AFASTERM}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Percentagem de recibo seguro:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.SEGPGTO}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Matrícula do empregado no SIAP:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.SP_MATRICA}}</div>
                      </div>
                    </div>
                  </template>
                </Card>                
                <Card>
                  <template slot="title">Bancários</template>
                  <template slot="content">
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Banco para depósito salarial:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.BANCOFUN}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Agência para depósito salarial:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.AGENCFUN}}</div>
                      </div>
                    </div>
                    <div class="p-grid">
                      <div class="p-col-fixed p-col-12 p-md-6 p-lg-4">
                        <div class="box">
                          <strong>Conta corrente para depósito salarial:</strong>
                        </div>
                      </div>
                      <div class="p-col p-col-12 p-md-6 p-lg-4">
                        <div class="box">{{slotProps.data.CONTAFUN}}</div>
                      </div>
                    </div>
                  </template>
                </Card>               
              </Dialog>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
//import EmpregadoService from '@/service/EmpregadoService'
import axios from "axios";
import { baseApiUrl } from "@/global";
import Dialog from "primevue/dialog";
import Card from "primevue/card";

export default {
  name: "Empregados",
  components: { Dialog, Card },
  data() {
    return {
      filters: {},
      dataTableEmpregados: null,
      dataTableSelectedEmpregados: null,
      display: false
    };
  },
  mounted() {
    const url = `${baseApiUrl}/api/dadoscadastrais?page=1`;
    axios.get(url).then(res => (this.dataTableEmpregados = res.data.data));
  },
  methods: {
    openDetalhe() {
      this.display = true;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>