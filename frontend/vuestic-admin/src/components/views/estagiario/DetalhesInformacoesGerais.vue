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
        <va-input :label="$t('forms.inputs.nome')" :value="pessoa.NM_ESTAGIARIO" type="text" />
        <va-input :label="$t('forms.inputs.raca')" :value="pessoa.RACA" type="text" />
        <va-input
          :label="$t('forms.inputs.gruposanguineo')"
          :value="`${pessoa.COD_GRPSG }${pessoa.FATOR_RH}`"
          type="text"
        />
        <va-input :label="$t('forms.inputs.estado')" :value="pessoa.NATURUF" type="text" />
        <va-input :label="$t('forms.inputs.nomemae')" :value="pessoa.NOMEMAE" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('forms.inputs.datanascimento')"
          :value="pessoa.DT_NASCIMENTO_ESTAGIARIO | formatDate"
          type="text"
        />
        <va-input :label="$t('forms.inputs.tipodeficiencia')" :value="pessoa.COD_TIPODEF" type="text" />
        <va-input :label="$t('forms.inputs.nacionalidade')" :value="pessoa.NACIONA" type="text" />
        <va-input :label="$t('forms.inputs.estadocivil')" :value="pessoa.ESTADOCIVIL" type="text" />
         <va-input :label="$t('forms.inputs.nomepai')" :value="pessoa.NOMEPAI" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.sexo')" :value="pessoa.SEXO" type="text" />
        <va-input :label="$t('forms.inputs.deficienciafisica')" :value="pessoa.COD_DEFFIS" type="text" />
        <va-input :label="$t('forms.inputs.naturalidade')" :value="pessoa.NATURCID" type="text" />
       
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
        <va-input :label="$t('forms.inputs.endereco')" :value="pessoa.ENDCID" type="text" />
        <va-input :label="$t('forms.inputs.complemento')" :value="pessoa.ENDCOMPLEMENTO" type="text" />
        <va-input :label="$t('forms.inputs.pais')" :value="pessoa.ENDPAIS" type="text" />
        <va-input
          :label="$t('forms.inputs.dddtelefone')"
          :value="`(${pessoa.CELULARDDD }) - ${pessoa.CELULARNUM }`"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.rua')" :value="pessoa.ENDRUA" type="text" />
        <va-input :label="$t('forms.inputs.bairro')" :value="pessoa.ENDBAIRRO" type="text" />
        <va-input :label="$t('forms.inputs.cep')" :value="pessoa.ENDCEP" type="text" />
        <va-input :label="$t('forms.inputs.ramal')" :value="pessoa.RAMALTRABALHO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.numero')" :value="pessoa.ENDNUMERO" type="text" />
        <va-input :label="$t('forms.inputs.estado')" :value="pessoa.ENDUF" type="text" />
        <va-input
          :label="$t('forms.inputs.dddtelefone')"
          :value="`(${pessoa.TELDDD }) - ${pessoa.TELNUM }`"
          type="text"
        />
        <va-input :label="$t('auth.email')" :value="pessoa.EMAILPARTICULAR" type="text" />
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
        <va-input :label="$t('forms.inputs.cpf')" :value="pessoa.NU_CPF_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('forms.inputs.dataemissao')"
          :value="pessoa.CIDDATA | formatDate"
          type="text"
        />
        <va-input :label="$t('forms.inputs.zonaeleitoral')" :value="pessoa.ZONTITEL" type="text" />
        <va-input
          :label="$t('forms.inputs.dataexpiracao')"
          :value="pessoa.DTVALIDADEPASS | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.pispasep')" :value="pessoa.PISPASEP" type="text" />
        <va-input
          :label="$t('forms.inputs.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO } - ${pessoa.CIDUNFED}`"
          type="text"
        />
        <va-input :label="$t('forms.inputs.secaoeleitoral')" :value="pessoa.SECTITEL" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.rg')" :value="pessoa.CIDNUME" type="text" />
        <va-input :label="$t('forms.inputs.tituloeleitor')" :value="pessoa.NUMTITEL" type="text" />
        <va-input :label="$t('forms.inputs.numeropassaporte')" :value="pessoa.NUMPASS" type="text" />
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
        <va-input :label="$t('forms.inputs.identificador')" :value="pessoa.ID_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('forms.inputs.dataprimeiroemprego')"
          :value="pessoa.DATPREMP | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.codigoafastamento')" :value="pessoa.AFASCODI" type="text" />
        <va-input
          :label="$t('forms.inputs.datainicio')"
          :value="pessoa.DT_INICIO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.matriculasiap')" :value="pessoa.SP_MATRICA" type="text" />
        <va-input
          :label="$t('forms.inputs.datatermino')"
          :value="pessoa.DT_TERMINO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
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
        <va-input :label="$t('forms.inputs.banco')" :value="pessoa.BANCO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.agencia')" :value="pessoa.AGENCIA" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('forms.inputs.contacorrente')" :value="pessoa.CONTA" type="text" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "detalhes-informacoes-gerais-estagiario",
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