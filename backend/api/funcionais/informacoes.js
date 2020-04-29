module.exports = app => {
    const { isNumeric, isEmpty } = app.utils.functions

    const getInformacoes = async (req, res) => {
        const per_page = req.query.per_page
        const page = req.query.page
        const tableFilterValue = req.query.tableFilterValue

        if (isEmpty(tableFilterValue)) {
            var model = app.db('SIRH.SRHTB004')

            const totalCount = await model.clone().count({ totalRecords: 'MATRICA' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('MATRICA', 'asc')
                .limit(per_page).offset(page * per_page - per_page).select()
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        } else {
            var model = app.db('SIRH.SRHTB004')
                .where((builder) => {
                    builder.where('MATRICA', tableFilterValue);
                })

            const totalCount = await model.clone().count({ totalRecords: 'MATRICA' }).first();
            const totalRecords = parseInt(totalCount.totalRecords)
            const total_pages = parseInt(totalRecords / per_page)

            model.clone()
                .orderBy('MATRICA', 'asc')
                .limit(per_page).offset(page * per_page - per_page)
                .then(empregado => res.json({ data: empregado, total_pages, totalRecords }))
                .catch(err => res.status(500).send(err.stack))
        }
    }

    return { getInformacoes }
}