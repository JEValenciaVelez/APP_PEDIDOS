import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomeAdmin } from './pages/HomeAdmin';
import Login from './components/Login';
import './App.css';
import { HomeEmployee } from './pages/HomeEmployee';

function App() {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated && userType === 'empleado' ? (
              <Navigate to="/homeEmployee" />
            ) : isAuthenticated && userType === 'administrador' ? (
              <Navigate to="/homeAdmin" />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/homeEmployee" element={isAuthenticated ? <HomeEmployee /> : <Navigate to="/login" replace />} />
        <Route path="/homeAdmin" element={isAuthenticated && userType === 'administrador' ? <HomeAdmin /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login setisAuthenticated={setisAuthenticated} setUserType={setUserType} />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App
