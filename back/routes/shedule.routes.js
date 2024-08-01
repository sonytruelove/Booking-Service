const express = require('express')
const router = express.Router()
const sheduleController = require('../controllers/shedule.controller')

router
  .route('/')
  .get(sheduleController.getShedules)
  .post(sheduleController.createShedule)
router
  .route('/user/:dayId/order/:resourceId')
  .get(sheduleController.getSheduleByID)
  .patch(sheduleController.updateShedule)
  .delete(sheduleController.deleteShedule)

module.exports = router
