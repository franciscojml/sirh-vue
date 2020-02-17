const admin = require('./admin')

module.exports = app => {

    app.route('/api/dadoscadastrais')
        .get(app.api.dadoscadastrais.get)
        .put(app.api.dadoscadastrais.save)
}