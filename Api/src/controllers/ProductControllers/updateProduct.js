const { Product } = require('../../db');

const updateProduct = async (req, res) => {
    
    try {
        const {
            codigo,
            descripcion,
            marca,
            categoria,
            cantidadDisponible,
            habilitado,
            iva,
            cantidadVentas,
            precio
        } = req.body;

        if (!codigo) {
            return res.status(400).send('Debe proporcionar codigo del producto a actualizar');
        }

        // Buscar cliente por su cédula
        const productToUpdate = await Product.findOne({
            where: {
                codigo
            }
        });

        if (!productToUpdate) {
            return res.status(404).send('No se encontró un producto con el codigo proporcionado');
        }

        // Actualizar los campos del empleado con los valores proporcionados
        if (descripcion) productToUpdate.descripcion = descripcion
        if (marca) productToUpdate.marca = marca
        if (categoria) productToUpdate.categoria = categoria
        if (cantidadDisponible) productToUpdate.cantidadDisponible = cantidadDisponible
        if (habilitado) productToUpdate.habilitado = habilitado
        if (iva) productToUpdate.iva = iva
        if (cantidadVentas) productToUpdate.cantidadVentas = cantidadVentas
        if (precio) productToUpdate.precio = precio
        

        // Guardar los cambios en la base de datos
        await productToUpdate.save();

        return res.status(200).json({ message: 'producto actualizado con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar el producto');
    }
};

module.exports = updateProduct