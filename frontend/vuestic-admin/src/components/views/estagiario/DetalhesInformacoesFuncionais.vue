<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-user" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.meusdados')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.nome')" :value="pessoa.NM_ESTAGIARIO" type="text" />
        <va-input :label="$t('forms.comum.raca')" :value="pessoa.RACA" type="text" />
        <va-input
          :label="$t('forms.comum.gruposanguineo')"
          :value="`${pessoa.COD_GRPSG }${pessoa.FATOR_RH}`"
          type="text"
        />
        <va-input :label="$t('forms.comum.estado')" :value="pessoa.NATURUF" type="text" />
        <va-input :label="$t('forms.comum.nomemae')" :value="pessoa.NOMEMAE" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('forms.comum.datanascimento')"
          :value="pessoa.DT_NASCIMENTO_ESTAGIARIO | formatDate"
          type="text"
        />
        <va-input :label="$t('forms.comum.tipodeficiencia')" :value="pessoa.COD_TIPODEF" type="text" />
        <va-input :label="$t('forms.comum.nacionalidade')" :value="pessoa.NACIONA" type="text" />
        <va-input :label="$t('forms.comum.estadocivil')" :value="pessoa.ESTADOCIVIL" type="text" />
         <va-input :label="$t('forms.comum.nomepai')" :value="pessoa.NOMEPAI" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.sexo')" :value="pessoa.SEXO" type="text" />
        <va-input :label="$t('forms.comum.deficienciafisica')" :value="pessoa.COD_DEFFIS" type="text" />
        <va-input :label="$t('forms.comum.naturalidade')" :value="pessoa.NATURCID" type="text" />
       
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-address-book" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.contatos')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.endereco')" :value="pessoa.ENDCID" type="text" />
        <va-input :label="$t('forms.comum.complemento')" :value="pessoa.ENDCOMPLEMENTO" type="text" />
        <va-input :label="$t('forms.comum.pais')" :value="pessoa.ENDPAIS" type="text" />
        <va-input
          :label="$t('forms.comum.dddtelefone')"
          :value="`(${pessoa.CELULARDDD }) - ${pessoa.CELULARNUM }`"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.rua')" :value="pessoa.ENDRUA" type="text" />
        <va-input :label="$t('forms.comum.bairro')" :value="pessoa.ENDBAIRRO" type="text" />
        <va-input :label="$t('forms.comum.cep')" :value="pessoa.ENDCEP" type="text" />
        <va-input :label="$t('forms.comum.ramal')" :value="pessoa.RAMALTRABALHO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.numero')" :value="pessoa.ENDNUMERO" type="text" />
        <va-input :label="$t('forms.comum.estado')" :value="pessoa.ENDUF" type="text" />
        <va-input
          :label="$t('forms.comum.dddtelefone')"
          :value="`(${pessoa.TELDDD }) - ${pessoa.TELNUM }`"
          type="text"
        />
        <va-input :label="$t('auth.email')" :value="pessoa.EMAILPARTICULAR" type="text" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-vcard" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.documentacao')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.cpf')" :value="pessoa.NU_CPF_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('forms.comum.dataemissao')"
          :value="pessoa.CIDDATA | formatDate"
          type="text"
        />
        <va-input :label="$t('forms.comum.zonaeleitoral')" :value="pessoa.ZONTITEL" type="text" />
        <va-input
          :label="$t('forms.comum.dataexpiracao')"
          :value="pessoa.DTVALIDADEPASS | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.pispasep')" :value="pessoa.PISPASEP" type="text" />
        <va-input
          :label="$t('forms.comum.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO } - ${pessoa.CIDUNFED}`"
          type="text"
        />
        <va-input :label="$t('forms.comum.secaoeleitoral')" :value="pessoa.SECTITEL" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.rg')" :value="pessoa.CIDNUME" type="text" />
        <va-input :label="$t('forms.comum.tituloeleitor')" :value="pessoa.NUMTITEL" type="text" />
        <va-input :label="$t('forms.comum.numeropassaporte')" :value="pessoa.NUMPASS" type="text" />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-id-badge" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.informacaocontrato')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.identificador')" :value="pessoa.ID_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('forms.comum.dataprimeiroemprego')"
          :value="pessoa.DATPREMP | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.codigoafastamento')" :value="pessoa.AFASCODI" type="text" />
        <va-input
          :label="$t('forms.comum.datainicio')"
          :value="pessoa.DT_INICIO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.matriculasiap')" :value="pessoa.SP_MATRICA" type="text" />
        <va-input
          :label="$t('forms.comum.datatermino')"
          :value="pessoa.DT_TERMINO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
      </div>
    </div>
    <div class="title text-dark mb-1" :style="{color: $themes.info}">
      <div class="separator">
        <va-icon name="fa fa-money" color="info" rotation="45" size="60" fixedWidth />
        {{$t('forms.comum.dadosbancarios')}}
      </div>
    </div>
    <div class="row">
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.banco')" :value="pessoa.BANCO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.agencia')" :value="pessoa.AGENCIA" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.comum.contacorrente')" :value="pessoa.CONTA" type="text" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detalhes-informacoes-funcionais-estagiario",
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