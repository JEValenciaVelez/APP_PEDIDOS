const { Employee } = require('../../db')


const getEmployees =  async (req, res) => {

    const { cedula } = req.query

    try{
       
        if(cedula){

            const employee = await Employee.findOne({
                where: { 
                    cedula: cedula
                 }
            });

            if (!employee) {
                return res.status(404).send(`No hay empleado con la cédula ${cedula}`);
            }

            return res.status(200).json({employee})

        }else{

            const employees = await Employee.findAll()
            if(employees.length == 0){
                return res.status(404).send('No se encontraron empleados')
            }
            return res.status(200).json({employees})
        }

    }catch(error){
        console.log(error)
        return res.status(500).send(error.message)
    }
}

module.exports = getEmployees