const User = require('../../models/Usuario')

const postUser =  (req, res) => {

    try{
        console.log(User)
        return res.status(200).send('Ruta post user works')
    }catch(error){
        console.log(error)
        return res.status().send(error.message)
    }
}

module.exports = postUser