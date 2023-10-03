import React, { useState } from 'react';
import axios from 'axios';


const Users = () => {

  const [Data, setData] = useState({
    usuario: '',
    empleado: '',
    contraseña: '',
    fechaRegistro: '',
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const sendData = async () => {

    console.log('data q se despacha al servidor',Data)

    try {
      const response = await axios.post('http://localhost:3001/client', Data);

      if (response.status === 201) {
        console.log('Cliente creado exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }

  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-semibold mb-4">Crear Cliente</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario:</label>
          <input
            type="text"
            name="usuario"
            value={Data.usuario}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Empleado:</label>
          <input
            type="text"
            name="empleado"
            value={Data.empleado}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña: </label>
          <input
            type="text"
            name="contraseña"
            value={Data.contraseña}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de registro: </label>
          <input
            type="text"
            name="fechaRegistro"
            value={Data.fechaRegistro}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <button
          type="button"
          onClick={sendData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default Users
