const { Order } = require('../../db');

const updateOrder = async (req, res) => {
    
    try {
        const {
            numeroDeOrden,
            fechaDeRegistro,
            totalPrecio,
            totalIva,
            departamento,
            ciudad,
            barrio,
            direccionDeEntrega,
            cliente,
            empleado,
            entregador,
            observacion
        } = req.body;

        if (!numeroDeOrden) {
            return res.status(400).send('Debe proporcionar numero de orden de la orden a actualizar');
        }

        // Buscar cliente por su cédula
        const orderToUpdate = await Client.findOne({
            where: {
                numeroDeOrden
            }
        });

        if (!orderToUpdate) {
            return res.status(404).send('No se encontró una orden con el numero de orden proporcionado');
        }

        // Actualizar los campos del empleado con los valores proporcionados
        if (fechaDeRegistro) orderToUpdate.fechaDeRegistro = fechaDeRegistro
        if (totalPrecio) orderToUpdate.totalPrecio = totalPrecio
        if (totalIva) orderToUpdate.totalIva = totalIva
        if (departamento) orderToUpdate.departamento = departamento
        if (ciudad) orderToUpdate.ciudad = ciudad
        if (barrio) orderToUpdate.barrio = barrio
        if (direccionDeEntrega) orderToUpdate.direccionDeEntrega = direccionDeEntrega
        if (cliente) orderToUpdate.cliente = cliente
        if (empleado) orderToUpdate.empleado = empleado
        if (entregador) orderToUpdate.entregador = entregador
        if (observacion) orderToUpdate.observacion = observacion

        // Guardar los cambios en la base de datos
        await orderToUpdate.save();

        return res.status(200).json({ message: 'Orden actualizada con éxito' });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Error al actualizar la orden');
    }
};

module.exports = updateOrder