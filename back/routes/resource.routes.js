const express = require('express')
const router = express.Router()
const resourceController = require('../controllers/resource.controller')

router
  .route('/')
  .get(resourceController.getResources)
  .post(resourceController.createResource)
router
  .route('/:id')
  .get(resourceController.getResourceByID)
  .patch(resourceController.updateResource)
  .delete(resourceController.deleteResource)

module.exports = router
