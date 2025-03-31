import request from 'supertest';
import app from '../src/index'; 

describe('HealthRecords Endpoints', () => {
    it('debería obtener todos los historiares medicos', async () => {
      const respuesta = await request(app).get('/getAllHealthRecords');
      expect(respuesta.status).toBe(200);
    });

    it('debería obtener el historial medico por ID', async () => {
      const id="67eab915c7d16f9893820146"
      const respuesta = await request(app).get(`/getHealthRecordsById/${id}`);
      expect(respuesta.status).toBe(200);
    });
    it('debería obtener el historial medico por IdClinic', async () => {
      const id=23578
      const respuesta = await request(app).get(`/getHealthRecordsByIdClinic/${id}`);
      expect(respuesta.status).toBe(200);
    });

    it('debería crear un historial medico', async () => {
      const body = {
            idPatient:"67eab4f8c7d16f989382013a",
            allergics:[],
            hight:1.61,
            wight:60,
            age:31,
            idDoctor:45,
            idClinic:23578,
            lastAppointment:"2022-03-30T16:00:00Z"
        };
        const respuesta = await request(app).post('/createHealthRecords').send(body);
        expect(respuesta.status).toBe(201);
      });

      it('debería regresar un error al crear un un historial medico', async () => {
        const body = {};
          const respuesta = await request(app).post('/createHealthRecords').send(body);
          expect(respuesta.status).toBe(400);
        });

});