const app = require('express')()
const basicAuth = require('express-basic-auth')
const consign = require('consign')
const db = require('./config/db')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json');
const passport = require('passport');

app.db = db

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./utils/validation.js')
  .then('./utils/functions.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(passport.initialize());

app.post('/login', passport.login)

app.listen(3000, () => {
  console.log('Backend executando...')
})