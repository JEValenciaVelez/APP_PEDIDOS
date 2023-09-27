import React, { useState } from 'react';
import axios from 'axios';


const Clients = () => {

  const [clientData, setClientData] = useState({
    nombre: '',
    apellidos: '',
    cedula: '',
    direccion: '',
    departamento: '',
    municipio: '',
    barrio: '',
    activo: true,
    fechaDeNacimiento: '',
    telefono: ''
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const sendClientData = async () => {

    console.log('data q se despacha al servidor',clientData)

    try {
      const response = await axios.post('http://localhost:3001/client', clientData);

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
          <label className="block text-gray-700">Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={clientData.nombre}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Apellidos:</label>
          <input
            type="text"
            name="apellidos"
            value={clientData.apellidos}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cedula: </label>
          <input
            type="text"
            name="cedula"
            value={clientData.cedula}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Direccion: </label>
          <input
            type="text"
            name="direccion"
            value={clientData.direccion}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Departamento: </label>
          <input
            type="text"
            name="departamento"
            value={clientData.departamento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Municipio: </label>
          <input
            type="text"
            name="municipio"
            value={clientData.municipio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Barrio: </label>
          <input
            type="text"
            name="barrio"
            value={clientData.barrio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de nacimiento: </label>
          <input
            type="text"
            name="fechaDeNacimiento"
            value={clientData.fechaDeNacimiento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Telefono: </label>
          <input
            type="text"
            name="telefono"
            value={clientData.telefono}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* Agrega más campos del formulario aquí */}
        <button
          type="button"
          onClick={sendClientData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Crear Cliente
        </button>
      </form>
    </div>
  );
};

export default Clients;
