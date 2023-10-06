const express = require('express')
const loginRoute = express.Router()

const verifyPassword = require('../../controllers/LoginControllers/verifyPassword')
const {checkApiKey} = require('../../middlewares/auth.handler')


loginRoute.post('/', checkApiKey , verifyPassword)

module.exports = loginRoute