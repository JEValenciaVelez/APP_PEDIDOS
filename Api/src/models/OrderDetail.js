const { DataTypes } = require('sequelize')


module.exports = (sequelize) => {

    sequelize.define('orderDetail', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
          },
        
          pedidoId: {
            type: DataTypes.UUID, // Asegúrate de que el tipo de datos coincida con el de la clave primaria de "order"
            allowNull: false,
            validate: {
              notNull: {
                args: true,
                msg: 'El campo pedidoId no puede ser nulo.',
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
            args: [1, 255], 
            msg: 'El campo nombreProducto debe tener entre 1 y 255 caracteres.',
            },
         },
        },

        descripcionProducto: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
            len: {
            args: [0, 1000], 
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

        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              notNull: {
                args: true,
                msg: 'El campo cantidad no puede ser nulo.',
              },
              isInt: {
                args: true,
                msg: 'El campo cantidad debe ser un número entero válido.',
              },
              min: {
                args: 1, 
                msg: 'El campo cantidad debe ser al menos 1.',
              },
            },
          },

          codigoProducto: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notNull: {
                args: true,
                msg: 'El campo codigoProducto no puede ser nulo.',
              },
              len: {
                args: [1, 50], 
                msg: 'El campo codigoProducto debe tener entre 1 y 50 caracteres.',
              },
            },
          },

          marca: {
            type: DataTypes.STRING,
            allowNull: false, 
            validate: {
              len: {
                args: [0, 100], // Ajusta los límites de longitud según tus necesidades
                msg: 'El campo marca no puede exceder los 100 caracteres.',
              },
            },
          },
          
          categoria: {
            type: DataTypes.STRING,
            allowNull: true, // Cambia a "false" si la categoría es obligatoria
            validate: {
              len: {
                args: [0, 100], // Ajusta los límites de longitud según tus necesidades
                msg: 'El campo categoria no puede exceder los 100 caracteres.',
              },
            },
          },
    })
}