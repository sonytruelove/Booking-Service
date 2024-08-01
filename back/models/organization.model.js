const { DataTypes } = require('sequelize')
const db = require('../db.js')
const Organization = db.define('Organization',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    title: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false
  }
)

module.exports = Organization
