const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt');
const activedirectory = require('activedirectory')

module.exports = app => {

    
    const signin = (req, res) => {
        /*if (!req.body.email || !req.body.password) {
            return res.status(400).send('Informe usuário e senha!')
        }*/

        var config = { url: 'ldap://ldap-balancer.sede.embrapa.br:636',
               baseDN: 'dc=embrapa,dc=br',
               username: 'cn=ocomon10,ou=sistemas,dc=embrapa,dc=br',
               password: 'oco2010' }
        var ad = new activedirectory(config);
        
        ad.authenticate('fjlima', 'F23r2901$', function(err, auth) {
            if (err) {
              console.log('ERROR: '+JSON.stringify(err));
              return;
            }
            
            if (auth) {
              console.log('Authenticated!');
            }
            else {
              console.log('Authentication failed!');
            }
          });

        /*
        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (!user) return res.status(400).send('Usuário não encontrado!')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if (!isMatch) return res.status(401).send('Email/Senha inválidos!')

        const now = Math.floor(Date.now() / 1000)

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            admin: user.admin,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
        }

        res.json({
            ...payload,
            token: jwt.encode(payload, authSecret)
        })*/

        res.json('ok')
    }

    const validateToken = async (req, res) => {
        const userData = req.body || null
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }

    return { signin, validateToken }
}