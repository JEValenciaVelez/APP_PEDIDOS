const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("employeeType", {
    
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
  });
};
