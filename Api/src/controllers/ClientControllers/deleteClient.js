const { Client } = require('../../db');

const deleteClient = async (req, res) => {

    try {

        const { cedula } = req.body; 

        if (!cedula) {
            return res.status(400).send('Debe proporcionar la cédula del cliente a eliminar');
        }

        // Buscar cliente por su cédula
        const clientToDelete = await Client.findOne({
            where: {
                cedula
            }
        });

        if (!clientToDelete) {
            return res.status(404).send('No se encontró un cliente con la cédula proporcionada');
        }

        if (!clientToDelete.activo) {
            return res.status(200).send('Cliente ya inactivado anteriormente');
        }

        // Actualizar el cliente para inactivarlo
        await Client.update(
            { activo: false },
            {
                where: {
                    cedula
                }
            }
        );

        return res.status(200).json({ message: 'Cliente inactivado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar Cliente');
    }
};

module.exports = deleteClient;
