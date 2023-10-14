//en este modulo muestra como se firma el token
// require('dotenv').config()
// const { SECRET } = process.env
const jwt = require('jsonwebtoken')


const secret = 'MySecret'
//lo que vamos a encriptar en el token
const payload = {
    //subject, la forma como vamos a identificar el usuario
    sub: 1,
    role: 'customer'
}

//funcion para firmar el token
function signToken (payload, secret) {
    return jwt.sign(payload, secret)
}

const token = signToken(payload, secret)

console.log(token)