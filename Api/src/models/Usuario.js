const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')



module.exports = (sequelize) => {

  sequelize.define("usuario", {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    empleado: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'El campo empleado no puede ser nulo.',
        },
        len: {
          args: [1, 255], // Ajusta los límites de longitud según tus necesidades
          msg: 'El campo empleado debe tener entre 1 y 255 caracteres.',
        },
      },
    },

    usuario: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'El nombre de usuario ya está en uso.',
      },
      validate: {
        notNull: {
          args: true,
          msg: 'El campo usuario no puede ser nulo.',
        },
        len: {
          args: [4, 50], // Ajusta los límites de longitud según tus necesidades
          msg: 'El campo usuario debe tener entre 4 y 50 caracteres.',
        },
      },
    },

    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'El campo contraseña no puede ser nulo.',
        },
        len: {
          args: [8, 100], 
          msg: 'El campo contraseña debe tener al menos 8 caracteres.',
        },
      },

      set(value) {
        // Función de hash para encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = bcrypt.hashSync(value, 5); // 10 es el número de rondas de hash
        this.setDataValue('contraseña', hashedPassword);
      },
      
    },

    fechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'El campo fechaRegistro no puede ser nulo.',
        },
        isDate: {
          args: true,
          msg: 'La fecha de registro debe ser una fecha válida.',
        },
      },
    },
  });
};
