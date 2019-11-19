const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dialect: 'postgres',
  seederStorage: 'sequelize',
}
