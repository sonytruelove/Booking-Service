const { DataTypes } = require('sequelize')
const db = require('../db.js')
const Shedule = require('./shedule.model.js')
const Day = db.define('Day',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startWork: {
      type: DataTypes.TIME,
      allowNull: false,
      default: '00:00:00'
    },
    endWork: {
      type: DataTypes.TIME,
      allowNull: false,
      default: '23:59:59'
    }
  },
  {
    timestamps: false
  }
)

Day.hasMany(Shedule, { foreignKey: 'dayId' })
Shedule.hasMany(Day, { foreignKey: 'id' })

module.exports = Day
