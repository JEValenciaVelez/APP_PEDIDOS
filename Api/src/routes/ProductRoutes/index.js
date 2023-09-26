const express = require('express')
const productRoutes = express.Router()

const postProduct = require('../../controllers/ProductControllers/postProduct')
const getProduct = require('../../controllers/ProductControllers/getProducts')
const deleteProduct = require('../../controllers/ProductControllers/deleteProduct')
const updateProduct = require('../../controllers/ProductControllers/updateProduct')


productRoutes.post('/', postProduct)
productRoutes.get('/', getProduct)
productRoutes.delete('/', deleteProduct)
productRoutes.put('/', updateProduct )


module.exports = productRoutes