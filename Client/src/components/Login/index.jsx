import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../config/axios';

const Login = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const navigate = useNavigate();

  const userLogin = async (user, password) => {
    try {

      const reqBody = {
        usuario: user,
        contraseña: password
      }


      const response = await axiosInstance.post('/login', reqBody)
      const data = response.data
      return data
    } catch (error) {
      console.error(error.message)
      throw error
    }
  };

  const handleLogin = async () => {
    try {
      const result = await userLogin(inputUsername, inputPassword);

      if (result === 'empleado') {
        alert('Inicio de sesión exitoso');
        navigate('/homeEmployee');
      } else if (result === 'administrador') {
        alert('Inicio de sesión exitoso');
        navigate('/homeAdmin');
      } else {
        alert('Usuario o contraseña inválidos');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error al iniciar sesión');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">APP COMPANY</h1>
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Usuario:</label>
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Contraseña:</label>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            className="w-full border-gray-300 border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
        >
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
