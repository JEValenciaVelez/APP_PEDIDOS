const { body } = require('express-validator');


const validatePostClient = [

  body('nombre')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .notEmpty()
    .withMessage('campo nombre no puede estar vacio'),

  body('apellidos')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .notEmpty()
    .withMessage('campo apellidos no puede estar vacio')
    .isLength({ min: 3, max: 50 })
    .withMessage('minimo 3 caracteres y maximo de 50 caracteres'),

  body('cedula')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .notEmpty()
    .withMessage('el campo de la cedula no puede estar vacio')
    .isLength({ min: 6, max: 50 })
    .withMessage('cedula debe ser minimo de seis caracteres y maximo de 50 caracteres'),

  body('direccion')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .isLength({ min: 5 })
    .withMessage('The address field must have more than 5 characters.')
    .notEmpty()
    .withMessage('Must provide an adress'),

  body('departamento')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .isLength({ min: 2 })
    .withMessage('The address field must have more than 2 characters.')
    .notEmpty()
    .withMessage('Must provide a country'),

  body('municipio')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .isLength({ min: 2 })
    .withMessage('The city field must have more than 2 characters.')
    .notEmpty()
    .withMessage('Must provide a city'),

  body('barrio')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .isLength({ min: 3 })
    .withMessage('The zip code field must have more than 3 characters.')
    .notEmpty()
    .withMessage('Must provide a zip code'),

  body('activo')
    .escape()
    .isBoolean(),

//   body('fechaDeNacimiento')
//     .escape()
//     .custom(validateISODateWithMilliseconds)
//     .isDate()
//     .withMessage('La fecha de nacimiento debe ser una fecha válida')
//     .custom((value, { req }) => {

//       const fechaNacimiento = new Date(value);
//       const fechaActual = new Date();
  
//       if (fechaNacimiento >= fechaActual) {
//         throw new Error('La fecha de nacimiento debe ser anterior a la fecha actual');
//       }
  
//       return true;
//     })
//     .optional(), // Marcar como opcional si no es requerido

    body('telefono')
    .isString()
    .withMessage('El número de teléfono debe ser una cadena de caracteres')
    .isLength({ min: 7, max: 15 })
    .withMessage('El número de teléfono debe tener entre 7 y 15 caracteres')
    .matches(/^\d+$/) // Valida que el número de teléfono consista en dígitos
    .withMessage('El número de teléfono debe contener solo dígitos')
    .optional() // Marcar como opcional si no es requerido
  
];

const validatePutClient = [

	body('nombre')
		.escape()
		.notEmpty()
		.withMessage('Debe proveer un nombre')
		.isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
		.withMessage('cedula debe ser string'),

	body('apellidos')
		.escape()
		.isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
		.isLength({ max: 50 })
		.withMessage('Nombre maxiomo de 50 caracteres'),

	body('cedula')
		.escape()
		.isString()
		.isLength({ max: 10 })
		.withMessage('maximo de 10 caracteres'),

  body('direccion')
		.escape()
		.notEmpty()
		.withMessage('Debe proveer una direccion')
		.isString()
		.withMessage('Direccion debe ser un string'),

  body('departamento')
		.escape()
		.notEmpty()
		.withMessage('Debe proveer un departamento')
		.isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
		.withMessage('Identification must be a string'),

  body('municipio')
		.escape()
		.notEmpty()
		.withMessage('Debe proveer un municipio')
		.isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
		.withMessage('Identification must be a string'),

  body('barrio')
		.escape()
		.notEmpty()
		.withMessage('debe proveer un barrio')
		.isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
		.withMessage('Identification must be a string'),

  
  body('telefono')
  .escape()
  .notEmpty()
  .withMessage('Debe proveer un número de teléfono')
  .isString()
  .isLength({ min: 7, max: 15 })
  .withMessage('El número de teléfono debe tener entre 7 y 15 caracteres')
  .customSanitizer(value => value.toLowerCase())

];

module.exports = {
	validatePostClient,
	validatePutClient,
};