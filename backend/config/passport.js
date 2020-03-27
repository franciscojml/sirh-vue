const { authSecret } = require('../.env')
const passport = require('passport')
const passportJwt = require('passport-jwt')
const jwt = require('jwt-simple')
const LdapStrategy = require('passport-ldapauth');
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {

  const getLDAPConfiguration = function (req, callback) {
    process.nextTick(function () {
      var opts = {
        server: {
          url: 'ldap://ldap-balancer.sede.embrapa.br',
          bindDn: `uid=${req.body.username},ou=Pessoas,ou=SGE,ou=SEDE,ou=Centro-Oeste,dc=embrapa,dc=br`,
          bindCredentials: `${req.body.password}`,
          searchBase: 'ou=Pessoas,ou=SGE,ou=SEDE,ou=Centro-Oeste,dc=embrapa,dc=br',
          searchFilter: `uid=${req.body.username}`,
          reconnect: true
        }
      };
      callback(null, opts);
    });
  };

  passport.use(new LdapStrategy(getLDAPConfiguration,
    function (user, done) {
      console.log("LDAP user ", user.displayName, "is logged in.")
      return done(null, user);
    }))

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.login = function (req, res, next) {
    passport.authenticate('ldapauth', function (err, user, info) {
      if (err) {
        return next(err)
      }
      if (!user) {
        res.status(401).json({ success: false, message: 'authentication failed' })
      } else {
        req.login(user, loginErr => {
          if (loginErr) {
            return next(loginErr);
          }

          const now = Math.floor(Date.now() / 1000)

          const payload = {
            id: user.employeeNumber,
            name: user.cn,
            email: user.mail,
            login: user.uid,
            tipoPessoa: user.employeeType,
            departamento: user.departmentNumber,
            iat: now,
            exp: now + (60 * 60 * 24 * 3)
          }

          res.json({
            success: true,
            message: 'authentication succeeded',
            user: {...payload},
            token: jwt.encode(payload, authSecret)
          })
        });
      }
    })(req, res, next)
  }

  const params = {
    secretOrKey: authSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }

  const strategy = new Strategy(params, (payload, done) => {
    app.db('users')
      .where({ id: payload.id })
      .first()
      .then(user => done(null, user ? { ...payload } : false))
      .catch(err => done(err, false))
  })

  passport.use(strategy)

  return {
    authenticate: () => passport.authenticate('jwt', { session: false })
  }
}