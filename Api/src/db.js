require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/orders_admin`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

// const sequelize = new Sequelize(DB_DEPLOY, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { 
  Employee, 
  EmployeeType, 
  Order, 
  OrderDetail, 
  Usuario,  
} = sequelize.models;
// console.log(`employe: ${Employee}, type employe: ${EmployeeType}`)

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Define las relaciones

Employee.belongsToMany(EmployeeType, {
  through: 'EmployeeEmployeeType', // Nombre de la tabla intermedia
  foreignKey: 'employeeId', // Clave foránea que hace referencia al ID de Employee
  otherKey: 'employeeTypeId', // Clave foránea que hace referencia al ID de EmployeeType
});

// En el modelo "EmployeeType"
EmployeeType.belongsToMany(Employee, {
  through: 'EmployeeEmployeeType', // Nombre de la tabla intermedia
  foreignKey: 'employeeTypeId', // Clave foránea que hace referencia al ID de EmployeeType
  otherKey: 'employeeId', // Clave foránea que hace referencia al ID de Employee
});


// En el modelo "order"
Order.hasMany(OrderDetail, {
  foreignKey: 'pedidoId', // Nombre de la columna de clave foránea en "orderDetail"
  as: 'orderDetails', // Alias para la relación (puedes elegir cualquier nombre)
});

// En el modelo "orderDetail"
OrderDetail.belongsTo(Order, {
  foreignKey: 'pedidoId', // Nombre de la columna de clave foránea en "orderDetail"
  as: 'order', // Alias para la relación (puedes elegir cualquier nombre)
});


Usuario.belongsTo(Employee, {
  foreignKey: 'usuario', // Nombre de la columna de clave foránea en Usuario
  targetKey: 'cedula', // Nombre de la columna de destino en Employee
  as: 'employee', // Alias de la relación (opcional)
});




// console.log(sequelize.models);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};