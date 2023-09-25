const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoutes')
const EmployeeRoutes = require('./EmployeeRoutes')
const clientRoutes = require('./ClientRoutes')


router.use('/user', UserRoutes)
router.use('/employee', EmployeeRoutes)
router.use('/Client', clientRoutes)


module.exports = router