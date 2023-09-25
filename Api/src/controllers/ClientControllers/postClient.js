const { Client } = require('../../db')

const postClient = async (req, res) => {

    try {
        
        const newClient = await Client.create(req.body);
        return res.status(201).json(newClient);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = postClient