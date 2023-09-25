const { Employee } = require('../../db')

const postEmployee = async (req, res) => {
    
    console.log(req.body)

    try {
        
        const newUser = await Employee.create(req.body);
        return res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        // Envía una respuesta de error con el mensaje de error
        res.status(500).json({ error: error.message });
    }
};

module.exports = postEmployee