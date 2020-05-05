module.exports = app => {
    const { isNumeric, isEmpty } = app.utils.functions

    const getInformacoesGerais = async (req, res) => {
        const per_page = req.query.per_page
        const page = req.query.page
        const tableFilterValue = req.query.tableFilterValue

        if (isEmpty(tableFilterValue)) {
            var model = app.db('SIRH.SRHTB290')

            const totalCount = await model.clone().count({ totalRecords: 'NU_CPF_ESTAGIARIO' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('NM_ESTAGIARIO', 'asc')
                .limit(per_page).offset(page * per_page - per_page).select()
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        } else {
            var model = app.db('SIRH.SRHTB290')
                .where((builder) => {
                    if (isNumeric(tableFilterValue)) {
                        builder.orWhere('NU_CPF_ESTAGIARIO', tableFilterValue);
                    }

                    if (!isNumeric(tableFilterValue))
                        builder.orWhere('NM_ESTAGIARIO', 'like', `%${tableFilterValue}%`);
                })

            const totalCount = await model.clone().count({ totalRecords: 'NU_CPF_ESTAGIARIO' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('NM_ESTAGIARIO', 'asc')
                .limit(per_page).offset(page * per_page - per_page)
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        }
    }

    const getInformacoesFuncionais = async (req, res) => {
        const per_page = req.query.per_page
        const page = req.query.page
        const tableFilterValue = req.query.tableFilterValue

        if (isEmpty(tableFilterValue)) {
            var model = app.db('SIRH.SRHTB291')

            const totalCount = await model.clone().count({ totalRecords: 'NU_CPF_ESTAGIARIO' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('NU_CPF_ESTAGIARIO', 'asc')
                .limit(per_page).offset(page * per_page - per_page).select()
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        } else {
            var model = app.db('SIRH.SRHTB291')
                .where((builder) => {
                    builder.orWhere('NU_CPF_ESTAGIARIO', tableFilterValue);
                })

            const totalCount = await model.clone().count({ totalRecords: 'NU_CPF_ESTAGIARIO' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('NU_CPF_ESTAGIARIO', 'asc')
                .limit(per_page).offset(page * per_page - per_page)
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        }
    }

    /*const getInformacoesFuncionais = (req, res) => {
        const per_page = req.query.per_page
        const page = req.query.page

        app.db.raw(queries.estagiarioWithInfoFuncionais)
            .then(estagiario => res.json({ data: estagiario, total_pages, totalRecords }))
            .catch(err => res.status(500).send(err.stack))
    }*/

    return { getInformacoesGerais, getInformacoesFuncionais }
}