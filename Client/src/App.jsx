import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


import Login from './components/Login';
import HomeEmployee from './pages/HomeEmployee';
import LandingPage from './pages/Landing';
import HomeAdmin from './pages/HomeAdmin';
import './App.css';


function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated && userType === 'empleado' ? (
              <Navigate to="/homeEmployee" />
            ) : isAuthenticated && userType === 'administrador' ? (
              <Navigate to="/homeAdmin" />
            ) : (
              <Login setisAuthenticated={setisAuthenticated} setUserType={setUserType} />
            )
          }
        />
        <Route
          path="/homeEmployee"
          element={isAuthenticated && userType === 'empleado' ? <HomeEmployee /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/homeAdmin"
          element={isAuthenticated && userType === 'administrador' ? <HomeAdmin /> : <Navigate to="/login" replace />}
        />
        <Route path="/" element={<LandingPage />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App;
