<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="entypo entypo-vcard" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.habilitacaoprofissional')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.hapentid')" :value="pessoa.HAPENTID" />
        <va-input :label="$t('forms.inputs.hapregia')" :value="pessoa.HAPREGIA" />
        <va-input :label="$t('forms.inputs.hapnuins')" :value="pessoa.HAPNUINS" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.hapnureg')" :value="pessoa.HAPNUREG" />
        <va-input :label="$t('forms.inputs.hapdata')" :value="pessoa.HAPDATA | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="entypo entypo-lock" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.ceres')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.matceres')" :value="pessoa.MATCERES" />
        <va-input :label="$t('forms.inputs.certaxa1')" :value="pessoa.CERTAXA1" />
        <va-input :label="$t('forms.inputs.pceresj')" :value="pessoa.PCERESJ" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.pceresm')" :value="pessoa.PCERESM" />
        <va-input :label="$t('forms.inputs.certaxa2')" :value="pessoa.CERTAXA2" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-money" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.fgts')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.contfgts')" :value="pessoa.CONTFGTS" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.fgtsopc')" :value="pessoa.FGTSOPC" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.fgtsdata')" :value="pessoa.FGTSDATA | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.funcaogratificada')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.codcargo')" :value="pessoa.CODCARGO" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.datincar')" :value="pessoa.DATINCAR | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.datexone')" :value="pessoa.DATEXONE | formatDate" />
      </div>
    </div>

    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-info" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.inputs.outros')}}
      </div>
    </div>

    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.datpremp')" :value="pessoa.DATPREMP | formatDate" />
        <va-input :label="$t('forms.inputs.sitfunci')" :value="pessoa.SITFUNCI" />
        <va-input :label="$t('forms.inputs.eferefer')" :value="pessoa.EFEREFER" />
        <va-input :label="$t('forms.inputs.nudepsf')" :value="pessoa.NUDEPSF" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.efecargo')" :value="pessoa.EFECARGO" />
        <va-input :label="$t('forms.inputs.codigcbo')" :value="pessoa.CODIGCBO" />
        <va-input :label="$t('forms.inputs.efedata')" :value="pessoa.EFEDATA | formatDate" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.funccodi')" :value="pessoa.FUNCCODI" />
        <va-input :label="$t('forms.inputs.seqregis')" :value="pessoa.SEQREGIS" />
        <va-input :label="$t('forms.inputs.nudepir')" :value="pessoa.NUDEPIR" />
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