const { Municipio } = require('../../db')

const postMunicipio = async (req, res) => {

    try {
        
        const newMunicipio = await Municipio.create(req.body);
        return res.status(201).json(newMunicipio);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = postMunicipio