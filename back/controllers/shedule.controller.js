const sheduleService = require('../services/shedule.service')

class SheduleController {
  async getShedules (req, res) {
    const result = await sheduleService.getShedulesBookings()
    if (result) { return res.status(200).send({ result }) }
  }

  async getSheduleByID (req, res) {
    if (req.params.sheduleId && req.params.dayId) {
      const result = await sheduleService.getShedule(
        req.params.sheduleId,
        req.params.dayId
      )
      if (result) {
        return res.status(200).send(
          result
        )
      }
    }
    return res
      .status(404)
      .send({ message: 'Shedules not found.' })
  }

  async createShedule (req, res) {
    const result = await sheduleService.createShedule(
      req.body
    )
    if (result) return res.status(201).send('Order was created succesfully')
    else {
      return res.status(400).send({
        message: 'Unable create order.'
      })
    }
  }

  async updateShedule (req, res) {
    if (req.params.sheduleId && req.params.dayId) {
      const result = await sheduleService.updateShedule(
        req.params.sheduleId, req.params.dayId, req.body
      )
      if (result.error) {
        return res.status(400).send({
          message: 'Unable update order.'
        })
      }
      if (result[0]) return res.status(200).send('Order was updated succesfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Order not found.' })
    }
  }

  async deleteShedule (req, res) {
    if (req.params.sheduleId && req.params.dayId) {
      const result = await sheduleService.deleteShedule(
        req.params.sheduleId, req.params.dayId
      )
      return res.status(200).send('Order was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Order not found.' })
    }
  }
}

module.exports = new SheduleController()
