const Day = require('../models/day.model.js')

class DayService {
  getDays () {
    return Promise.resolve().then(() => {
      const day = Day.findAll()
      return day
    }).catch(err => {
      return { error: err }
    })
  }

  getDay (id) {
    return Promise.resolve().then(() => {
      const day = Day.findByPk(id)
      return day
    }).catch(err => {
      return { error: err }
    })
  }

  createDay (data) {
    const { date, startWork, endWork } = data
    return Promise.resolve().then(() => {
      const day = Day.create({
        date,
        startWork,
        endWork
      })
      return day
    }).catch(err => {
      return { error: err }
    })
  }

  updateDay (id, data) {
    return Promise.resolve().then(() => {
      const day = Day.update(data, {
        where: {
          id
        }
      })
      return day
    }).catch(err => {
      return { error: err }
    })
  }

  deleteDay (id) {
    Promise.resolve().then(() => {
      const day = Day.destroy({
        where: {
          id
        }
      })
      return day
    }).catch(err => {
      return { error: err }
    })
  }
}

module.exports = new DayService()
