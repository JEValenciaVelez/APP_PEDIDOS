// Middleware de validación personalizado para fechas con milisegundos
const validateISODateWithMilliseconds = (value) => {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)) {
    throw new Error('La fecha de nacimiento debe ser una fecha válida en el formato especificado.');
  }
  return true;
}

module.exports = validateISODateWithMilliseconds