const express = require('express')
const departamentRoutes = express.Router()

const postDepartamento = require('../../controllers/DepartamentControllers/postDepartamento')
const getDepartaments = require('../../controllers/DepartamentControllers/getDepartamento')
const deleteDepartamento = require('../../controllers/DepartamentControllers/deleteDepartamento')


departamentRoutes.post('/', postDepartamento)
departamentRoutes.get('/', getDepartaments)
departamentRoutes.delete('/', deleteDepartamento)


module.exports = departamentRoutes