const NavBarOrders = () => {

  
    return (


      <nav className="bg-blue-500 p-4 rounded-lg w-full flex justify-between">
        <ul className="flex justify-center space-x-4 ">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Volver</Link>
          </li>
          <li>
            <Link to="/productos" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Ordenes</Link>
          </li>
          <li>
            <Link to="/clientes" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Nueva orden</Link>
          </li>
          <li>
            <Link to="/usuarios" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Eliminar orden</Link>
          </li>
          <li>
            <Link to="/empleados" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Actualizar orden</Link>
          </li>
        </ul>
        <ul>
          <li>
          <input type="text" placeholder="Buscar orden" />
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBarOrders;