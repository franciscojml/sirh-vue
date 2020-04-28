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
        <va-input :label="$t('comum.nome')" :value="pessoa.NM_ESTAGIARIO" type="text" />
        <va-input :label="$t('comum.raca')" :value="pessoa.RACA" type="text" />
        <va-input
          :label="$t('comum.gruposanguineo')"
          :value="`${pessoa.COD_GRPSG }${pessoa.FATOR_RH}`"
          type="text"
        />
        <va-input :label="$t('comum.estado')" :value="pessoa.NATURUF" type="text" />
        <va-input :label="$t('comum.nomemae')" :value="pessoa.NOMEMAE" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input
          :label="$t('comum.datanascimento')"
          :value="pessoa.DT_NASCIMENTO_ESTAGIARIO | formatDate"
          type="text"
        />
        <va-input :label="$t('comum.tipodeficiencia')" :value="pessoa.COD_TIPODEF" type="text" />
        <va-input :label="$t('comum.nacionalidade')" :value="pessoa.NACIONA" type="text" />
        <va-input :label="$t('comum.estadocivil')" :value="pessoa.ESTADOCIVIL" type="text" />
         <va-input :label="$t('comum.nomepai')" :value="pessoa.NOMEPAI" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.sexo')" :value="pessoa.SEXO" type="text" />
        <va-input :label="$t('comum.deficienciafisica')" :value="pessoa.COD_DEFFIS" type="text" />
        <va-input :label="$t('comum.naturalidade')" :value="pessoa.NATURCID" type="text" />
       
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
        <va-input :label="$t('comum.endereco')" :value="pessoa.ENDCID" type="text" />
        <va-input :label="$t('comum.complemento')" :value="pessoa.ENDCOMPLEMENTO" type="text" />
        <va-input :label="$t('comum.pais')" :value="pessoa.ENDPAIS" type="text" />
        <va-input
          :label="$t('comum.dddtelefone')"
          :value="`(${pessoa.CELULARDDD }) - ${pessoa.CELULARNUM }`"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.rua')" :value="pessoa.ENDRUA" type="text" />
        <va-input :label="$t('comum.bairro')" :value="pessoa.ENDBAIRRO" type="text" />
        <va-input :label="$t('comum.cep')" :value="pessoa.ENDCEP" type="text" />
        <va-input :label="$t('comum.ramal')" :value="pessoa.RAMALTRABALHO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.numero')" :value="pessoa.ENDNUMERO" type="text" />
        <va-input :label="$t('comum.estado')" :value="pessoa.ENDUF" type="text" />
        <va-input
          :label="$t('comum.dddtelefone')"
          :value="`(${pessoa.TELDDD }) - ${pessoa.TELNUM }`"
          type="text"
        />
        <va-input :label="$t('auth.email')" :value="pessoa.EMAILPARTICULAR" type="text" />
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
        <va-input :label="$t('comum.cpf')" :value="pessoa.NU_CPF_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('comum.dataemissao')"
          :value="pessoa.CIDDATA | formatDate"
          type="text"
        />
        <va-input :label="$t('comum.zonaeleitoral')" :value="pessoa.ZONTITEL" type="text" />
        <va-input
          :label="$t('comum.dataexpiracao')"
          :value="pessoa.DTVALIDADEPASS | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.pispasep')" :value="pessoa.PISPASEP" type="text" />
        <va-input
          :label="$t('comum.orgaoexpedidorestado')"
          :value="`${pessoa.CIDORGAO } - ${pessoa.CIDUNFED}`"
          type="text"
        />
        <va-input :label="$t('comum.secaoeleitoral')" :value="pessoa.SECTITEL" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.rg')" :value="pessoa.CIDNUME" type="text" />
        <va-input :label="$t('comum.tituloeleitor')" :value="pessoa.NUMTITEL" type="text" />
        <va-input :label="$t('comum.numeropassaporte')" :value="pessoa.NUMPASS" type="text" />
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
        <va-input :label="$t('comum.identificador')" :value="pessoa.ID_ESTAGIARIO" type="text" />
        <va-input
          :label="$t('comum.dataprimeiroemprego')"
          :value="pessoa.DATPREMP | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.codigoafastamento')" :value="pessoa.AFASCODI" type="text" />
        <va-input
          :label="$t('comum.datainicio')"
          :value="pessoa.DT_INICIO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.matriculasiap')" :value="pessoa.SP_MATRICA" type="text" />
        <va-input
          :label="$t('comum.datatermino')"
          :value="pessoa.DT_TERMINO_ESTAGIO_ATUAL | formatDate"
          type="text"
        />
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
        <va-input :label="$t('comum.banco')" :value="pessoa.BANCO" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.agencia')" :value="pessoa.AGENCIA" type="text" />
      </div>
      <div class="flex xs3 md4">
        <va-input :label="$t('comum.contacorrente')" :value="pessoa.CONTA" type="text" />
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