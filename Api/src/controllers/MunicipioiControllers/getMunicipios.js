const { Municipio } = require('../../db');

const getMunicipios = async (req, res) => {
    
    const { nombre } = req.query;

    try {
        if (nombre) {
            const municipio = await Municipio.findOne({
                where: {
                    nombre
                }
            });

            if (!nombre) {
                return res.status(404).send(`No hay municipios con nombre ${nombre}`);
            }

            return res.status(200).json( municipio );
        } else {

            const municipios = await Municipio.findAll();

            if (municipios.length === 0) {
                return res.status(404).send('No se encontraron Municipios');
            }

            return res.status(200).json(municipios);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener Departamentos' });
    }
};

module.exports = getMunicipios