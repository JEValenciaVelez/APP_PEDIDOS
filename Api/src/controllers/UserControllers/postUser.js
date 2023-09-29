//en el archivo db.js se exporta sequelize.models como propiedad cuy valor es un objeto con los modelos(tablas) 
const { Usuario } = require('../../db')

const postUser = async (req, res) => {
    
    console.log(req.body)

    try {
        
        const newUser = await Usuario.create(req.body);
        //despues de crear el usuario , elimino la contraseña de la respuesta que voy a retornar , por proteccion de datos
        delete newUser.dataValues.contraseña
        return res.status(201).json(newUser);

    } catch (error) {
        console.error(error);
        // Envía una respuesta de error con el mensaje de error
        res.status(500).json({ error: error.message });
    }
};

module.exports = postUser;
