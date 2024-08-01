const { DataTypes } = require('sequelize')
const db = require('../db.js')
const Status = db.define('Status',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      default: 'For moderation'
    }
  },
  {
    timestamps: false
  }
)

module.exports = Status
