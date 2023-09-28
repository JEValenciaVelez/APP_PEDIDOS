//funcion que me compara la contraseña con la contraseña enciptada en la base de datos

const bcrypt = require('bcrypt')

const { Usuario } = require('../../db')
const { Employee } = require('../../db')


const verifyPassword =  async (req, res) => {

    const { usuario, contraseña } = req.body
    console.log(`req.body: usuario -> ${usuario}, contraseña -> ${contraseña}`)

    try{
        if(!usuario){
            return res.status(400).send('Se debe proveer usuario')
        }

        const userFound = await Usuario.findOne({
            where : { usuario }
        })

        const employeeFound = await Employee.findOne({
            where : { cedula: usuario }
        })

        console.log(`usuario encontrado en bd -> ${userFound.contraseña}`)
        console.log(`empleado encontrado en bd -> ${employeeFound.cedula}`)

        if(!userFound) {
            return res.status(404).send('No se encontro registro de usuario en base de datos')
        }

        const isMatch = await bcrypt.compare(contraseña, userFound.contraseña)
        console.log(`isMatch -> ${isMatch}`)

        if(isMatch){
            if(employeeFound.tipoEmpleado === "empleado"){
                return res.status(200).send("empleado")
            }else if(employeeFound.tipoEmpleado === "administrador"){
                return res.status(200).send("administrador")
            }

        }else {
            return res.status(500).send(false)
        }

    }catch(error){
        console.error(error)
        return res.status(500).json({error: error.message})
    }
}

module.exports = verifyPassword