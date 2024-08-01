const Resource = require('../models/resource.model.js')

class ResourceService {
  getResources () {
    return Promise.resolve().then(() => {
      const resources = Resource.findAll()
      return resources
    }).catch(err => {
      return { error: err }
    })
  }

  getResource (id) {
    return Promise.resolve().then(() => {
      const resource = Resource.findByPk(id)
      return resource
    }).catch(err => {
      return { error: err }
    })
  }

  createResource (data) {
    const { title, discription, sheduleId, managerId, workerIds } = data
    return Promise.resolve().then(() => {
      const resource = Resource.create({
        title,
        discription,
        sheduleId,
        managerId,
        workerId
      })
      return resource
    }).catch(err => {
      return { error: err }
    })
  }

  updateResource (id, data) {
    return Promise.resolve().then(() => {
      const resource = Resource.update(data, {
        where: {
          id
        }
      })
      return resource
    }).catch(err => {
      return null
    })
  }

  deleteResource (id) {
    Promise.resolve().then(() => {
      const resource = Resource.destroy({
        where: {
          id
        }
      })
      return resource
    }).catch(err => {
      return null
    })
  }
}

module.exports = new ResourceService()
