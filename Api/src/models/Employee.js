const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define("employee", {

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

    apellidos: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true, // No debe estar vacío
        len: [2, 255], // Longitud entre 2 y 255 caracteres
      },
    },

    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: 'cedula',
        msg: 'La cédula ya está en uso', // Mensaje personalizado para la restricción unique
      },
      // validate: {
      //   notEmpty: true, // No debe estar vacío
      //   is: /^[0-9]{11}$/i, // Debe ser un número de cédula válido (ajusta la expresión regular según tu país)
      // },
    },

    direccion: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    departamento: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    municipio: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    barrio: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    tipoEmpleado: {
      type: DataTypes.ENUM('empleado', 'administrador'),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    
    

    salario: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true, // Debe ser un número decimal
        min: 0, // Valor mínimo
      },
    },

    fechaDeNacimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Valor predeterminado: fecha actual
      validate: {
        isDate: true, // Validar que la fecha sea una fecha válida
        // isBefore: DataTypes.NOW, // Validar que la fecha sea anterior a la fecha actual
      },
    },

    telefono: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^[0-9]{7,15}$/i, // Debe ser un número de teléfono válido (ajusta la expresión regular según tus necesidades)
      },
    },
  });
  
};
