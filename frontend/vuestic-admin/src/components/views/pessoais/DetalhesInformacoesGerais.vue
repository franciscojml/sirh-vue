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
        <va-input :label="$t('comum.nome')" :value="pessoa.NOMEFUNC" type="text" />
        <va-input :label="$t('comum.nacionalidade')" :value="pessoa.NACIONA" />
        <va-input :label="$t('comum.estadocivil')" :value="pessoa.ESTACIVI" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.datanascimento')" :value="pessoa.DATANASC | formatDate" />
        <va-input :label="$t('comum.naturalidade')" :value="pessoa.NATURCID" />
        <va-input :label="$t('comum.nomemae')" :value="pessoa.NOMEMAE" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.sexo')" :value="pessoa.SEXOFUN" />
        <va-input :label="$t('comum.estado')" :value="pessoa. NATURUF" />
        <va-input :label="$t('comum.nomepai')" :value="pessoa.NOMEPAI" />
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
        <va-input :label="$t('comum.endereco')" :value="pessoa.ENDRUAF" />
        <va-input :label="$t('comum.cep')" :value="pessoa.ENDCEPF" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.bairro')" :value="pessoa.ENDBAIF" />
        <va-input :label="$t('comum.ddd')" :value="pessoa.DDDFUNC" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('comum.cidadeestado')"
          :value="`${pessoa.ENDCIDF} - ${pessoa.ENDESTF}`"
        />
        <va-input :label="$t('comum.telefone')" :value="pessoa.TELEFUNC" />
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
        <va-input :label="$t('comum.rg')" :value="pessoa.CIDNUME" />
        <va-input :label="$t('comum.cpf')" :value="pessoa. CPFFUNC" />
        <va-input :label="$t('comum.secaoeleitoral')" :value="pessoa.SECTITEL" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.dataemissao')" :value="pessoa.CIDDATA | formatDate" />
        <va-input :label="$t('comum.tituloeleitor')" :value="pessoa.NUMTITEL" />
        <va-input :label="$t('comum.primeiroturno')" :value="pessoa.VOTITEL1" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('comum.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO} - ${pessoa.CIDUNFED}`"
        />
        <va-input :label="$t('comum.zonaeleitoral')" :value="pessoa.ZONTITEL" />
        <va-input :label="$t('comum.segundoturno')" :value="pessoa.VOTITEL2" />
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
        <va-input :label="$t('comum.numero')" :value="pessoa.CARTNUME" />
        <va-input :label="$t('comum.estado')" :value="pessoa.CARTESTA" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.serie')" :value="pessoa.CARTSERI" />
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
        <va-input :label="$t('comum.tipocontrato')" :value="pessoa.TIPOCONT" />
        <va-input :label="$t('comum.matriculasiap')" :value="pessoa.SP_MATRICA" />
        <va-input :label="$t('comum.codigoafastamento')" :value="pessoa.AFASCODI" />
        <va-input :label="$t('comum.percentagemreciboseguro')" :value="pessoa.SEGPGTO" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.dataadmissao')" :value="pessoa.DATAADIM | formatDate" />
        <va-input :label="$t('comum.lotacao')" :value="pessoa.LOTATUAL" />
        <va-input :label="$t('comum.datainicio')" :value="pessoa.AFASINIC | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.jornada')" :value="pessoa.JORNADA" />
        <va-input :label="$t('comum.sublotacao')" :value="pessoa.SUBLOTATUAL" />
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
        <va-input :label="$t('comum.banco')" :value="pessoa.BANCOFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.agencia')" :value="pessoa.AGENCFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.contacorrente')" :value="pessoa.CONTAFUN" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detalhes-informacoes-gerais",
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