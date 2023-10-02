const { Departamento } = require('../../db');


const deleteDepartamento = async (req, res) => {

    try {

        const { nombre } = req.body; 

        if (!nombre) {
            return res.status(400).send('Debe proporcionar el nombre del municipio a eliminar');
        }

        // Buscar clientes por su cédula
        const toDelete = await Departamento.findAll({
            where: {
                nombre
            }
        });

        if (toDelete.length === 0) {
            return res.status(404).send('No se encontraron departamentos');
        }

        // Eliminar el cliente
        await Departamento.destroy({
            where: {
                nombre
            }
        });

        return res.status(200).send('departamento eliminado');

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar Departamento');
    }
};

module.exports = deleteDepartamento