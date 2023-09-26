const { Product } = require('../../db');

const getProduct = async (req, res) => {
    
    const { codigo } = req.query;

    try {
        if (codigo) {

            const product = await Order.findOne({
                where: {
                    codigo
                }
            });

            if (!product) {
                return res.status(404).send(`No hay producto con el codigo ${codigo}`);
            }

            return res.status(200).json({ product });

        } else {
            const products = await Product.findAll();

            if (products.length === 0) {
                return res.status(404).send('No se encontraron ordenes');
            }

            return res.status(200).json({ products });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error al obtener productos' });
    }
};

module.exports = getProduct