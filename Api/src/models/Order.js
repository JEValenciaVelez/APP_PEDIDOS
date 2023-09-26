const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("order", {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    numeroDeOrden: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        // validate: {
        //   notNull: {
        //     args: true,
        //     msg: 'El campo numeroDeOrden no puede ser nulo.',
        //   },
        //   isInt: {
        //     args: true,
        //     msg: 'El campo numeroDeOrden debe ser un número entero válido.',
        //   },
        // },
      },

    fechaDeRegistro: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: {
            args: true,
            msg: 'La fecha de registro debe ser una fecha válida.',
          },
          notNull: {
            args: true,
            msg: 'La fecha de registro no puede ser nula.',
          },
        },
      },

      totalPrecio: {
        type: DataTypes.FLOAT, 
        allowNull: false,
        validate: {
          isFloat: {
            args: true,
            msg: 'El campo totalPrecio debe ser un número decimal válido.',
          },
        },
      },

      totalIva: {
        type: DataTypes.FLOAT, 
        allowNull: false,
        validate: {
          isFloat: {
            args: true,
            msg: 'El campo totalIva debe ser un número decimal válido.',
          },
        },
      },

      Departamento: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo Departamento no puede ser nulo.',
          },
        },
      },

      ciudad: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo ciudad no puede ser nulo.',
          },
        },
      },

      barrio: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo barrio no puede ser nulo.',
          },
        },
      },

      direccionDeEntrega: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo direccionDeEntrega no puede ser nulo.',
          },
        },
      },

      cliente: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo cliente no puede ser nulo.',
          },
        },
      },

      empleado: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo empleado no puede ser nulo.',
          },
        },
      },

      entregador: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'El campo entregador no puede ser nulo.',
          },
        },
      },

      observacion: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
  });
  
};
