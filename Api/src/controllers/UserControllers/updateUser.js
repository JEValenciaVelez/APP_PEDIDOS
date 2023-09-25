const { Usuario } = require('../../db');

const updateUser = async (req, res) => {
    
    try {
        const {
            usuario,
            empleado,
            contraseña,
            fechaRegistro,
        } = req.body;

        if (!usuario) {
            return res.status(400).send('Debe proporcionar la cédula del usuario a actualizar');
        }

        // Buscar empleados por su cédula
        const userToUpdate = await Usuario.findOne({
            where: {
                usuario: usuario
            }
        });

        if (!userToUpdate) {
            return res.status(404).send('No se encontró un usuario con la cédula proporcionada');
        }

        // Actualizar los campos del empleado con los valores proporcionados
        if (empleado) userToUpdateToUpdate.empleado = empleado;
        if (contraseña) userToUpdateToUpdate.contraseña = contraseña;
        if (fechaRegistro) userToUpdateToUpdate.fechaRegistro = fechaRegistro;
    
        // Guardar los cambios en la base de datos
        await userToUpdateToUpdate.save();

        return res.status(200).json({ message: 'usuario actualizado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar el usuario');
    }
};

module.exports = updateUser;