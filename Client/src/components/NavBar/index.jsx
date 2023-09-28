
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación



const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 rounded-lg w-full flex justify-between">
      <ul className="flex justify-center space-x-4 ">
        <li>
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Inicio</Link>
        </li>
        <li>
          <Link to="/productos" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Productos</Link>
        </li>
        <li>
          <Link to="/clientes" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Clientes</Link>
        </li>
        <li>
          <Link to="/usuarios" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Usuarios</Link>
        </li>
        <li>
          <Link to="/empleados" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">empleados</Link>
        </li>
      </ul>
      <ul>
        <li>
        <Link to="/login" className="text-white hover:text-gray-300 transition duration-300 ease-in-out">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
