const express = require('express')
const router = express.Router()
const dayController = require('../controllers/day.controller')

router
  .route('/')
  .get(dayController.getDays)
  .post(dayController.createDay)
router
  .route('/:id')
  .get(dayController.getDayByID)
  .patch(dayController.updateDay)
  .delete(dayController.deleteDay)

module.exports = router
