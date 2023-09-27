// componente Layout va a ser un componente encapsulador, este componente sera encargado de encapsular todas las vistas o paginas , y dentro tenga cualquier elemento



import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {children}
    </div>
  );
};
