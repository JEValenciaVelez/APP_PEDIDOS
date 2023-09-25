const { Employee } = require('../../db')


const getEmployees =  async (req, res) => {

    try{
        const response = await Employee.findAll()
        if(response.length == 0){
            return res.status(404).send('No se encontraron empleados')
        }
        return res.status(200).json({response})
    }catch(error){
        console.log(error)
        return res.status(500).send(error.message)
    }
}

module.exports = getEmployees