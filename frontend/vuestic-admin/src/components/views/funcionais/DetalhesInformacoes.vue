<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="entypo entypo-vcard" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.habilitacaoprofissional')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.hapentid')" :value="pessoa.HAPENTID" />
        <va-input :label="$t('forms.comum.hapregia')" :value="pessoa.HAPREGIA" />
        <va-input :label="$t('forms.comum.hapnuins')" :value="pessoa.HAPNUINS" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.hapnureg')" :value="pessoa.HAPNUREG" />
        <va-input :label="$t('forms.comum.hapdata')" :value="pessoa.HAPDATA | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="entypo entypo-lock" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.ceres')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.matceres')" :value="pessoa.MATCERES" />
        <va-input :label="$t('forms.comum.certaxa1')" :value="pessoa.CERTAXA1" />
        <va-input :label="$t('forms.comum.pceresj')" :value="pessoa.PCERESJ" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.pceresm')" :value="pessoa.PCERESM" />
        <va-input :label="$t('forms.comum.certaxa2')" :value="pessoa.CERTAXA2" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-money" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.fgts')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.contfgts')" :value="pessoa.CONTFGTS" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.fgtsopc')" :value="pessoa.FGTSOPC" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.fgtsdata')" :value="pessoa.FGTSDATA | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.funcaogratificada')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.codcargo')" :value="pessoa.CODCARGO" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.datincar')" :value="pessoa.DATINCAR | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.datexone')" :value="pessoa.DATEXONE | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-info" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.outros')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.datpremp')" :value="pessoa.DATPREMP | formatDate" />
        <va-input :label="$t('forms.comum.sitfunci')" :value="pessoa.SITFUNCI" />
        <va-input :label="$t('forms.comum.eferefer')" :value="pessoa.EFEREFER" />
        <va-input :label="$t('forms.comum.nudepsf')" :value="pessoa.NUDEPSF" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.efecargo')" :value="pessoa.EFECARGO" />
        <va-input :label="$t('forms.comum.codigcbo')" :value="pessoa.CODIGCBO" />
        <va-input :label="$t('forms.comum.efedata')" :value="pessoa.EFEDATA | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.funccodi')" :value="pessoa.FUNCCODI" />
        <va-input :label="$t('forms.comum.seqregis')" :value="pessoa.SEQREGIS" />
        <va-input :label="$t('forms.comum.nudepir')" :value="pessoa.NUDEPIR" />
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