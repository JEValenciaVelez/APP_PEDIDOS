const { Usuario } = require('../../db')


const getUsers =  async (req, res) => {

    const { usuario } = req.query

    try{
       
        if(usuario){

            const user = await Usuario.findOne({
                where: { 
                    usuario
                 }
            });

            if (!user) {
                return res.status(404).send(`No hay usuario con la cédula ${cedula}`);
            }

            
            return res.status(200).json(user)

        }else{

            const users = await Usuario.findAll()
            if(users.length == 0){
                return res.status(404).send('No se encontraron usuarios')
            }

            return res.status(200).json(users)
        }

    }catch(error){
        console.log(error)
        return res.status(500).send(error.message)
    }
}

module.exports = getUsers