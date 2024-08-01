const Shedule = require('../models/shedule.model.js')

class SheduleService {
  getResourcesBooking () {
    const orders = Shedule.findAll()
    return orders
  }

  getShedule (resourceId, dayId) {
    return Promise.resolve().then(() => {
      const order = Shedule.findOne({
        where: {
          resourceId,
          dayId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  createShedule (data) {
    const { resourceId, dayId } = data
    return Promise.resolve().then(() => {
      const order = Shedule.create({
        resourceId,
        dayId
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  updateShedule (resourceId, dayId, data) {
    return Promise.resolve().then(() => {
      const order = Shedule.update(data, {
        where: {
          resourceId,
          dayId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }

  deleteShedule (resourceId, dayId) {
    Promise.resolve().then(() => {
      const order = Shedule.destroy({
        where: {
          resourceId,
          dayId
        }
      })
      return order
    }).catch(err => {
      return { error: err }
    })
  }
}

module.exports = new SheduleService()
