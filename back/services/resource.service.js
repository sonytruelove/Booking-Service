const Resource = require('../models/resource.model.js')

class ResourceService {
  getResources () {
    const resources = Resource.findAll()
    return resources
  }

  getResource (id) {
    const resource = Resource.findByPk(id)
    return resource
  }

  // без async не отрабатывает try catch https://stackoverflow.com/questions/61532921/sequelize-try-block-wont-catch-on-model-create-error
  async createResource (data) {
    try {
      const resource = await Resource.create(data)
      return resource
    } catch (err) {
      return null
    }
  }

  async updateResource (id, data) {
    const resource = await Resource.update(data, {
      where: {
        id
      }
    })
    if (resource[0]) { return resource } else { return null }
  }

  deleteResource (id) {
    const resource = Resource.destroy({
      where: {
        id
      }
    })
    return resource
  }
}

module.exports = new ResourceService()
