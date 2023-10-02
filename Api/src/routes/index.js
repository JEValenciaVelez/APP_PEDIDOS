const express = require('express')
const router = express.Router()

const UserRoutes = require('./UserRoutes')
const EmployeeRoutes = require('./EmployeeRoutes')
const clientRoutes = require('./ClientRoutes')
const orderRoutes = require('./OrederRoutes')
const productRoutes = require('./ProductRoutes')
const loginRoute = require('./LoginRoute')
const departamentRoutes = require('./DepartamentRoutes')
const municipiosRoutes = require('./MunicipiosRoutes')


router.use('/user', UserRoutes)
router.use('/employee', EmployeeRoutes)
router.use('/Client', clientRoutes)
router.use('/order', orderRoutes)
router.use('/product', productRoutes)
router.use('/login', loginRoute)
router.use('/departament', departamentRoutes)
router.use('/municipios', municipiosRoutes)


module.exports = router