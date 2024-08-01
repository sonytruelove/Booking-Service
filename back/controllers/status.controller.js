const statusService = require('../services/status.service')

class StatusController {
  async getStatus (req, res) {
    const result = await statusService.getStatus()
    if (result == null) {
      return res
        .status(404)
        .send({ result })
    }
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) {
      return res
        .status(200)
        .send({ result })
    }
  }

  async getStatusByID (req, res) {
    if (req.params.id) {
      const result = await statusService.getStatus(
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

  async createStatus (req, res) {
    const result = await statusService.createStatus(
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
      .send(`Status ${result.title} was created succesfully`)
  }

  async updateStatus (req, res) {
    if (req.params.id) {
      const result = await statusService.updateStatus(
        req.params.id, req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) return res.status(200).send('Status was updated succesfully')
      else {
        return res.status(400).send({
          message: 'Unable update status.'
        })
      }
    } else {
      return res
        .status(404)
        .send({ message: 'Status not found.' })
    }
  }

  async deleteStatus (req, res) {
    if (req.params.id) {
      const result = await statusService.deleteStatus(
        req.params.id
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('Status was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Status not found.' })
    }
  }
}

module.exports = new StatusController()
