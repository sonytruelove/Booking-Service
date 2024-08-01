const { DataTypes } = require('sequelize')
const Resource = require('./resource.model.js')
const Status = require('./status.model.js')
const User = require('./user.model.js')
const db = require('../db.js').sequelize
const ResourceBooking = db.define('ResourceBooking',
  {
    resourceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    orderDatetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    orderDuration: {
      type: DataTypes.DATE,
      allowNull: false,
      default: 1
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      default: 0
    }
  },
  {
    timestamps: false
  }
)

ResourceBooking.hasMany(Resource, { foreignKey: 'resourceId' })
Resource.hasMany(ResourceBooking, { foreignKey: 'id' })

ResourceBooking.hasMany(Resource, { foreignKey: 'userId' })
User.hasMany(ResourceBooking, { foreignKey: 'id' })

ResourceBooking.belongTo(Status, { foreignKey: 'id' })
Status.hasMany(ResourceBooking, { foreignKey: 'status_id' })

module.exports = ResourceBooking
