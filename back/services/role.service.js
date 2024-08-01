const Role = require('../models/role.model.js')

class RoleService {
  getRoles () {
    return Promise.resolve().then(() => {
      const roles = Role.findAll()
      return roles
    }).catch(err => {
      return { error: err }
    })
  }

  getRole (id) {
    return Promise.resolve().then(() => {
      const role = Role.findByPk(id)
      return role
    }).catch(err => {
      return { error: err }
    })
  }

  createRole (data) {
    const { title } = data
    return Promise.resolve().then(() => {
      const role = Role.create({
        title
      })
      return role
    }).catch(err => {
      return { error: err }
    })
  }

  updateRole (id, data) {
    return Promise.resolve().then(() => {
      const role = Role.update(data, {
        where: {
          id
        }
      })
      return role
    }).catch(err => {
      return null
    })
  }

  deleteRole (id) {
    Promise.resolve().then(() => {
      const role = Role.destroy({
        where: {
          id
        }
      })
      return role
    }).catch(err => {
      return null
    })
  }
}

module.exports = new RoleService()
