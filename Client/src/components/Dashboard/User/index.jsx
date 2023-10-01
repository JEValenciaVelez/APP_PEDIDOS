// este componente me renderiza las funciones del vendedor de la empresa , funcion de crear cliente , actualizar cliente , tomar pedido , ver direccion del cliente


function EmployeePanel() {

  return (
    <div className="employee-panel bg-gray-200 p-4">
      <h2 className="text-lg font-semibold">Panel de Empleado</h2>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Buscar Clientes Activos</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Nombre del Cliente"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Lista de Productos Disponibles</h3>
        <input
          className="border rounded px-2 py-1 w-full"
          type="text"
          placeholder="Buscar por Nombre, Código, Categoría o Marca"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600">
          Buscar
        </button>
        {/* Aquí puedes mostrar la lista de productos */}
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Carrito de Compras</h3>
        {/* Aquí puedes mostrar y gestionar el carrito de compras */}
      </div>
      <div className="my-4">
        <h3 className="text-md font-semibold mb-2">Listar Empleados Entregadores</h3>
        <select className="border rounded px-2 py-1 w-full">
          {/* Aquí puedes listar los empleados entregadores */}
        </select>
      </div>
     
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
        Modulo Clientes
      </button>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600">
        Pedidos
      </button>
      {/* Agregar más botones y funcionalidades según las especificaciones */}
    </div>
  );
}

export default EmployeePanel;
