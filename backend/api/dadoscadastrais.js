module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

    const limit = 10 // usado para paginação

    const get = async (req, res) => {
        const page = req.query.page || 1

        const result = await app.db('SIRH.SRHTB002').count('MATRICA as total')
        const count = parseInt(result[0].total)

        app.db('SIRH.SRHTB002')
            .select({matricula: 'MATRICA'}, {tipoContrato: 'TIPOCONT'}, {nome: 'NOMEFUNC'}, {dataNascimento: 'DATANASC'},
            {cidadeNascimento: 'NATURCID'}, {naturalidade: 'NATURUF'}, {nascionalidade: 'NACIONA'}, {estadoCivil: 'ESTACIVI'},
            {sexo: 'SEXOFUN'}, {rg: 'CIDNUME'}, {orgaoExpedidorRg: 'CIDORGAO'}, {ufRg: 'CIDUNFED'},
            {dataExpedicaoRg: 'CIDDATA'}, {cpf: 'CPFFUNC'}, {tituloEleitor: 'NUMTITEL'}, {zona: 'ZONTITEL'},
            {secao: 'SECTITEL'}, {votou1Turno: 'VOTITEL1'}, {votou2Turno: 'VOTITEL2'}, {nomePai: 'NOMEPAI'},
            {nomeMae: 'NOMEMAE'}, {rua: 'ENDRUAF'}, {bairro: 'ENDBAIF'}, {cidade: 'ENDCIDF'},
            {estado: 'ENDESTF'}, {cep: 'ENDCEPF'}, {ddd: 'DDDFUNC'}, {telefone: 'TELEFUNC'},
            {nivelGrauInstrucao: 'INSTNIVE'}, {situacaoGrauInstrucao: 'INSTSITU'}, {dataAdmissao: 'DATAADIM'}, {lotacaoAtual: 'LOTATUAL'},
            {sublotacaoAtual: 'SUBLOTATUAL'}, {jornada: 'JORNADA'}, {carteiraTrabalho: 'CARTNUME'}, {ufCarteiraTrabalho: 'CARTESTA'},
            {serieCarteiraTrabalho: 'CARTSERI'}, {banco: 'BANCOFUN'}, {agencia: 'AGENCFUN'}, {contaBancaria: 'CONTAFUN'},
            {codigoAfastamento: 'AFASCODI'}, {dataInicioAfastamento: 'AFASINIC'}, {dataTerminoAfastamento: 'AFASTERM'}, {percentagemReciboSeguro: 'SEGPGTO'},
            {matriculaSiapi: 'SP_MATRICA'}, {dataCarteiraTrabalho: 'CARTDATA'})
            .orderBy('NOMEFUNC', 'asc')
            .limit(limit).offset(page * limit - limit)
            .then(empregado => res.json({ data: empregado, count, limit }))
            .catch(err => res.status(500).send(err))
    }

    
   const save = (req, res) => {
        const dadoscadastrais = { ...req.body }
        if(req.params.id) dadoscadastrais.matrica = req.params.id

        try {
            existsOrError(dadoscadastrais.name, 'Nome não informado')
            existsOrError(article.description, 'Descrição não informada')
            existsOrError(article.categoryId, 'Categoria não informada')
            existsOrError(article.userId, 'Autor não informado')
            existsOrError(article.content, 'Conteúdo não informado')
        } catch(msg) {
            res.status(400).send(msg)
        }

        if(dadoscadastrais.matrica) {
            app.db('articles')
                .update(article)
                .where({ id: article.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles')
                .insert(article)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    return { get, save }
}