const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: 0,
  pool: {
    max: process.env.MAXPOOLMAX,
    min: process.env.MINPOOLMIN,
    acquire: process.env.POOLACQUIRE,
    idle: process.env.POOLIDLE
  }
})

sequelize.sync()
  .catch(err => console.log(err))

module.exports = sequelize
