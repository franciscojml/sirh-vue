const admin = require('./admin')

module.exports = app => {

    

    app.post('/signin', app.api.auth.signin)

    app.route('/api/dadoscadastrais')
        .get(app.api.empregado.get)
        //.put(app.api.dadoscadastrais.save)

    
}