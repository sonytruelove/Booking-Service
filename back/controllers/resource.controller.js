const resourceService = require('../services/resource.service')

class ResourceController {
  async getResources (req, res) {
    const result = await resourceService.getResources()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getResourceByID (req, res) {
    if (req.params.id) {
      const result = await resourceService.getResource(
        req.params.id
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result) {
        return res.status(200).send(
          result
        )
      }
    }
  }

  async createResource (req, res) {
    const result = await resourceService.createResource(
      req.body
    )
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return }
    res
      .status(201)
      .send(`Resource ${result.title} was created succesfully`)
  }

  async updateResource (req, res) {
    if (req.params.id) {
      const result = await resourceService.updateResource(
        req.params.id, req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('Resource was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'Resource not found.' })
    }
  }

  async deleteResource (req, res) {
    if (req.params.id) {
      const result = await resourceService.deleteResource(
        req.params.id
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('Resource was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Resource not found.' })
    }
  }
}

module.exports = new ResourceController()
