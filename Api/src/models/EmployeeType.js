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
        notEmpty: true, // No debe estar vacío
        isIn: [['empleado', 'administrador']], // Valores permitidos
      },
    },

    codigo: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      unique: {
        name: 'codigo',
        msg: 'El código ya está en uso', // Mensaje personalizado para la restricción unique
      },
      validate: {
        notEmpty: {
          msg: "El código no puede estar vacío",
        }, // No debe estar vacío
        // isAlphanumeric: {
        //   msg: "El código debe contener solo letras y números",
        // }, // Debe contener solo letras y números
        len: {
          args: [1, 50],
          msg: "El código debe tener entre 1 y 50 caracteres",
        }, // Longitud entre 1 y 50 caracteres
      },
    },
  });
};
