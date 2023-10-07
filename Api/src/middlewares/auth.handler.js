require('dotenv').config()  //traigo el modulo de las variables de entorno para hacer uso de ellas
const { API_KEY, JWT_SECRET } = process.env // desestructuro la variable de entorno que necesito
const boom = require('@hapi/boom')
const jwt = require('jsonwebtoken')


//middleware de autentificacion
function checkApiKey (req, res, next) {

    const apiKey = req.headers['api']
    if(apiKey === API_KEY){
        next()
    }else{
        next(boom.unauthorized())
    }
}

//middleware de verificacion de token para dar permisos de usuario
function verifyToken (req, res, next) {

    const { token } = req.body
    const secret = JWT_SECRET

    function verifyToken (token, secret) {
        return jwt.verify(token, secret)
    }

    const payload = verifyToken(token, secret)
    
    if(payload.iat){
        next()
    }else{
        next(boom.unauthorized())
    }
}

//middleware de verificacion de rol administrador en la ruta
function checkAdminRole (req, resp, next) {
    const { payload } = req.body
    console.log(payload)

    if(payload.role === 'administrador'){
        next()
    }else{
        next(boom.unauthorized())
    }
}



module.exports = { checkApiKey, verifyToken, checkAdminRole }