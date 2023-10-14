## **📋 PARA COMENZAR...**

1. Deberás forkear este repositorio para tener una copia del mismo en tu cuenta personal de GitHub.

2. Clona el repositorio en tu computadora para comenzar a trabajar. Este repositorio contiene un **`BoilerPlate`** con la estructura general del proyecto, tanto del servidor como del cliente. El boilerplate cuenta con dos carpetas: **`api`** y **`client`**. En estas carpetas estará el código del back-end y el front-end respectivamente.

3. En la carpeta **`api`** deberás crear un archivo llamado: **`.env`** que tenga la siguiente forma:

   ```env
      # para base de datos
        DB_USER=postgres
        DB_PASSWORD=yourpassword
        DB_HOST=localhost:5432

        # puerto del servidor
        DB_PORT=yourport

        # para autentificacion de usuarios jwt
        API_KEY=yourapikey
        JWT_SECRET=yoursecret

        # credenciales para el servicio de nodemailer
        USER=youremail
        PASS=yourpasswordmailforapi

   ```

4. Reemplazar **`usuariodepostgres`** y **`passwordDePostgres`** con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

5. Adicionalmente será necesario que crees, **desde psql (shell o PGAdmin)**, una base de datos llamada **`orders_admin`**. Si no realizas este paso de manera manual no podrás avanzar con el proyecto.

<br />

---


## **📁 INSTRUCCIONES**

</div>

<br />

### **🖱 BASE DE DATOS**

La base de datos cuenta con los siguientes modelos , para el manejo, control y administracion de la data

**📍 MODELO 1 | Employee**

-  id \*
-  nombre. \*
-  apellidos. \*
-  cedula. \*
-  direccion. \*
-  departamento. \*
-  municipio. \*
-  barrio. \*
-  tipoEmpleado. \*
-  salario. \*

<br />

**📍 MODELO 2 | EmployeeType**

-  id. \*
-  descripcion. \*
-  codigo. \*

<br />

**📍 MODELO 3 | EmployeeType**

-  id. \*
-  descripcion. \*
-  codigo. \*

<br />

**📍 MODELO 4 | Client**

-  id. \*
-  nombre. \*
-  apellidos. \*
-  cedula. \*
-  direccion. \*
-  departamento. \*
-  muinicipio. \*
-  barrio. \*
-  activo. \*
-  fechaDeNacimiento. \*
-  telefono. \*

<br />

**📍 MODELO 5 | Product**

-  id. \*
-  codigo. \*
-  nombre. \*
-  descripcion. \*
-  marca. \*
-  cantidadDisponible. \*
-  habilitado. \*
-  cantidadVentas. \*
-  iva. \*
-  precio. \*

<br />

**📍 MODELO 6 | Order**

-  id. \*
-  numeroDeOrden. \*
-  totalPrecio. \*
-  totalIva. \*
-  departamento. \*
-  ciudad. \*
-  barrio. \*
-  direccionDeEntrega. \*
-  cliente. \*
-  empleado. \*
-  entregador. \*
-  observacion. \*

<br />

**📍 MODELO 7 | OrderDetail**

-  id. \*
-  pedidoId. \*
-  nombreProducto. \*
-  descripcionProducto. \*
-  precio. \*
-  iva. \*
-  cantidad. \*
-  codigoProducto. \*
-  marca. \*
-  categoria. \*

<br />

**📍 MODELO 8 | Usuario**

-  id. \*
-  empleado. \*
-  usuario. \*
-  contraseña. \*
-  fechaRegistro. \*


<br />

**📍 MODELO 9 | Departamento**

-  id. \*
-  nombre. \*


<br />

**📍 MODELO 10 | Municipio**

-  id. \*
-  nombre. \*
-  departamento. \*

<br />

---

<br />

### **🖱 BACK-END**

Se construye servidor utilizando **NodeJS** y **Express**. Conectado a base de datos mediante **Sequelize**.

El servidor cuenta con las siguientes rutas :

#### **📍 GET | /employee**

-  Obtiene un arreglo de objetos, donde cada objeto es un empleado con su información.


#### **📍 GET | /employee?cedula="cedula del empleado"**

-  Esta ruta debe obtener un empleado con la cedula recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el empleado, debe mostrar un mensaje adecuado.


#### **📍 POST | /employee**

-  Esta ruta recibirá todos los datos necesarios para crear un empleado y relacionarlo con el usuario y tipo de empleado
-  Toda la información debe ser recibida por body.
-  Debe crear un empleado en la base de datos, y este debe estar relacionado con su usuario y typo de empleado

#### **📍 PUT | /employee**

-  actualiza un empleado enviando la cedula por body , y los demas campos a actualizar

<br />

#### **📍 DELETE | /employee**

-  Elimina un empleado de la base de datos , proporcionando la cedula por body

<br />

#### **📍 GET | /user**

-  Obtiene un arreglo de objetos, donde cada objeto es un usuario con su información.


#### **📍 GET | /user?usuario="cedula del usuario"**

-  Esta ruta debe obtener un usuario con la ceedula recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el usuario, debe mostrar un mensaje adecuado.


#### **📍 POST | /user**

-  Esta ruta recibirá todos los datos necesarios para crear un usuario y relacionarlo con el  empleado
-  Toda la información debe ser recibida por body.
-  Debe crear un usuario en la base de datos, y este debe estar relacionado con un empleado

#### **📍 PUT | /user**

-  actualiza un usuario enviando la cedula por body , y los demas campos a actualizar

<br />

#### **📍 DELETE | /user**

-  Elimina un usuario de la base de datos , proporcionando la cedula por body

<br />


#### **📍 GET | /client**

-  Obtiene un arreglo de objetos, donde cada objeto es un cliente con su información.


#### **📍 GET | /client?cedula="cedula del cliente"**

-  Esta ruta debe obtener un cliente con la cedula recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el cliente, debe mostrar un mensaje adecuado.


#### **📍 POST | /client**

-  Esta ruta recibirá todos los datos necesarios para crear un cliente
-  Toda la información debe ser recibida por body.
-  Debe crear un cliente en la base de datos

#### **📍 PUT | /client**

-  actualiza un cliente enviando la cedula por body , y los demas campos a actualizar

<br />

#### **📍 DELETE | /client**

-  Borrado logico del cliente , proporcionando la cedula por body

<br />


#### **📍 GET | /order**

-  Obtiene un arreglo de objetos, donde cada objeto es un pedido con su información.


#### **📍 GET | /order?numeroDeOrden="..."**

-  Esta ruta debe obtener un pedido con el numero de orden recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el pedido, debe mostrar un mensaje adecuado.


#### **📍 POST | /order**

-  Esta ruta recibirá todos los datos necesarios para crear un pedido
-  Toda la información debe ser recibida por body.
-  Debe crear un pedido en la base de datos

#### **📍 PUT | /order**

-  actualiza un pedido enviando el numero de orden por body , y los demas campos a actualizar

<br />

#### **📍 DELETE | /order**

-  elimina un pedido , proporcionando el numero de orden por body

<br />


#### **📍 GET | /departament**

-  Obtiene un arreglo de objetos, donde cada objeto es un departamento con su información.


#### **📍 GET | /departament?nombre="..."**

-  Esta ruta debe obtener un departament con el nombre recibido por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el departamento, debe mostrar un mensaje adecuado.


#### **📍 POST | /departament**

-  Esta ruta recibirá todos los datos necesarios para crear un departamento
-  Toda la información debe ser recibida por body.
-  Debe crear un departamento en la base de datos



#### **📍 DELETE | /departament**

-  Elimina un departamento de la base de datos , proporcionando el nombre por body

<br />


#### **📍 GET | /municipio**

-  Obtiene un arreglo de objetos, donde cada objeto es un municipio con su información.


#### **📍 GET | /municipio?nombre="..."**

-  Esta ruta debe obtener un municipio con el nombre recibida por query.
-  Debe poder buscarlo independientemente de mayúsculas o minúsculas.
-  Si no existe el municipio, debe mostrar un mensaje adecuado.


#### **📍 POST | /municipio**

-  Esta ruta recibirá todos los datos necesarios para crear un municipio
-  Toda la información debe ser recibida por body.
-  Debe crear un municipio en la base de datos


#### **📍 DELETE | /municipio**

-  Elimina un municipio , proporcionando el nombre por body

<br />


#### **📍 POST | /login**

-  Esta ruta recibirá todos los datos necesarios para autentificar el usuario 
-  Se envian el usuario y la contraseña por body.

<br />

---

<br />

### **🖱 FRONT-END**

Se desarrolla las interfaces de usuaario utilizando **React** y **Redux** y contienen  las siguientes vistas:

**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

-  Alguna imagen de fondo representativa al proyecto.
-  Botón para ingresar al **`login`**.

<br />

