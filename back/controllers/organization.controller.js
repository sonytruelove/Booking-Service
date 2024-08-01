const organizationService = require('../services/organization.service')

class OrganizationController {
  async getOrganizations (req, res) {
    const result = await organizationService.getOrganizations()
    if (result.error) {
      return res
        .status(400)
        .send({ result })
    }
    if (result) { return res.status(200).send({ result }) }
  }

  async getOrganizationByID (req, res) {
    if (req.params.id) {
      const result = await organizationService.getOrganization(
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

  async createOrganization (req, res) {
    const result = await organizationService.createOrganization(
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
      .send(`Organization ${result.title} was created succesfully`)
  }

  async updateOrganization (req, res) {
    if (req.params.id) {
      const result = await organizationService.updateOrganization(
        req.params.id, req.body
      )
      if (result.error) {
        return res
          .status(400)
          .send({ result })
      }
      if (result[0]) { return res.status(200).send('Organization was updated succesfully') }
    } else {
      return res
        .status(404)
        .send({ message: 'Organization not found.' })
    }
  }

  async deleteOrganization (req, res) {
    if (req.params.id) {
      const result = await organizationService.deleteOrganization(
        req.params.id
      )
      if (result?.error) {
        return res
          .status(400)
          .send({ result })
      }
      return res.status(200).send('Organization was deleted successfully')
    } else {
      return res
        .status(404)
        .send({ message: 'Organization not found.' })
    }
  }
}

module.exports = new OrganizationController()
