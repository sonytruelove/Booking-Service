const dayService = require('../services/day.service')

class DayController {
  async getDays (req, res) {
    const result = await dayService.getDays()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getDayByID (req, res) {
    if (req.params.id) {
      const result = await dayService.getDay(
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

  async createDay (req, res) {
    const result = await dayService.createDay(
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
      .send(`Day ${result.title} was created succesfully`)
  }

  async updateDay (req, res) {
    if (req.params.id) {
      const result = await dayService.updateDay(
        req.params.id, req.body
      )
      console.log(result)
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('Day was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'Day not found.' })
    }
  }

  async deleteDay (req, res) {
    if (req.params.id) {
      const result = await dayService.deleteDay(
        req.params.id
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('Day was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Day not found.' })
    }
  }
}

module.exports = new DayController()
