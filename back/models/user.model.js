const { DataTypes } = require('sequelize')
const db = require('../db.js')
const Role = require('./role.model.js')
const Organization = require('./organization.model.js')
const ResourceWorker = require('./resource-worker.model.js')
const User = db.define('User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
    surname: {
      type: DataTypes.STRING
    },
    patronymic: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    organizationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
User.belongsTo(Role, { foreignKey: 'id' })
Role.hasMany(User, { foreignKey: 'roleId' })

User.belongsTo(Organization, { foreignKey: 'id' })
Organization.hasMany(User, { foreignKey: 'organizationId' })

User.hasMany(ResourceWorker, { foreignKey: 'userId' })
ResourceWorker.hasMany(User, { foreignKey: 'id' })
module.exports = User
