const { Order } = require('../../db')

const postOrder = async (req, res) => {

    try {
        
        const newOrder = await Order.create(req.body);
        return res.status(201).json(newOrder);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = postOrder