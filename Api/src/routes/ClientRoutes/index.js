const express = require('express')
const clientRoutes = express.Router()

const postClient = require('../../controllers/ClientControllers/postClient')
const getClients = require('../../controllers/ClientControllers/getClients')
const deleteClient = require('../../controllers/ClientControllers/deleteClient')
const updateClient = require('../../controllers/ClientControllers/updateClient')
const { verifyToken } = require('../../middlewares/auth.handler')



clientRoutes.post('/', postClient)
clientRoutes.get('/',verifyToken, getClients)
clientRoutes.delete('/', deleteClient)
clientRoutes.put('/', updateClient)


module.exports = clientRoutes