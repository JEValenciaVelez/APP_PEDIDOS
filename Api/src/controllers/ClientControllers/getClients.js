const { Client } = require('../../db');

const getClients = async (req, res) => {
    
    const { cedula } = req.query;

    try {
        if (cedula) {
            const client = await Client.findOne({
                where: {
                    cedula: cedula
                }
            });

            if (!client) {
                return res.status(404).send(`No hay clientes con la cédula ${cedula}`);
            }

            return res.status(200).json({ client });
        } else {
            const clients = await Client.findAll();

            if (clients.length === 0) {
                return res.status(404).send('No se encontraron clientes');
            }

            return res.status(200).json({ clients });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener clientes' });
    }
};

module.exports = getClients;
