import request from 'supertest';
import app from '../src/index'; 

describe('Appointments Endpoints', () => {
    it('debería obtener todas las citas', async () => {
      const respuesta = await request(app).get('/getAllAppointments');
      expect(respuesta.status).toBe(200);
    });

    it('debería obtener una cita por ID', async () => {
      const id="67ea92b2f16ab6c6f064fec8"
      const respuesta = await request(app).get(`/getAppointmentsById/${id}`);
      expect(respuesta.status).toBe(200);
    });
    it('debería obtener las citas por IdClinic', async () => {
      const id=23578
      const respuesta = await request(app).get(`/getAppointmentsByIdClinic/${id}`);
      expect(respuesta.status).toBe(200);
    });

    it('debería crear una nueva cita', async () => {
      const nuevaCita = {
          date:"2022-05-25T14:00:00Z",
          description:"sourceEvent 23734149",
          idPatient:"67eab4f8c7d16f989382013a",
          idDoctor:56,
          idClinic:23578
        };
        const respuesta = await request(app).post('/createAppointment').send(nuevaCita);
        expect(respuesta.status).toBe(201);
      });

      it('debería regresar un error al crear una nueva cita', async () => {
        const nuevaCita = {};
          const respuesta = await request(app).post('/createAppointment').send(nuevaCita);
          expect(respuesta.status).toBe(400);
        });

});