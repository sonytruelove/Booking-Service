const roleService = require('../services/role.service')

class RoleController {
  async getRoles (req, res) {
    const result = await roleService.getRoles()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getRoleByID (req, res) {
    if (req.params.id) {
      const result = await roleService.getRole(
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

  async createRole (req, res) {
    const result = await roleService.createRole(
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
      .send(`Role ${result.title} was created succesfully`)
  }

  async updateRole (req, res) {
    if (req.params.id) {
      const result = await roleService.updateRole(
        req.params.id, req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('Role was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'Role not found.' })
    }
  }

  async deleteRole (req, res) {
    if (req.params.id) {
      const result = await roleService.deleteRole(
        req.params.id
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('Role was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Role not found.' })
    }
  }
}

module.exports = new RoleController()
