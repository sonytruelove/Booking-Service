const express = require('express')
const router = express.Router()
const resourceRoutes = require('./resource.routes')

router.use('/resource', resourceRoutes)

module.exports = router
