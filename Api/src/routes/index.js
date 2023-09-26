const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoutes')
const EmployeeRoutes = require('./EmployeeRoutes')
const clientRoutes = require('./ClientRoutes')
const orderRoutes = require('./OrederRoutes')
const productRoutes = require('./ProductRoutes')


router.use('/user', UserRoutes)
router.use('/employee', EmployeeRoutes)
router.use('/Client', clientRoutes)
router.use('/order', orderRoutes)
router.use('/product', productRoutes)


module.exports = router