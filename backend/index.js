const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');
const LdapStrategy = require('passport-ldapauth');
const passport     = require('passport');

app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

// swagger definition
/*var swaggerDefinition = {
    info: {
      title: 'Documentação da API do SIRH',
      version: '1.0.0',
      description: 'API referente aos resources disponíveis para manipulação das informações do SIRH',
    },    
    basePath: '/'
  };
  
  // options for the swagger docs
  var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./config/routes.js'],
    securityDefinitions: { },
  };
  
  // initialize swagger-jsdoc
  var swaggerSpec = swaggerJSDoc(options);

  app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));*/

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  var getLDAPConfiguration = function (req, callback) {
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
      //winston.info("LDAP user ", user.displayName, "is logged in.")
      console.log("LDAP user ", user.displayName, "is logged in.")
      return done(null, user);
    }))

    passport.serializeUser(function (user, done) {
      done(null, user.uid)
    })
    passport.deserializeUser(function (id, done) {
      User.findOne({ uid: id }).exec()
        .then(user => {
          if (!user) {
            done(new Error(`Cannot find user with uid=${id}`))
          } else {
            done(null, user)
          }
        })
    })


    passport.myLogin = function (req, res, next) {
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
            User.findOneAndUpdate({uid: user.uid}, user, {upsert: true, new: true}).exec().then(user=> {
              return res.json({ success: true, message: 'authentication succeeded', user: Object.assign({name: user.uid}, user) });
            })
          });
        }
      })(req, res, next)
    }

    app.post('/login', passport.myLogin)
app.listen(3000, () => {
   console.log('Backend executando...')
})