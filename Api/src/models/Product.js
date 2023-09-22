const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("product", {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: 'codigo',
        msg: 'El código ya está en uso', // Mensaje personalizado para la restricción unique
      },
      validate: {
        notEmpty: {
          msg: "El código no puede estar vacío",
        }, // No debe estar vacío
        isAlphanumeric: {
          msg: "El código debe contener solo letras y números",
        }, // Debe contener solo letras y números
        len: {
          args: [1, 50],
          msg: "El código debe tener entre 1 y 50 caracteres",
        }, // Longitud entre 1 y 50 caracteres
      },
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "La descripción no puede estar vacía",
          }, // No debe estar vacío
          len: {
            args: [1, 255],
            msg: "La descripción debe tener entre 1 y 255 caracteres",
          }, // Longitud entre 1 y 255 caracteres
        },
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "La descripción no puede estar vacía",
          }, // No debe estar vacío
          len: {
            args: [1, 255],
            msg: "La descripción debe tener entre 1 y 255 caracteres",
          }, // Longitud entre 1 y 255 caracteres
        },
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "La descripción no puede estar vacía",
          }, // No debe estar vacío
          len: {
            args: [1, 255],
            msg: "La descripción debe tener entre 1 y 255 caracteres",
          }, // Longitud entre 1 y 255 caracteres
        },
    },
    cantidadDisponible: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'La cantidad disponible debe ser un número entero.',
          },
          min: {
            args: [0],
            msg: 'La cantidad disponible debe ser un número positivo o igual a cero.',
          },
          max: {
            args: [1000], // Cambia este valor según tus requisitos
            msg: 'La cantidad disponible no puede superar cierto límite.',
          },
        },
    },
    habilitado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
          esBooleano: function(value) {
            if (typeof value !== 'boolean') {
              throw new Error('El campo "habilitado" debe ser un valor booleano (true o false).');
            }
          },
        },
    },
    cantidadVentas: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'La cantidad de ventas debe ser un número decimal (punto flotante).',
          },
          min: {
            args: [0.0], // Cambia este valor si quieres un valor mínimo diferente
            msg: 'La cantidad de ventas no puede ser negativa.',
          },
        },
    },
    iva: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'El iva debe ser un número decimal (punto flotante).',
          },
          min: {
            args: [0.0], // Cambia este valor si quieres un valor mínimo diferente
            msg: 'El iva no puede ser negativo.',
          },
        },
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          isFloat: {
            msg: 'El precio debe ser un número decimal (punto flotante).',
          },
          min: {
            args: [0.0], // Cambia este valor si quieres un precio mínimo diferente
            msg: 'El precio no puede ser negativo.',
          },
        },
    },
      
      
  });
};
