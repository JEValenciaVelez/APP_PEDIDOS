const { Order } = require('../../db');

const deleteOrder = async (req, res) => {

    try {

        const { numeroDeOrden } = req.body; 

        if (!numeroDeOrden) {
            return res.status(400).send('Debe proporcionar el numero de orden de la orden a eliminar');
        }

        // Buscar ordenes por su numero de orden
        const orderToDelete = await Order.findAll({
            where: {
                numeroDeOrden
            }
        });

        if (orderToDelete.length === 0) {
            return res.status(404).send('No se encontraron ordenes con el numero de orden proporcionado');
        }

        // Eliminar orden
        await Order.destroy({
            where: {
                numeroDeOrden
            }
        });

        return res.status(200).json({ message: 'Orden eliminada con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar la orden');
    }
};

module.exports = deleteOrder
