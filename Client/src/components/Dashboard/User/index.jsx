// este componente me renderiza las funciones del vendedor de la empresa , funcion de crear cliente , actualizar cliente , tomar pedido , ver direccion del cliente


import React, { useState, useEffect } from 'react';

const EmployeePanel = () => {
  // Estados para almacenar los datos
  const [clientesActivos, setClientesActivos] = useState([]);
  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [filtro, setFiltro] = useState({
    nombre: '',
    codigo: '',
    categoria: '',
    marca: '',
  });
  const [carrito, setCarrito] = useState([]);
  const [entregador, setEntregador] = useState('');
  const [mostrarResumen, setMostrarResumen] = useState(false);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [numeroOrden, setNumeroOrden] = useState('');

  // Función para buscar clientes activos (simulada)
  const buscarClientesActivos = () => {
    // // Lógica de búsqueda de clientes activos (puede ser una llamada a la API)
    // const clientes = [...]; // Datos de clientes obtenidos
    // setClientesActivos(clientes);
  };

  // Función para listar productos disponibles (simulada)
  const listarProductosDisponibles = () => {
    // // Lógica de obtención de productos disponibles (puede ser una llamada a la API)
    // const productos = [...]; // Datos de productos obtenidos
    // setProductosDisponibles(productos);
  };

  // Función para agregar productos al carrito
  const agregarAlCarrito = (producto) => {
    // // Lógica para agregar productos al carrito
    // // Actualizar el estado del carrito
    // const nuevoCarrito = [...carrito, producto];
    // setCarrito(nuevoCarrito);
  };

  // Función para calcular el total del pedido
  const calcularTotal = () => {
    // Lógica para calcular el total del pedido a partir del carrito
    // let total = 0;
    // carrito.forEach((producto) => {
    //   total += producto.precio;
    // });
    // return total;
  };

  // Función para finalizar el pedido
  const finalizarPedido = () => {
    // // Lógica para finalizar el pedido (puede ser una llamada a la API)
    // const numeroOrdenGenerado = '12345'; // Número de orden simulado
    // setNumeroOrden(numeroOrdenGenerado);
    // setMostrarModal(true);
    // // Limpiar el carrito y otros estados necesarios
    // setCarrito([]);
    // setEntregador('');
    // setMostrarResumen(false);
  };

  // useEffect(() => {
  //   // Cargar clientes activos y productos disponibles al cargar el componente
  //   buscarClientesActivos();
  //   listarProductosDisponibles();
  // }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Panel de Control del Empleado</h1>

      {/* Sección de búsqueda de clientes activos */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Buscar Clientes Activos</h2>
        {/* Aquí colocar el contenido relacionado con la búsqueda de clientes activos */}
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar clientes"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
          />
          
        </div>
      </div>


      {/* Sección de lista de productos disponibles */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Lista de Productos Disponibles</h2>
        {/* Filtros de búsqueda */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            className="border rounded px-2 py-1 w-1/4"
            placeholder="Nombre"
          />
          <input
            type="text"
            className="border rounded px-2 py-1 w-1/4"
            placeholder="Código"
          />
          <input
            type="text"
            className="border rounded px-2 py-1 w-1/4"
            placeholder="Categoría"
          />
          <input
            type="text"
            className="border rounded px-2 py-1 w-1/4"
            placeholder="Marca"
          />
        </div>
        {/* Lista de productos */}
        <ul>
          {/* Aquí colocar la lista de productos disponibles */}
        </ul>
      </div>

      {/* Sección de carrito de compras */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-xl font-semibold mb-2">Carrito de Compras</h2>
        {/* Lista de productos en el carrito */}
        <ul>
          {/* Aquí colocar la lista de productos en el carrito */}
        </ul>
        {/* Mostrar resumen del pedido */}
        {mostrarResumen && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            {/* Aquí mostrar el resumen del pedido */}
          </div>
        )}
        {/* Botón para finalizar pedido */}
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
          onClick={finalizarPedido}
        >
          Finalizar Pedido
        </button>
      </div>

      {/* Modal de confirmación */}
      {mostrarModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Muchas gracias por tu pedido
            </h2>
            <p>Tu pedido será entregado por "{entregador}"</p>
            <p>El número de orden de tu pedido es "{numeroOrden}"</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
              onClick={() => {
                setMostrarModal(false);
                // Redireccionar al usuario
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeePanel;
