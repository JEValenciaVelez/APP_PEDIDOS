const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('municipio', {

    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No debe estar vacío
        len: [2, 255], // Longitud entre 2 y 255 caracteres
      },
    },
    
    departamento: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No debe estar vacío
        len: [2, 255], // Longitud entre 2 y 255 caracteres
      },
    },
   
  });
};
