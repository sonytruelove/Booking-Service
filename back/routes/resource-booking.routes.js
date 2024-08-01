const express = require('express')
const router = express.Router()
const resourceBookingController = require('../controllers/resource-booking.controller')

router
  .route('/')
  .get(resourceBookingController.getResourceBookings)
  .post(resourceBookingController.createResourceBooking)
router
  .route('/user/:userId/order/:resourceId')
  .get(resourceBookingController.getResourceBookingByID)
  .patch(resourceBookingController.updateResourceBooking)
  .delete(resourceBookingController.deleteResourceBooking)

module.exports = router
