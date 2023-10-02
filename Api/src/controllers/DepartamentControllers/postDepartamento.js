const { Departamento } = require('../../db')

const postDepartamento = async (req, res) => {

    try {
        
        const newDepartamento = await Departamento.create(req.body);
        return res.status(201).json(newDepartamento);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = postDepartamento