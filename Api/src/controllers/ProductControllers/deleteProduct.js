const { Product } = require('../../db');

const deleteProduct = async (req, res) => {

    try {

        const { codigo } = req.body; 

        if (!codigo) {
            return res.status(400).send('Debe proporcionar el codigo del producto ');
        }

        // Buscar ordenes por su numero de orden
        const productToDelete = await Product.findAll({
            where: {
                codigo
            }
        });

        if (productToDelete.length === 0) {
            return res.status(404).send('No se encontraron productos con el codigo proporcionado');
        }

        // Eliminar orden
        await Product.destroy({
            where: {
                codigo
            }
        });

        return res.status(200).json({ message: 'Producto eliminado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al eliminar el producto');
    }
};

module.exports = deleteProduct