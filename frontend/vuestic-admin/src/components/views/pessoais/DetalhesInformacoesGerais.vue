<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.meusdados')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.nome')" :value="pessoa.NOMEFUNC" type="text" />
        <va-input :label="$t('forms.inputs.nacionalidade')" :value="pessoa.NACIONA" />
        <va-input :label="$t('forms.inputs.estadocivil')" :value="pessoa.ESTACIVI" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.datanascimento')" :value="pessoa.DATANASC | formatDate" />
        <va-input :label="$t('forms.inputs.naturalidade')" :value="pessoa.NATURCID" />
        <va-input :label="$t('forms.inputs.nomemae')" :value="pessoa.NOMEMAE" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.sexo')" :value="pessoa.SEXOFUN" />
        <va-input :label="$t('forms.inputs.estado')" :value="pessoa. NATURUF" />
        <va-input :label="$t('forms.inputs.nomepai')" :value="pessoa.NOMEPAI" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-address-book" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.contatos')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.endereco')" :value="pessoa.ENDRUAF" />
        <va-input :label="$t('forms.inputs.cep')" :value="pessoa.ENDCEPF" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.bairro')" :value="pessoa.ENDBAIF" />
        <va-input :label="$t('forms.inputs.ddd')" :value="pessoa.DDDFUNC" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('forms.inputs.cidadeestado')"
          :value="`${pessoa.ENDCIDF} - ${pessoa.ENDESTF}`"
        />
        <va-input :label="$t('forms.inputs.telefone')" :value="pessoa.TELEFUNC" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-vcard" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.documentacao')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.rg')" :value="pessoa.CIDNUME" />
        <va-input :label="$t('forms.inputs.cpf')" :value="pessoa. CPFFUNC" />
        <va-input :label="$t('forms.inputs.secaoeleitoral')" :value="pessoa.SECTITEL" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.dataemissao')" :value="pessoa.CIDDATA | formatDate" />
        <va-input :label="$t('forms.inputs.tituloeleitor')" :value="pessoa.NUMTITEL" />
        <va-input :label="$t('forms.inputs.primeiroturno')" :value="pessoa.VOTITEL1" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('forms.inputs.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO} - ${pessoa.CIDUNFED}`"
        />
        <va-input :label="$t('forms.inputs.zonaeleitoral')" :value="pessoa.ZONTITEL" />
        <va-input :label="$t('forms.inputs.segundoturno')" :value="pessoa.VOTITEL2" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-id-card" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.carteiratrabalho')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.numero')" :value="pessoa.CARTNUME" />
        <va-input :label="$t('forms.inputs.estado')" :value="pessoa.CARTESTA" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.serie')" :value="pessoa.CARTSERI" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.data')" :value="pessoa.CARTDATA | formatDate" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-id-badge" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.informacaocontrato')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.tipocontrato')" :value="pessoa.TIPOCONT" />
        <va-input :label="$t('forms.inputs.matriculasiap')" :value="pessoa.SP_MATRICA" />
        <va-input :label="$t('forms.inputs.codigoafastamento')" :value="pessoa.AFASCODI" />
        <va-input :label="$t('forms.inputs.percentagemreciboseguro')" :value="pessoa.SEGPGTO" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.dataadmissao')" :value="pessoa.DATAADIM | formatDate" />
        <va-input :label="$t('forms.inputs.lotacao')" :value="pessoa.LOTATUAL" />
        <va-input :label="$t('forms.inputs.datainicio')" :value="pessoa.AFASINIC | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.jornada')" :value="pessoa.JORNADA" />
        <va-input :label="$t('forms.inputs.sublotacao')" :value="pessoa.SUBLOTATUAL" />
        <va-input :label="$t('forms.inputs.datatermino')" :value="pessoa.AFASTERM | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-money" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.dadosbancarios')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.banco')" :value="pessoa.BANCOFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.agencia')" :value="pessoa.AGENCFUN" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.contacorrente')" :value="pessoa.CONTAFUN" />
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