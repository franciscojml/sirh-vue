const { db } = require('./.env')

module.exports = {
	client: 'oracledb',
	connection: db
};
