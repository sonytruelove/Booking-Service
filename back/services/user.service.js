const User = require('../models/user.model.js')

class UserService {
  getUsers () {
    return Promise.resolve().then(() => {
      const users = User.findAll()
      return users
    }).catch(err => {
      return { error: err }
    })
  }

  getUser (id) {
    return Promise.resolve().then(() => {
      const user = User.findByPk(id)
      return user
    }).catch(err => {
      return { error: err }
    })
  }

  createUser (data) {
    const { name, surname, patronymic, roleId, organizationId } = data
    return Promise.resolve().then(() => {
      const user = User.create({
        name,
        surname,
        patronymic,
        roleId,
        organizationId
      })
      return user
    }).catch(err => {
      return { error: err }
    })
  }

  updateUser (id, data) {
    return Promise.resolve().then(() => {
      const user = User.update(data, {
        where: {
          id
        }
      })
      return user
    }).catch(err => {
      return null
    })
  }

  deleteUser (id) {
    Promise.resolve().then(() => {
      const user = User.destroy({
        where: {
          id
        }
      })
      return user
    }).catch(err => {
      return null
    })
  }
}

module.exports = new UserService()
