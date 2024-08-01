const userService = require('../services/user.service')

class UserController {
  async getUsers (req, res) {
    const result = await userService.getUsers()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getUserByID (req, res) {
    if (req.params.id) {
      const result = await userService.getUser(
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

  async createUser (req, res) {
    const result = await userService.createUser(
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
      .send(`User ${result.title} was created succesfully`)
  }

  async updateUser (req, res) {
    if (req.params.id) {
      const result = await userService.updateUser(
        req.params.id, req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('User was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'User not found.' })
    }
  }

  async deleteUser (req, res) {
    if (req.params.id) {
      const result = await userService.deleteUser(
        req.params.id
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('User was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'User not found.' })
    }
  }
}

module.exports = new UserController()
