const { Departamento } = require('../../db');

const getDepartaments = async (req, res) => {
    
    const { nombre } = req.query;

    try {
        if (nombre) {
            const departamento = await Departamento.findOne({
                where: {
                    nombre
                }
            });

            if (!nombre) {
                return res.status(404).send(`No hay departamentos con nombre ${nombre}`);
            }

            return res.status(200).json( departamento );
        } else {

            const departamentos = await Departamento.findAll();

            if (departamentos.length === 0) {
                return res.status(404).send('No se encontraron Departamentos');
            }

            return res.status(200).json(departamentos);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener Departamentos' });
    }
};

module.exports = getDepartaments