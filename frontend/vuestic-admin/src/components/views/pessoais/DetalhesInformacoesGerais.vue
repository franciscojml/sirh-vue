<template>
  <div class="pt-2">
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.meusdados')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs12 md6">
        <va-input :label="$t('comum.nome')" v-model="pessoa.NOMEFUNC" />
        <va-input :label="$t('comum.datanascimento')" v-model="pessoa.DATANASC" />
        
      </div>
      <div class="flex xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountNumber')"
          v-model="pessoa.ESTACIVI"
        />
        <va-input :label="$t('dashboard.tabs.bankDetails.notes')" v-model="pessoa.SEXOFUN" />
      </div>

      <va-input :label="$t('comum.matriculasiap')" v-model="pessoa. SP_MATRICA" />
      <va-input :label="$t('comum.percentagemreciboseguro')" v-model="pessoa. SEGPGTO" />
      <va-input :label="$t('comum.datatermino')" v-model="pessoa. AFASTERM" />
      <va-input :label="$t('comum.datainicio')" v-model="pessoa. AFASINIC" />
      <va-input :label="$t('comum.codigoafastamento')" v-model="pessoa. AFASCODI" />
      <va-input :label="$t('comum.contacorrente')" v-model="pessoa. CONTAFUN" />
      <va-input :label="$t('comum.agencia')" v-model="pessoa. AGENCFUN" />
      <va-input :label="$t('comum.banco')" v-model="pessoa. BANCOFUN" />
      <va-input :label="$t('comum.estado')" v-model="pessoa. CARTESTA" />
      <va-input :label="$t('comum.serie')" v-model="pessoa. CARTSERI" />
      <va-input :label="$t('comum.data')" v-model="pessoa. CARTDATA" />
      <va-input :label="$t('comum.numero')" v-model="pessoa. CARTNUME" />
      <va-input :label="$t('comum.jornada')" v-model="pessoa. JORNADA" />
      <va-input :label="$t('comum.sublotacao')" v-model="pessoa. SUBLOTATUAL" />
      <va-input :label="$t('comum.lotacao')" v-model="pessoa. LOTATUAL" />
      <va-input :label="$t('comum.dataadmissao')" v-model="pessoa. DATAADIM" />
      <va-input :label="$t('comum.situacao')" v-model="pessoa. INSTSITU" />
      <va-input :label="$t('comum.nivel')" v-model="pessoa. INSTNIVE" />
      <va-input :label="$t('comum.telefone')" v-model="pessoa. TELEFUNC" />
      <va-input :label="$t('comum.ddd')" v-model="pessoa. DDDFUNC" />
      <va-input :label="$t('comum.estado')" v-model="pessoa. ENDESTF" />
      <va-input :label="$t('comum.cep')" v-model="pessoa. ENDCEPF" />
      <va-input :label="$t('comum.cidade')" v-model="pessoa. ENDCIDF" />
      <va-input :label="$t('comum.bairro')" v-model="pessoa. ENDBAIF" />
      <va-input :label="$t('comum.endereco')" v-model="pessoa. ENDRUAF" />
      <va-input :label="$t('comum.nomemae')" v-model="pessoa. NOMEMAE" />
      <va-input :label="$t('comum.nomepai')" v-model="pessoa. NOMEPAI" />
      <va-input :label="$t('comum.segundoturno')" v-model="pessoa. VOTITEL2" />
      <va-input :label="$t('comum.primeiroturno')" v-model="pessoa. VOTITEL1" />
      <va-input :label="$t('comum.secaoeleitoral ')" v-model="pessoa. SECTITEL" />
      <va-input :label="$t('comum.zonaeleitoral')" v-model="pessoa. ZONTITEL" />
      <va-input :label="$t('comum.cpf')" v-model="pessoa. CPFFUNC" />
      <va-input :label="$t('comum.telefone')" v-model="pessoa. NUMTITEL" />
      <va-input :label="$t('comum.estado')" v-model="pessoa. CIDUNFED" />
      <va-input :label="$t('comum.orgaoexpedidor')" v- model="pessoa. CIDDATA" />
      <va-input :label="$t('comum.dataemissao')" v-model="pessoa. CIDORGAO" />
      <va-input :label="$t('comum.rg')" v-model="pessoa. CIDNUME" />
      <va-input :label="$t('comum.sexo')" v-model="pessoa. SEXOFUN" />
      <va-input :label="$t('comum.estadocivil')" v- model="pessoa. ESTACIVI" />
      <va-input :label="$t('comum.nome')" v-model="pessoa.NOMEFUNC" />
      <va-input :label="$t('comum.datanascimento')" v-model="pessoa.DATANASC" />
      <va-input :label="$t('comum.tipocontrato')" v-model="pessoa.TIPOCONT" />
      <va-input :label="$t('comum.naturalidade')" v-model="pessoa. NATURCID" />
      <va-input :label="$t('comum.estado')" v-model="pessoa. NATURUF" />
      <va-input :label="$t('comum.nacionalidade')" v-model="pessoa. NACIONA" />
    </div>
  </div>
</template>
<script>
export default {
  name: "detalhes-informacoes-gerais-tab",
  props: {
    pessoa: Object
  }
};
</script>
<style lang="scss">
.va-input__container__input {
  font-size: small;
}

.separator {
  display: flex;
  align-items: left;
  text-align: left;
}

.separator::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid gray;
  margin-left: 0.25em;
}
</style>