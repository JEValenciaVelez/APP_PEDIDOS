const { Client } = require('../../db');

const deleteClient = async (req, res) => {

    try {

        const { cedula } = req.body; 

        if (!cedula) {
            return res.status(400).send('Debe proporcionar la cédula del cliente a eliminar');
        }

        // Buscar clientes por su cédula
        const clientToDelete = await Client.findAll({
            where: {
                cedula
            }
        });

        if (clientToDelete.length === 0) {
            return res.status(404).send('No se encontraron clientes con la cédula proporcionada');
        }

        // Eliminar el cliente
        await Client.destroy({
            where: {
                cedula
            }
        });

        return res.status(200).json({ message: 'Cliente eliminado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar Cliente');
    }
};

module.exports = deleteClient
