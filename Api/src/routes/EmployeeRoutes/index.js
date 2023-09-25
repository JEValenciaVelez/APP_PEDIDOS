const express = require('express')
const EmployeeRoutes = express.Router()

const postEmployee = require('../../controllers/EmployeeControllers/postEmployee')
const getEmployees = require('../../controllers/EmployeeControllers/getEmployees')
const deleteEmployees = require('../../controllers/EmployeeControllers/deleteEmployee')
const updateEmployee = require('../../controllers/EmployeeControllers/updateEmployee')


EmployeeRoutes.post('/',postEmployee)
EmployeeRoutes.get('/', getEmployees)
EmployeeRoutes.delete('/',deleteEmployees)
EmployeeRoutes.put('/', updateEmployee)



module.exports = EmployeeRoutes