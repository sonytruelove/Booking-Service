const ResourceBooking = require('../models/resource-booking.model.js')

class ResourceBookingService {
  getResourcesBooking () {
    const orders = ResourceBooking.findAll()
    return orders
  }

  getResourceBooking (resourceId, userId) {
    return Promise.resolve().then(() => {
      const order = ResourceBooking.findOne({
        where: {
          resourceId,
          userId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  createResourceBooking (data) {
    const { orderDatetime, orderDuration } = data
    return Promise.resolve().then(() => {
      const order = ResourceBooking.create({
        orderDatetime,
        orderDuration
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  updateResourceBooking (resourceId, userId, data) {
    return Promise.resolve().then(() => {
      const order = ResourceBooking.update(data, {
        where: {
          resourceId,
          userId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  deleteResourceBooking (resourceId, userId) {
    Promise.resolve().then(() => {
      const order = ResourceBooking.destroy({
        where: {
          resourceId,
          userId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }
}

module.exports = new ResourceBookingService()
