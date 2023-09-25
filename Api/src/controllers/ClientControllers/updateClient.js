const { Client } = require('../../db');

const updateClient = async (req, res) => {
    
    try {
        const {
            cedula,
            nombre,
            apellidos,
            direccion,
            departamento,
            municipio,
            barrio,
            activo,
            fechaDeNacimiento,
            telefono
        } = req.body;

        if (!cedula) {
            return res.status(400).send('Debe proporcionar la cédula del empleado a actualizar');
        }

        // Buscar cliente por su cédula
        const clientToUpdate = await Client.findOne({
            where: {
                cedula
            }
        });

        if (!clientToUpdate) {
            return res.status(404).send('No se encontró un cliente con la cédula proporcionada');
        }

        // Actualizar los campos del empleado con los valores proporcionados
        if (nombre) clientToUpdate.nombre = nombre;
        if (apellidos) clientToUpdate.apellidos = apellidos;
        if (direccion) clientToUpdate.direccion = direccion;
        if (departamento) clientToUpdate.departamento = departamento;
        if (municipio) clientToUpdate.municipio = municipio;
        if (barrio) clientToUpdate.barrio = barrio;
        if (activo) clientToUpdate.activo = activo
        if (fechaDeNacimiento) clientToUpdate.fechaDeNacimiento = fechaDeNacimiento;
        if (telefono) clientToUpdate.telefono = telefono;

        // Guardar los cambios en la base de datos
        await clientToUpdate.save();

        return res.status(200).json({ message: 'Cliente actualizado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar el Cliente');
    }
};

module.exports = updateClient