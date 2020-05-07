<template>
  <div class="pt-2">
    <div class="flex-end" style="text-align: right;">
      <va-button flat color="danger" icon="ion-md-close ion" @click="close()" />
    </div>

    <va-input :label="$t('forms.comum.tipocontrato')" :value="pessoa.TIPOCONT" type="text" />
    <va-input :label="$t('forms.comum.sublotacao')" :value="pessoa.SUBLOTATUAL" type="text" />
    <va-input :label="$t('forms.comum.matrsuperv')" :value="pessoa.MATRSUPERV" type="text" />
    <va-input :label="$t('forms.comum.nu_jornada_estagio')" :value="pessoa.NU_JORNADA_ESTAGIO" type="text" />
    <va-input :label="$t('forms.comum.codmodbolsa')" :value="pessoa.CODMODBOLSA" type="text" />
    <va-input :label="$t('forms.comum.dataprorrogacao')" :value="pessoa.DATAPRORROGACAO" type="text" />
    <va-input :label="$t('forms.comum.data_encerramento_contrato')" :value="pessoa.DATA_ENCERRAMENTO_CONTRATO" type="text" />
    <va-input :label="$t('forms.comum.codigoafastamento')" :value="pessoa.AFASCODI" type="text" />
    <va-input :label="$t('forms.comum.cd_entidade_estagio')" :value="pessoa.CD_ENTIDADE_ESTAGIO" type="text" />
    <va-input :label="$t('forms.comum.instpagbolsa')" :value="pessoa.INSTPAGBOLSA" type="text" />
    <va-input :label="$t('forms.comum.vertente')" :value="pessoa.VERTENTE" type="text" />
    <va-input :label="$t('forms.comum.numeroinep')" :value="pessoa.NUMEROINEP" type="text" />
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


    <va-input :label="$t('forms.comum.cd_escolaridade_estagiario')" :value="pessoa.CD_ESCOLARIDADE_ESTAGIARIO" type="text" />
<va-input :label="$t('forms.comum.codcurso')" :value="pessoa.CODCURSO" type="text" />
<va-input :label="$t('forms.comum.codinstensino')" :value="pessoa.CODINSTENSINO" type="text" />
<va-input :label="$t('forms.comum.semestre_inicio_curso')" :value="pessoa.SEMESTRE_INICIO_CURSO" type="text" />
<va-input :label="$t('forms.comum.ano_inicio_curso')" :value="pessoa.ANO_INICIO_CURSO" type="text" />
<va-input :label="$t('forms.comum.semestre_fim_curso')" :value="pessoa.SEMESTRE_FIM_CURSO" type="text" />
<va-input :label="$t('forms.comum.ano_fim_curso')" :value="pessoa.ANO_FIM_CURSO" type="text" />
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