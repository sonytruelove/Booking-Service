const { DataTypes } = require('sequelize')
const db = require('../db.js')
const ResourceWorker = db.define('ResourceWorker',
  {
    resourceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = ResourceWorker
