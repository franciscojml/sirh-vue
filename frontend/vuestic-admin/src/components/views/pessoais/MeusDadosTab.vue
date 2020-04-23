<template>
  <div class="pt-2">
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <va-separator>
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" />
        {{$t('dashboard.tabs.bankDetails.detailsFields')}}
      </va-separator>
    </div>
    <div class="row">
      <div class="flex xs12 md6">
        <va-input :label="$t('dashboard.tabs.bankDetails.bankName')" v-model="pessoa.NOMEFUNC" />
        <va-input :label="$t('dashboard.tabs.bankDetails.accountName')" v-model="pessoa.DATANASC" />
        <va-input :label="$t('dashboard.tabs.bankDetails.sortCode')" v-model="pessoa.NACIONA" />
      </div>
      <div class="flex xs12 md6">
        <va-input
          :label="$t('dashboard.tabs.bankDetails.accountNumber')"
          v-model="pessoa.ESTACIVI"
        />
        <va-input :label="$t('dashboard.tabs.bankDetails.notes')" v-model="pessoa.SEXOFUN" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "meus-dados-tab",
  props: {
    pessoa: Object
  }
};
</script>
<style lang="scss">
.va-input__container__input {
  font-size: small;
}
</style>