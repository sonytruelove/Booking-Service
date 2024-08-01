const express = require('express')
const router = express.Router()
const roleController = require('../controllers/role.controller')

router
  .route('/')
  .get(roleController.getRoles)
  .post(roleController.createRole)
router
  .route('/:id')
  .get(roleController.getRoleByID)
  .patch(roleController.updateRole)
  .delete(roleController.deleteRole)

module.exports = router
