const { Usuario } = require('../../db')


const getUsers =  async (req, res) => {

    try{
        const Users = await Usuario.findAll()
        if(Users.length == 0){
            return res.status(404).send('No se encontraron usuarios')
        }
        return res.status(200).json({Users})
    }catch(error){
        console.log(error)
        return res.status(500).send(error.message)
    }
}

module.exports = getUsers