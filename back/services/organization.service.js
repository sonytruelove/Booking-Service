const Organization = require('../models/organization.model.js')

class OrganizationService {
  getOrganizations () {
    return Promise.resolve().then(() => {
      const organizations = Organization.findAll()
      return organizations
    }).catch(err => {
      return { error: err }
    })
  }

  getOrganization (id) {
    return Promise.resolve().then(() => {
      const organization = Organization.findByPk(id)
      return organization
    }).catch(err => {
      return { error: err }
    })
  }

  createOrganization (data) {
    const { code, title } = data
    return Promise.resolve().then(() => {
      const organization = Organization.create({
        code,
        title
      })
      return organization
    }).catch(err => {
      return { error: err }
    })
  }

  updateOrganization (id, data) {
    return Promise.resolve().then(() => {
      const organization = Organization.update(data, {
        where: {
          id
        }
      })
      return organization
    }).catch(err => {
      return null
    })
  }

  deleteOrganization (id) {
    Promise.resolve().then(() => {
      const organization = Organization.destroy({
        where: {
          id
        }
      })
      return organization
    }).catch(err => {
      return null
    })
  }
}

module.exports = new OrganizationService()
