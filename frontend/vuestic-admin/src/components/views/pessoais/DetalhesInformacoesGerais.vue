<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.meusdados')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.nome')" v-model="pessoa.NOMEFUNC" type="text" />
        <va-input :label="$t('comum.nacionalidade')" v-model="pessoa.NACIONA" />
        <va-input :label="$t('comum.estadocivil')" v-model="pessoa.ESTACIVI" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.datanascimento')" :value="pessoa.DATANASC | formatDate" />
        <va-input :label="$t('comum.naturalidade')" v-model="pessoa.NATURCID" />
        <va-input :label="$t('comum.nomemae')" v-model="pessoa.NOMEMAE" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.sexo')" v-model="pessoa.SEXOFUN" />
        <va-input :label="$t('comum.estado')" v-model="pessoa. NATURUF" />
        <va-input :label="$t('comum.nomepai')" v-model="pessoa.NOMEPAI" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-address-book" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.contatos')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.endereco')" v-model="pessoa.ENDRUAF" />
        <va-input :label="$t('comum.cep')" v-model="pessoa.ENDCEPF" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.bairro')" v-model="pessoa.ENDBAIF" />
        <va-input :label="$t('comum.ddd')" v-model="pessoa.DDDFUNC" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('comum.cidadeestado')"
          :value="`${pessoa.ENDCIDF} - ${pessoa.ENDESTF}`"
        />
        <va-input :label="$t('comum.telefone')" v-model="pessoa.TELEFUNC" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-vcard" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.documentacao')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.rg')" v-model="pessoa.CIDNUME" />
        <va-input :label="$t('comum.cpf')" v-model="pessoa. CPFFUNC" />
        <va-input :label="$t('comum.secaoeleitoral')" v-model="pessoa.SECTITEL" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.dataemissao')" :value="pessoa.CIDDATA | formatDate" />
        <va-input :label="$t('comum.tituloeleitor')" v-model="pessoa.NUMTITEL" />
        <va-input :label="$t('comum.primeiroturno')" v-model="pessoa.VOTITEL1" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('comum.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO} - ${pessoa.CIDUNFED}`"
        />
        <va-input :label="$t('comum.zonaeleitoral')" v-model="pessoa.ZONTITEL" />
        <va-input :label="$t('comum.segundoturno')" v-model="pessoa.VOTITEL2" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-id-card" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.carteiratrabalho')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.numero')" v-model="pessoa.CARTNUME" />
        <va-input :label="$t('comum.estado')" v-model="pessoa.CARTESTA" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.serie')" v-model="pessoa.CARTSERI" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.data')" :value="pessoa.CARTDATA | formatDate" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-id-badge" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.informacaocontrato')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.tipocontrato')" v-model="pessoa.TIPOCONT" />
        <va-input :label="$t('comum.matriculasiap')" v-model="pessoa.SP_MATRICA" />
        <va-input :label="$t('comum.codigoafastamento')" v-model="pessoa.AFASCODI" />
        <va-input :label="$t('comum.percentagemreciboseguro')" v-model="pessoa.SEGPGTO" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.dataadmissao')" :value="pessoa.DATAADIM | formatDate" />
        <va-input :label="$t('comum.lotacao')" v-model="pessoa.LOTATUAL" />
        <va-input :label="$t('comum.datainicio')" :value="pessoa.AFASINIC | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.jornada')" v-model="pessoa.JORNADA" />
        <va-input :label="$t('comum.sublotacao')" v-model="pessoa.SUBLOTATUAL" />
        <va-input :label="$t('comum.datatermino')" :value="pessoa.AFASTERM | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-money" color="info" rotation="45" size="60" fixedWidth />
        {{$t('comum.dadosbancarios')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.banco')" v-model="pessoa.BANCOFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.agencia')" v-model="pessoa.AGENCFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.contacorrente')" v-model="pessoa.CONTAFUN" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detalhes-informacoes-gerais-tab",
  props: ["pessoa", "fechar"],
  methods: {
    close() {
      this.fechar();
    }
  }
};
</script>
<style lang="scss">
.va-input__container__input {
  font-size: small;
  size: 10px;
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