const express = require('express')
const router = express.Router()
const organizationController = require('../controllers/organization.controller')

router
  .route('/')
  .get(organizationController.getOrganizations)
  .post(organizationController.createOrganization)
router
  .route('/:id')
  .get(organizationController.getOrganizationByID)
  .patch(organizationController.updateOrganization)
  .delete(organizationController.deleteOrganization)

module.exports = router
