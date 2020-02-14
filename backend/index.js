const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const swaggerUi = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDocument = require('./swagger.json');

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

app.listen(3000, () => {
   console.log('Backend executando...')
})