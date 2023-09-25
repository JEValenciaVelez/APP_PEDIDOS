const express = require('express')
const UserRoutes = express.Router()

const postUser = require('../../controllers/UserControllers/postUser')
const getUsers = require('../../controllers/UserControllers/getUsers')

UserRoutes.post('/',postUser)
UserRoutes.get('/', getUsers)


module.exports = UserRoutes