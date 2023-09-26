const express = require('express')
const orderRoutes = express.Router()

const getOrder = require('../../controllers/OrdersControllers/getOrders')
const postOrder = require('../../controllers/OrdersControllers/postOrder')
const deleteOrder = require('../../controllers/OrdersControllers/deleteOrder')
const updateOrder = require('../../controllers/OrdersControllers/updateOrder')

orderRoutes.get('/', getOrder)
orderRoutes.post('/', postOrder)
orderRoutes.delete('/', deleteOrder)
orderRoutes.put('/', updateOrder)


module.exports = orderRoutes