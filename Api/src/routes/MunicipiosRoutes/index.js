const express = require('express')
const postMunicipio = require('../../controllers/MunicipioiControllers/postMunicipios')
const getMunicipios = require('../../controllers/MunicipioiControllers/getMunicipios')
const deleteMunicipio = require('../../controllers/MunicipioiControllers/deleteMunicipio')
const municipiosRoutes = express.Router()


municipiosRoutes.post('/', postMunicipio)
municipiosRoutes.get('/', getMunicipios)
municipiosRoutes.delete('/', deleteMunicipio)


module.exports = municipiosRoutes