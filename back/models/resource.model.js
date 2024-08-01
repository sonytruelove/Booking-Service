const { DataTypes } = require('sequelize')
const db = require('../db.js')
const User = require('./user.model.js')
const Shedule = require('./shedule.model.js')
const ResourceWorker = require('./resource-worker.model.js')
const Resource = db.define('Resource',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discription: {
      type: DataTypes.TEXT
    },
    sheduleId: {
      type: DataTypes.INTEGER,
      default: 1
    },
    managerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    workerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)
Resource.belongsTo(User, { foreignKey: 'id' })
User.hasMany(Resource, { foreignKey: 'managerId' })

Resource.hasMany(ResourceWorker, { foreignKey: 'resourceId' })
ResourceWorker.hasMany(Resource, { foreignKey: 'id' })

Resource.belongsTo(Shedule, { foreignKey: 'id' })
Shedule.hasMany(Resource, { foreignKey: 'sheduleId' })
module.exports = Resource
