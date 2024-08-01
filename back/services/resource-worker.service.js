const ResourceWorker = require('../models/resource-worker.model.js')

class ResourceWorkerService {
  getResourceWorkers () {
    return Promise.resolve().then(() => {
      const resourceWorkers = ResourceWorker.findAll()
      return resourceWorkers
    }).catch(err => {
      return { error: err }
    })
  }

  getResourceWorker (resourceWorkerId, userId) {
    return Promise.resolve().then(() => {
      const resourceWorker = ResourceWorker.findOne({
        where: {
          resourceWorkerId,
          userId
        }
      })
      return resourceWorker
    }).catch(err => {
      return { error: err }
    })
  }

  createResourceWorker (data) {
    const { resourceId, userId } = data
    return Promise.resolve().then(() => {
      const resourceWorker = ResourceWorker.create({
        resourceId,
        userId
      })
      return resourceWorker
    }).catch(err => {
      return { error: err }
    })
  }

  updateResourceWorker (resourceId, userId, data) {
    return Promise.resolve().then(() => {
      const resourceWorker = ResourceWorker.update(data, {
        where: {
          resourceId,
          userId
        }
      })
      return resourceWorker
    }).catch(err => {
      return { error: err }
    })
  }

  deleteResourceWorker (resourceId, userId) {
    Promise.resolve().then(() => {
      const resourceWorker = ResourceWorker.destroy({
        where: {
          resourceId,
          userId
        }
      })
      return resourceWorker
    }).catch(err => {
      return { error: err }
    })
  }
}

module.exports = new ResourceWorkerService()
