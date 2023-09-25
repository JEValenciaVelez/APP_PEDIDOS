const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoutes')
const EmployeeRoutes = require('./EmployeeRoutes')


router.use('/user', UserRoutes)
router.use('/employee', EmployeeRoutes)



module.exports = router