cTest of Plena: API de Horarios Médicos
Este proyecto es una API RESTful desarrollada con Node.js y TypeScript que permite gestionar y consultar horarios de médicos en la base de datos plena. La API utiliza un archivo JSON para obtener la disponibilidad de los médicos y proporciona endpoints para acceder a esta información.

Requisitos Previos
Antes de comenzar, asegúrate de tener instalado lo siguiente:

Node.js (v14 o superior)
npm (o yarn)
MongoDB (v4.4 o superior)
Configuración
Clona el repositorio:

Bash

git clone <URL_DEL_REPOSITORIO>
cd test-of-plena
Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:

MONGODB_URI=<URL_DE_CONEXIÓN_A_MONGODB>
SQUEDULES_FILE_PATH=<RUTA_AL_ARCHIVO_JSON_DE_HORARIOS>
PORT=<PUERTO_EN_EL_QUE_CORRERÁ_LA_API>
Reemplaza <URL_DE_CONEXIÓN_A_MONGODB> con la URL de conexión a tu base de datos MongoDB.
Reemplaza <RUTA_AL_ARCHIVO_JSON_DE_HORARIOS> con la ruta al archivo JSON que contiene los horarios de los médicos.
Reemplaza <PUERTO_EN_EL_QUE_CORRERÁ_LA_API> con el puerto en el que deseas que se ejecute la API (por ejemplo, 3000).

Instala las dependencias:
Bash

npm install

Ejecuta la API:
Bash

npm  start

corre las pruebas :
Bash

npm  test

La API estará disponible en http://localhost:<PUERTO>, donde <PUERTO> es el puerto que especificaste en el archivo .env.

Estructura del Proyecto
test-of-plena/
├── src/
│   ├── controllers/
│   │   ├── appointmentsController.ts
│   │   ├── schedulesController.ts
│   │   ├── healthRecordsController.ts
│   │   └── patientsController.ts
│   ├── db/
│   │   └── database.ts
│   ├── models/
│   │   ├── appointmentsModels.ts
│   │   ├── healthRecordsModels.ts
│   │   ├── patientsModels.ts
│   │   └── schedulesModels.ts
│   ├── routes/
│   │   └── index.ts
│   ├── utils/
│   │   └── logger.ts
│   │   └── Schedule.ts
│   │   └── validateBodyMiddleware.ts
│   └── index.ts
├── test/
│   ├── appointments.test.ts
│   ├── schedules.test.ts
│   ├── patients.test.ts
│   └── healthRecords.test.ts
├── package.json
├── app.log
├── env.d.ts
├── jest.config.js
├── tsconfig.json
├── nodemon.json
├── pruebaTecnica.json
├── .env
└── README.md
Endpoints
La API proporciona los siguientes endpoints:

Horarios de citas:
GET /getAllAppointments: Obtiene todas las citas.
GET /getAppointmentsByIdPatient/:idPatient: Obtiene las citas de un paciente por su ID.
GET /getAppointmentsByIdDoctor/:idDoctor: Obtiene las citas de un médico por su ID.
GET /getAppointmentsByIdClinic/:idClinic: Obtiene las citas de una clínica por su ID.
GET /getAppointmentsById/:id: Obtiene una cita por su ID.
POST /createAppointment: Crea una nueva cita.
PUT /updateAppointment/:id: Actualiza una cita existente.
DELETE /deleteAppointment/:id: Elimina una cita.
Horarios de médicos:
GET /doctors/availability: Obtiene todos los horarios de los médicos.
Historiales clínicos:
GET /getAllHealthRecords: Obtiene todos los historiales clínicos.
GET /getHealthRecordsByIdPatient/:idPatient: Obtiene los historiales clínicos de un paciente por su ID.
GET /getHealthRecordsByIdDoctor/:idDoctor: Obtiene los historiales clínicos de un médico por su ID.
GET /getHealthRecordsByIdClinic/:idClinic: Obtiene los historiales clínicos de una clínica por su ID.
GET /getHealthRecordsById/:id: Obtiene un historial clínico por su ID.
POST /createHealthRecords: Crea un nuevo historial clínico.
PUT /updateHealthRecords/:id: Actualiza un historial clínico existente.
DELETE /deleteHealthRecords/:id: Elimina un historial clínico.
Pacientes:
GET /getAllPatients: Obtiene todos los pacientes.
GET /getPatientsById/:id: Obtiene un paciente por su ID.
POST /createPatients: Crea un nuevo paciente.
PUT /updatePatients/:id: Actualiza un paciente existente.
DELETE /deletePatients/:id: Elimina un paciente.
Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea1 una nueva rama con tu función o corrección: git checkout -b mi-feature   
1.
github.com
github.com
Realiza tus cambios y commitea: git commit -am 'Añade nueva funcionalidad'
Sube tus cambios a la rama: git push origin mi-feature
Crea un pull request.
Licencia
Este proyecto está bajo la Licencia MIT.