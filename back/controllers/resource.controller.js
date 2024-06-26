const resourceService = require('../services/resource.service')
const resourcesService = require('../services/resource.service')

class ResourcesController {
  async getResources (req, res) {
    const result = await resourceService.getResources()
    if (result) { return res.status(200).send({ result }) }
  }

  async getResourceByID (req, res) {
    if (req.params.id) {
      const result = await resourceService.getResource(
        req.params.id
      )
      if (result) {
        return res.status(200).send(
          result
        )
      }
    }
    return res
      .status(404)
      .send({ message: 'Resources not found.' })
  }

  async createResource (req, res) {
    const result = await resourcesService.createResource(
      req.body
    )
    if (result) return res.status(201).send(`Resource ${result.title} was created succesfully`)
    else {
      return res.status(500).send({
        message: 'Unable create resource.'
      })
    }
  }

  async updateResource (req, res) {
    if (req.params.id) {
      const result = await resourcesService.updateResource(
        req.params.id, req.body
      )
      if (result) return res.status(200).send('Resource was updated succesfully')
      else {
        return res.status(500).send({
          message: 'Unable update resource.'
        })
      }
    } else {
      return res
        .status(404)
        .send({ message: 'Resource not found.' })
    }
  }

  async deleteResource (req, res) {
    if (req.params.id) {
      const result = await resourcesService.deleteResource(
        req.params.id
      )
      if (result) { return res.status(200).send('Resource was deleted successfully') } else {
        return res.status(500).send({
          message: 'Unable delete resource.'
        })
      }
    } else {
      return res
        .status(404)
        .send({ message: 'Resource not found.' })
    }
  }
}

module.exports = new ResourcesController()
