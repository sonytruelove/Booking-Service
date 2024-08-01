const Status = require('../models/status.model.js')

class StatusService {
  getStatus () {
    return Promise.resolve().then(() => {
      const status = Status.findAll()
      if (status) { return status } else { return [] }
    }).catch(err => {
      return { error: err }
    })
  }

  getStatus (id) {
    return Promise.resolve().then(() => {
      const status = Status.findByPk(id)
      return status
    }).catch(err => {
      return { error: err }
    })
  }

  createStatus (data) {
    const { title } = data
    return Promise.resolve().then(() => {
      const status = Status.create({
        title
      })
      return status
    }).catch(err => {
      return { error: err }
    })
  }

  updateStatus (id, data) {
    return Promise.resolve().then(() => {
      const status = Status.update(data, {
        where: {
          id
        }
      })
      return status
    }).catch(err => {
      return { error: err }
    })
  }

  deleteStatus (id) {
    Promise.resolve().then(() => {
      const status = Status.destroy({
        where: {
          id
        }
      })
      return status
    }).catch(err => {
      return { error: err }
    })
  }
}

module.exports = new StatusService()
