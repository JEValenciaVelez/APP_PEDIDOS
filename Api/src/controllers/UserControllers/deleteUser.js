const { Usuario } = require('../../db');

const deleteUser = async (req, res) => {

    try {

        const { usuario } = req.body; 

        if (!usuario) {
            return res.status(400).send('Debe proporcionar la cédula del usuario a eliminar');
        }

        // Buscar empleados por su cédula
        const userToDelete = await Usuario.findAll({
            where: {
                usuario: usuario
            }
        });

        if (userToDelete.length === 0) {
            return res.status(404).send('No se encontraron usuarios con la cédula proporcionada');
        }

        // Eliminar el empleado
        await Usuario.destroy({
            where: {
                usuario: usuario
            }
        });

        return res.status(200).json({ message: 'Usuario eliminado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar Usuario');
    }
};

module.exports = deleteUser
