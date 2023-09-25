const express = require('express')
const EmployeeRoutes = express.Router()

const postEmployee = require('../../controllers/EmployeeControllers/postEmployee')


EmployeeRoutes.post('/',postEmployee)



module.exports = EmployeeRoutes