const express = require('express')
const UserRoutes = express.Router()

const postUser = require('../../controllers/UserControllers/postUser')
const getUsers = require('../../controllers/UserControllers/getUsers')
const deleteUser = require('../../controllers/UserControllers/deleteUser')
const updateUser = require('../../controllers/UserControllers/updateUser')

UserRoutes.post('/',postUser)
UserRoutes.get('/', getUsers)
UserRoutes.delete('/', deleteUser)
UserRoutes.put('/', updateUser)


module.exports = UserRoutes