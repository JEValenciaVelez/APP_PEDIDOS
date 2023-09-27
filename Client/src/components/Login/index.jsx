import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {  getEmployees, getUsers } from '../../redux/actions';
import { useNavigate }  from 'react-router-dom'

const Login = () => {
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const dispatch = useDispatch()
  const users = useSelector(state=> state.users)
  const employees = useSelector(state => state.employees)
  const navigate = useNavigate()


  useEffect(()=>{
    dispatch(getUsers())
  },[dispatch])

 

  const filteredUser = users?.filter(user => user.usuario === inputUsername)
  console.log('usuario filtrado -> ', filteredUser)


  // console.log(`empleado del estado global -> ${typeof employees}`)

  // useEffect(()=>{
  //   dispatch(getEmployees())
  // },[dispatch])


  // console.log(`empleado del estado global -> ${employees}`)
  


  const handleLogin = () => {
    console.log(`user: ${inputUsername}, contraseña: ${inputPassword}`)
    if(filteredUser.length > 0){
      if (inputUsername === filteredUser[0].usuario && inputPassword === filteredUser[0].contraseña) {
        alert('Inicio de sesión exitoso')
        // if(employees)
        navigate('/home')
      }else{
        alert('usuario o contraseña incorrecto')
      }
    } else {
      alert('Inicio de sesión fallido');
    }
  }
  

 

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        <div className="mb-4">
          <label className="block text-gray-700">usuario:</label>
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
}

export default Login
