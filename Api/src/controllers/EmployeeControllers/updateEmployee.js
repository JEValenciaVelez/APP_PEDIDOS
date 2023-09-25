const { Employee } = require('../../db');

const updateEmployee = async (req, res) => {
    
    try {
        const {
            cedula,
            nombre,
            apellidos,
            direccion,
            departamento,
            municipio,
            barrio,
            tipoEmpleado,
            salario,
            fechaDeNacimiento,
            telefono
        } = req.body;

        if (!cedula) {
            return res.status(400).send('Debe proporcionar la cédula del empleado a actualizar');
        }

        // Buscar empleados por su cédula
        const employeeToUpdate = await Employee.findOne({
            where: {
                cedula: cedula
            }
        });

        if (!employeeToUpdate) {
            return res.status(404).send('No se encontró un empleado con la cédula proporcionada');
        }

        // Actualizar los campos del empleado con los valores proporcionados
        if (nombre) employeeToUpdate.nombre = nombre;
        if (apellidos) employeeToUpdate.apellidos = apellidos;
        if (direccion) employeeToUpdate.direccion = direccion;
        if (departamento) employeeToUpdate.departamento = departamento;
        if (municipio) employeeToUpdate.municipio = municipio;
        if (barrio) employeeToUpdate.barrio = barrio;
        if (tipoEmpleado) employeeToUpdate.tipoEmpleado = tipoEmpleado;
        if (salario) employeeToUpdate.salario = salario;
        if (fechaDeNacimiento) employeeToUpdate.fechaDeNacimiento = fechaDeNacimiento;
        if (telefono) employeeToUpdate.telefono = telefono;

        // Guardar los cambios en la base de datos
        await employeeToUpdate.save();

        return res.status(200).json({ message: 'Empleado actualizado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar el empleado');
    }
};

module.exports = updateEmployee;

