const { Order } = require('../../db');

const getOrder = async (req, res) => {
    
    const { numeroDeOrden } = req.query;

    try {
        if (numeroDeOrden) {

            const order = await Order.findOne({
                where: {
                    numeroDeOrden
                }
            });

            if (!order) {
                return res.status(404).send(`No hay orden con el numero de orden ${order}`);
            }

            return res.status(200).json({ order });

        } else {
            const orders = await Order.findAll();

            if (orders.length === 0) {
                return res.status(404).send('No se encontraron ordenes');
            }

            return res.status(200).json({ orders });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener ordenes' });
    }
};

module.exports = getOrder;