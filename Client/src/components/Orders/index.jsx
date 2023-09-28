
import React, { useState } from 'react';
import axios from 'axios';


const Orders = () => {

  const [orderData, setOrdertData] = useState({
    id: '',
	numeroDeOrden: '',
	fechaDeRegistro: '',
	totalPrecio: 0,
	totalIva: 0.0,
	Departamento: '',
	ciudad: '',
	barrio: '',
	direccionDeEntrega: '',
	cliente: '',
	empleado:'' ,
	entregador: '',
	observacion: '',
  });

 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrdertData({ ...orderData, [name]: value });
  };

  const sendOrderData = async () => {

    console.log('data q se despacha al servidor', orderData)

    try {
      const response = await axios.post('http://localhost:3001/order', orderData);

      if (response.status === 201) {
        console.log('Orden creada exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear la orden:', error);
    }

  };

  return (
    <div className="container mx-auto px-4 py-4">
      <h2 className="text-2xl font-semibold mb-4">Crear Orden</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Numero de orden :</label>
          <input
            type="text"
            name="numeroDeOrden"
            value={orderData.numeroDeOrden}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de registro :</label>
          <input
            type="text"
            name="fechaDeRegistro"
            value={orderData.fechaDeRegistro}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Total precio: </label>
          <input
            type="number"
            name="totalPrecio"
            value={orderData.totalPrecio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Iva: </label>
          <input
            type="number"
            name="totalIva"
            value={orderData.totalIva}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Departamento: </label>
          <input
            type="text"
            name="Departamento"
            value={orderData.Departamento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ciudad: </label>
          <input
            type="text"
            name="ciudad"
            value={orderData.ciudad}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Barrio: </label>
          <input
            type="text"
            name="barrio"
            value={orderData.barrio}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Direccion de entrega: </label>
          <input
            type="text"
            name="direccionDeEntrega"
            value={orderData.direccionDeEntrega}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Fecha de nacimiento: </label>
          <input
            type="text"
            name="fechaDeNacimiento"
            value={orderData.fechaDeNacimiento}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Cliente: </label>
          <input
            type="text"
            name="cliente"
            value={orderData.cliente}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Empleado: </label>
          <input
            type="text"
            name="empleado"
            value={orderData.empleado}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Entregador: </label>
          <input
            type="text"
            name="entregador"
            value={orderData.entregador}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Observacion: </label>
          <input
            type="text"
            name="observacion"
            value={orderData.observacion}
            onChange={handleInputChange}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        {/* Agrega más campos del formulario aquí */}
        <button
          type="button"
          onClick={sendOrderData}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Crear Orden
        </button>
      </form>
    </div>
  );
};

export default Orders
