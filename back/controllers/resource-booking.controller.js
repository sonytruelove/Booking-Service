const resourceService = require('../services/resource.service')

class ResourceBookingController {
  async getResourceBookings (req, res) {
    const result = await resourceBookingService.getResourcesBookings()
    if (result) { return res.status(200).send({ result }) }
  }

  async getResourceBookingByID (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = await resourceBookingService.getResourceBooking(
        req.params.resourceId,
        req.params.userId
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

  async createResourceBooking (req, res) {
    const result = await resourceBookingService.createResourceBooking(
      req.body
    )
    if (result) return res.status(201).send('Order was created succesfully')
    else {
      return res.status(400).send({
        message: 'Unable create order.'
      })
    }
  }

  async updateResourceBooking (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = await resourceBookingService.updateResourceBooking(
        req.params.resourceId, req.params.userId, req.body
      )
      if (result[0]) return res.status(200).send('Order was updated succesfully')
      else {
        return res.status(400).send({
          message: 'Unable update order.'
        })
      }
    } else {
      return res
        .status(404)
        .send({ message: 'Order not found.' })
    }
  }

  async deleteResourceBooking (req, res) {
    if (req.params.resourceId && req.params.userId) {
      const result = await resourceBookingService.deleteResource(
        req.params.resourceId, req.params.userId
      )
      return res.status(200).send('Order was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Order not found.' })
    }
  }
}

module.exports = new ResourceBookingController()
