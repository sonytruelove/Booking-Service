const { DataTypes } = require('sequelize')
const db = require('../db.js')
const Shedule = db.define('Shedule',
  {
    resourceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    dayId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Shedule
