require("dotenv").config()

module.exports = {

  development: {
    username: 'chhrrwas',
    password: process.env.DB_PASSWORD,
    database: 'chhrrwas',
    host: 'batyr.db.elephantsql.com',
    dialect: 'postgres'
  }
}

