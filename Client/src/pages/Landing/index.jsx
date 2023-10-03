

function LandingPage() {


  return (

    <div>
      {/* Barra de navegación */}
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <div className="text-white text-2xl font-semibold">
            Pedidos & Entregas S.A
          </div>
          <ul className="flex space-x-4 text-white mt-4 justify-between">
            <div className="flex justify-normal">
            <li className="mr-2"><a href="/inicio" className="hover:underline ">Inicio</a></li>
            <li className="mr-2"><a href="/nosotros" className="hover:underline">Nosotros</a></li>
            <li><a href="/servicios" className="hover:underline">Servicios</a></li>
            </div>
            <div>
            <li><a href="/login" className="hover:underline">Login</a></li>
            </div>
            {/* Agregar más enlaces según sea necesario */}
          </ul>
        </div>
      </nav>

      {/* Sección de Inicio */}
      <section id="inicio" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Bienvenido a Pedidos & Entregas S.A</h2>
          <p className="mt-4 text-gray-600">Servicio líder en pedidos y entregas a domicilio.</p>
          {/* Aquí puedes agregar imágenes u otros elementos relacionados con la empresa */}
        </div>
      </section>

      {/* Sección Nosotros */}
      <section id="nosotros" className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Nosotros</h2>
          <p className="mt-4 text-gray-600">Somos una empresa comprometida con la satisfacción de nuestros clientes...</p>
          {/* Puedes agregar más información sobre la empresa */}
        </div>
      </section>

      {/* Sección Login */}
      <section id="servicios" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Servicios</h2>
          {/* Agregar aquí un formulario de inicio de sesión o enlace a la página de inicio de sesión */}
        </div>
      </section>

      {/* Otras secciones y contenido adicional */}
    </div>

  )
}

export default LandingPage
