const resourceWorkerService = require('../services/resource-worker.service')

class ResourceWorkerController {
  async getResourceWorkers (req, res) {
    const result = await resourceWorkerService.getResourceWorkers()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getResourceWorkerByID (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = await resourceWorkerService.getResourceWorker(
        req.params.resourceId,
        req.params.userId
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

  async createResourceWorker (req, res) {
    const result = await resourceWorkerService.createResourceWorker(
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
      .send(`ResourceWorker ${result.title} was created succesfully`)
  }

  async updateResourceWorker (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = await resourceWorkerService.updateResourceWorker(
        req.params.resourceId,
        req.params.userId,
        req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('ResourceWorker was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'ResourceWorker not found.' })
    }
  }

  async deleteResourceWorker (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = resourceWorkerService.deleteResourceWorker(
        req.params.resourceId,
        req.params.userId
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200)
                .send('ResourceWorker was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'ResourceWorker not found.' })
    }
  }
}

module.exports = new ResourceWorkerController()
