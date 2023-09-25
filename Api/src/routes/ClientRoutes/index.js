const express = require('express')
const clientRoutes = express.Router()

const postClient = require('../../controllers/ClientControllers/postClient')
const getClients = require('../../controllers/ClientControllers/getClients')


clientRoutes.post('/', postClient)
clientRoutes.get('/', getClients)


module.exports = clientRoutes