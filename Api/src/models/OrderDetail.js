const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {

    sequelize.define('orderDetail', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        
        pedidoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'El campo pedidoId no puede ser nulo.',
            },
            isInt: {
            args: true,
            msg: 'El campo pedidoId debe ser un número entero válido.',
            },
        },
        },

        nombreProducto: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'El campo nombreProducto no puede ser nulo.',
            },
            len: {
            args: [1, 255], // Ajusta los límites de longitud según tus necesidades
            msg: 'El campo nombreProducto debe tener entre 1 y 255 caracteres.',
            },
        },
        },

        descripcionProducto: {
        type: DataTypes.STRING,
        allowNull: true, // Cambia a "false" si la descripción es obligatoria
        validate: {
            len: {
            args: [0, 1000], // Ajusta los límites de longitud según tus necesidades
            msg: 'La descripción del producto no puede exceder los 1000 caracteres.',
            },
        },
        },
        precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'El campo precio no puede ser nulo.',
            },
            isFloat: {
            args: true,
            msg: 'El campo precio debe ser un número decimal válido.',
            },
        },
        },

        iva: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notNull: {
            args: true,
            msg: 'El campo iva no puede ser nulo.',
            },
            isFloat: {
            args: true,
            msg: 'El campo iva debe ser un número decimal válido.',
            },
        },
        },
    })
}