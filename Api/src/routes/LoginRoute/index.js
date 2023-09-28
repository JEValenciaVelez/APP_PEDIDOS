const express = require('express')
const loginRoute = express.Router()

const verifyPassword = require('../../controllers/LoginControllers/verifyPassword')


loginRoute.get('/', verifyPassword)

module.exports = loginRoute