const { Employee } = require('../../db');

const deleteEmployees = async (req, res) => {

    try {

        const { cedula } = req.body; 

        if (!cedula) {
            return res.status(400).send('Debe proporcionar la cédula del empleado a eliminar');
        }

        // Buscar empleados por su cédula
        const employeesToDelete = await Employee.findAll({
            where: {
                cedula: cedula
            }
        });

        if (employeesToDelete.length === 0) {
            return res.status(404).send('No se encontraron empleados con la cédula proporcionada');
        }

        // Eliminar el empleado
        await Employee.destroy({
            where: {
                cedula: cedula
            }
        });

        return res.status(200).json({ message: 'Empleado eliminado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar empleados');
    }
};

module.exports = deleteEmployees;
