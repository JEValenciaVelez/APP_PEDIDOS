require('dotenv').config()  //traigo el modulo de las variables de entorno para hacer uso de ellas
const { API_KEY } = process.env // desestructuro la variable de entorno que necesito
const boom = require('@hapi/boom')


//middleware de autentificacion
function checkApiKey (req, res, next) {

    const apiKey = req.headers['api']
    if(apiKey === API_KEY){
        next()
    }else{
        next(boom.unauthorized())
    }
}

module.exports =  checkApiKey 