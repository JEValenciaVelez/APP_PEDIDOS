const express = require('express')
const EmployeeRoutes = express.Router()

const postEmployee = require('../../controllers/EmployeeControllers/postEmployee')
const getEmployees = require('../../controllers/EmployeeControllers/getEmployees')
const deleteEmployees = require('../../controllers/EmployeeControllers/deleteEmployee')


EmployeeRoutes.post('/',postEmployee)
EmployeeRoutes.get('/', getEmployees)
EmployeeRoutes.delete('/',deleteEmployees)



module.exports = EmployeeRoutes