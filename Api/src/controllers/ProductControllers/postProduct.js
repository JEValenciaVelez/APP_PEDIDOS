const { Product } = require('../../db')

const postProduct = async (req, res) => {

    try {
        
        const newProduct = await Product.create(req.body);
        return res.status(201).json(newProduct);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = postProduct