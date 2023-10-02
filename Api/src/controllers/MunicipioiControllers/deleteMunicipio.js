const { Municipio } = require('../../db');

const deleteMunicipio = async (req, res) => {

    try {

        const { nombre } = req.body; 

        if (!nombre) {
            return res.status(400).send('Debe proporcionar el nombre del municipio a eliminar');
        }

        // Buscar clientes por su cédula
        const toDelete = await Municipio.findAll({
            where: {
                nombre
            }
        });

        if (toDelete.length === 0) {
            return res.status(404).send('No se encontraron municipios');
        }

        // Eliminar el cliente
        await Municipio.destroy({
            where: {
                nombre
            }
        });

        return res.status(200).send('municipio eliminado');

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar Cliente');
    }
};

module.exports = deleteMunicipio
