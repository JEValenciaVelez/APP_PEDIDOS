const { body } = require('express-validator');
const validateISODate = require('../../middlewares/validator.date');
const validateCustomDate = require('../../middlewares/validator.date');
const validateISODateWithMilliseconds = require('../../middlewares/validator.date');

const validatePostClient = [

  body('nombre')
    .escape()
    .isString()
    .customSanitizer(value => value.toLowerCase()) // Convierte a minúsculas
    .notEmpty()
    .withMessage('Identification number cannot be empty'),

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
	body('identification')
		.escape()
		.notEmpty()
		.withMessage('Must provide an identification number')
		.isString()
		.withMessage('Identification must be a string'),
	body('first_name')
		.escape()
		.isString()
		.isLength({ max: 50 })
		.withMessage('Name length must be lower than 50 characters'),
	body('last_name')
		.escape()
		.isString()
		.isLength({ max: 50 })
		.withMessage('Last name length must be lower than 50 characters'),
	body('email').normalizeEmail().escape(),
	body('phone').escape(),
	body('check_in_date')
		.escape()
		.custom((value, { req }) => {
			const checkInDate = new Date(value);
			const checkOutDate = new Date(req.body.check_out_date);
			if (checkOutDate <= checkInDate) {
				throw new Error(
					'The check-out date must be after the check-in date.'
				);
			}
			return true;
		}),
	body('check_out_date').escape(),
	body('special_requirements').escape(),
];

module.exports = {
	validatePostClient,
	validatePutClient,
};