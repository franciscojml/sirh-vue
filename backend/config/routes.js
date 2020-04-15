const admin = require('./admin')

module.exports = app => {

    app.route('/api/pessoais/informacoesgerais')
        .get(app.api.pessoais.informacoesgerais.getInformacoesGerais)
    //.put(app.api.dadoscadastrais.save)

    app.route('/api/dashboard/urlPhotoProfile')
        .get(app.api.dashboard.getUrlPhotoProfile)
}