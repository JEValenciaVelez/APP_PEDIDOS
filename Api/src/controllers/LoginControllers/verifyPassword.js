//funcion que me compara la contraseña con la contraseña enciptada en la base de datos
const { Usuario, Employee } = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const secret = JWT_SECRET;

const verifyPassword = async (req, res) => {

  const { usuario, contraseña } = req.body;

  try {
    if (!usuario) {
      return res.status(400).send('Se debe proveer usuario');
    }

    const userFound = await Usuario.findOne({
      where: { usuario },
    });

    const employeeFound = await Employee.findOne({
      where: { cedula: usuario },
    });

    if (!userFound) {
      return res.status(404).send('No se encontró registro de usuario en base de datos');
    }

    const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);

    if (isMatch) {
      const payload = {
        sub: usuario,
        role: employeeFound.tipoEmpleado,
      };
      //firmo el token
      const token = jwt.sign(payload, secret);

      return res.status(200).json({ payload, token });
    } else {
      return res.status(500).send(false);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = verifyPassword
