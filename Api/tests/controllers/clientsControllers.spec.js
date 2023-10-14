const { expect } = require('chai');
const postClient = require('../../src/controllers/ClientControllers/postClient')
const { conn } = require('../../src/db')



describe("ClientControllers", () => {

    before(async () => {
      // Conectar a la base de datos de pruebas antes de las pruebas
      await conn.sync({ force: true }); // Esto creará las tablas en la base de datos de pruebas
    })

    after(async () => {
      // Desconectar de la base de datos después de las pruebas
      await conn.close();
    })

    describe("postClient", () => {
      it("me crea un cliente y me responde con status 200", async () => {
        const req = {
          body: {
            nombre: "Test Name",
            apellidos: "Test Last Name",
            cedula: "Test cedula",
            direccion: "Campestre",
            departamento: "Risaralda",
            municipio: "Dosquebradas",
            barrio: "Campestre",
            activo: true,
            fechaDeNacimiento: "1991-08-04",
            telefono: "3102557896"
          },
        };
  
        const res = {
          status: (statusCode) => {
            expect(statusCode).to.equal(200);
            return res;
          },
          json: (data) => {
            // Verifica la respuesta JSON aquí si es necesario
            console.log(data)
          },
        };
  
        await postClient(req, res);
      });
  
      // Agrega más pruebas para el controlador aquí
    });

    
  });
  