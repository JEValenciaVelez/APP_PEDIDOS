//modulo de verificacion del token

const jwt = require('jsonwebtoken')


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY5NjUzNjI2OX0.JAo45HqPTh-Sm8XxNfN9Tb8Z_dtsdkA0QySzWcBAKlw'

const secret = 'MySecret'

//funcion para verificar el token
function verifyToken (token, secret) {
    return jwt.verify(token, secret)
}

const payload = verifyToken(token, secret)

console.log(payload)