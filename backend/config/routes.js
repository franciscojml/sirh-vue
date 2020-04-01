const admin = require('./admin')

module.exports = app => {

    app.route('/api/dadoscadastrais')
        .get(app.api.empregado.get)
    //.put(app.api.dadoscadastrais.save)

    app.route('/api/dashboard/photoProfile')
        .get(app.api.dashboard.getPhotoProfile)
}