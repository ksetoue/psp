const dotenv = require('dotenv')
require('dotenv').config({
  path: process.env.DOTENV_PATH,
});

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
}
