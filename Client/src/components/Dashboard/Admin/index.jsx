//modulo de funciones del administrador
import {useNavigate} from 'react-router-dom'


function AdminPanel() {

  const navigate = useNavigate()
  const showToOrders = () => {
    navigate('')
  }


  return (
    <div className="sidebar bg-gray-200 p-4">
      <h2 className="text-lg font-semibold">Panel de Control</h2>
      <button 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg my-2 hover:bg-blue-600"
      onClick={showToOrders}
      >
        Ver Total de Pedidos
      </button>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Búsqueda de Pedido</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Número de Orden"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Búsqueda por Rango de Fecha</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="date"
          placeholder="Desde"
        />
        <input
          className="border rounded px-2 py-1 w-full mt-2"
          type="date"
          placeholder="Hasta"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Pedidos por Empleado</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Nombre del Empleado"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Pedidos por Cliente</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Nombre del Cliente"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
        Módulo de Empleados
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
        Módulo de Ventas
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
        Módulo de Clientes
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
        Módulo de Productos
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
        Módulo de Categorías
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
        Módulo de Marcas
      </button>
    </div>
  );
  }
  
  export default AdminPanel
  