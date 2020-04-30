const admin = require('./admin')

module.exports = app => {

    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/api/dashboard/urlPhotoProfile')
        .get(app.api.dashboard.getUrlPhotoProfile)

    app.route('/api/pessoais/informacoesgerais')
        .get(app.api.pessoais.informacoesgerais.getInformacoesGerais)

    app.route('/api/funcionais/informacoes')
        .get(app.api.funcionais.informacoes.getInformacoes)

    app.route('/api/estagiario/informacoesgerais')
        .get(app.api.estagiario.informacoes.getInformacoesGerais)

    app.route('/api/estagiario/informacoesfuncionais')
        .get(app.api.estagiario.informacoes.getInformacoesFuncionais)
}