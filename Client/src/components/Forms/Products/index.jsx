import React, { useState } from 'react';
import axios from 'axios';


const Product = () => {

  const [Data, setData] = useState({
    descripcion: '',
    codigo: '',
    marca: '',
    categoria: '',
    cantidadDisponible: 0,
    habilitado: true,
    iva: 0.0,
    cantidadVentas: 0,
    precio: 0.0,
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };

  const sendClientData = async () => {

    console.log('data q se despacha al servidor', Data)

    try {
      const response = await axios.post('http://localhost:3001/product', Data);

      if (response.status === 201) {
        console.log('Cliente creado exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }

  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-semibold mb-4">Crear Producto</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Descripcion:</label>
          <input
            type="text"
            name="descripcion"
            value={Data.descripcion}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Codigo:</label>
          <input
            type="text"
            name="codigo"
            value={Data.codigo}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Marca: </label>
          <input
            type="text"
            name="marca"
            value={Data.marca}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700"> Categoria: </label>
          <input
            type="text"
            name="categoria"
            value={Data.categoria}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cantidad disponible: </label>
          <input
            type="number"
            name="cantidadDisponible"
            value={Data.cantidadDisponible}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Iva: </label>
          <input
            type="text"
            name="iva"
            value={Data.iva}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cantidad ventas: </label>
          <input
            type="number"
            name="cantidadVentas"
            value={Data.cantidadVentas}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Precio: </label>
          <input
            type="number"
            name="precio"
            value={Data.precio}
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
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default Product;
