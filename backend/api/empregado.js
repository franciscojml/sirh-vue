module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const limit = 10 // usado para paginação

    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('SIRH.SRHTB002').count('MATRICA as total')
        const count = parseInt(result[0].total)

        app.db('SIRH.SRHTB002')
            .orderBy('NOMEFUNC', 'asc')
            .limit(limit).offset(page * limit - limit)
            .then(empregado => res.json({ data: empregado, count, limit }))
            .catch(err => res.status(500).send(err.stack))
    }

   const save = async (req, res) => {
        const dadoscadastrais = { ...req.body }

        try {
            validationCamposObrigatorios(dadoscadastrais)
        } catch(msg) {
            res.status(400).send(msg)
        }

        const dc = await app.db('SIRH.SRHTB002').where({ MATRICA: dadoscadastrais.MATRICA }).first()
                            
        if(dc) {
            console.log('up')
            app.db('SIRH.SRHTB002')
                .update(dadoscadastrais)
                .where({ MATRICA: dadoscadastrais.MATRICA })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err.stack))
        } else {
            console.log('add')
            app.db('SIRH.SRHTB002')
                .insert(dadoscadastrais)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err.stack))
        }
    }

    function validationCamposObrigatorios(obj){
        existsOrError(obj.MATRICA, 'Matrícula não informado')
        existsOrError(obj.TIPOCONT, 'Tipo de Contrato não informado')
        existsOrError(obj.NOMEFUNC, 'Nome não informado')
        existsOrError(obj.NATURCID, 'Cidade de Nascimento não informado')
        existsOrError(obj.NATURUF, 'Naturalidade não informado')
        existsOrError(obj.NACIONA, 'Nascionalidade não informado')
        existsOrError(obj.ESTACIVI, 'Estado Civil não informado')
        existsOrError(obj.SEXOFUN, 'Sexo não informado')
        existsOrError(obj.CIDNUME, 'RG não informado')
        existsOrError(obj.CIDORGAO, 'Órgão Expedidor do Rg não informado')
        existsOrError(obj.CIDUNFED, 'UF do Rg não informado')
        existsOrError(obj.CPFFUNC, 'UF do Rg não informado')
        existsOrError(obj.NUMTITEL, 'Título de Eleitor não informado')
        existsOrError(obj.ZONTITEL, 'Zona do título de Eleitor não informado')
        existsOrError(obj.SECTITEL, 'Seção do título de Eleitor não informado')
        existsOrError(obj.VOTITEL1, 'Indicação de votação no 1º Turno não informado')
        existsOrError(obj.VOTITEL2, 'Indicação de votação no 2º Turno não informado')
        existsOrError(obj.NOMEPAI, 'Nome do Pai não informado')
        existsOrError(obj.NOMEMAE, 'Nome da Mãe não informado')
        existsOrError(obj.ENDRUAF, 'Rua do endereço não informado')
        existsOrError(obj.ENDBAIF, 'Bairro do endereço não informado')
        existsOrError(obj.ENDCIDF, 'Cidade do endereço não informado')
        existsOrError(obj.ENDESTF, 'Estado do endereço não informado')
        existsOrError(obj.ENDCEPF, 'CEP do endereço não informado')
        existsOrError(obj.DDDFUNC, 'DDD do Telefone não informado')
        existsOrError(obj.TELEFUNC, 'Telefone não informado')
        existsOrError(obj.INSTNIVE, 'Nível de Grau de Instrução não informado')
        existsOrError(obj.INSTSITU, 'Situação de Grau de Instrução não informado')
        existsOrError(obj.DATAADIM, 'Data de Admissão não informado')
        existsOrError(obj.LOTATUAL, 'Unidade de lotação atual não informado')
        existsOrError(obj.SUBLOTATUAL, 'Unidade de sub-lotação atual não informado')
        existsOrError(obj.JORNADA, 'Jornade de trabalho (h) não informado')
        existsOrError(obj.CARTNUME, 'Número da Carteira de Trabalho não informado')
        existsOrError(obj.CARTESTA, 'UF da Carteira de Trabalho não informado')
        existsOrError(obj.CARTSERI, 'Série da Carteira de Trabalho não informado')
        existsOrError(obj.BANCOFUN, 'Banco não informado')
        existsOrError(obj.AGENCFUN, 'Agência não informado')
        existsOrError(obj.CONTAFUN, 'Conta Corrente não informado')
        existsOrError(obj.SP_MATRICA, 'Matrícula do SIAPI não informado')
    }

    return { get, save }
}