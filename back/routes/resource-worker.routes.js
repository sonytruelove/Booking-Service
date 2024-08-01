const express = require('express')
const router = express.Router()
const resourceWorkerController = require('../controllers/resource-worker.controller')

router
  .route('/')
  .get(resourceWorkerController.getResourceWorkers)
  .post(resourceWorkerController.createResourceWorker)
router
  .route('/user/:userId/resource/:resourceId')
  .get(resourceWorkerController.getResourceWorkerByID)
  .patch(resourceWorkerController.updateResourceWorker)
  .delete(resourceWorkerController.deleteResourceWorker)

module.exports = router
