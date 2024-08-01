const express = require('express')
const router = express.Router()
const statusController = require('../controllers/status.controller')

router
  .route('/')
  .get(statusController.getStatus)
  .post(statusController.createStatus)
router
  .route('/:id')
  .get(statusController.getStatusByID)
  .patch(statusController.updateStatus)
  .delete(statusController.deleteStatus)

module.exports = router
