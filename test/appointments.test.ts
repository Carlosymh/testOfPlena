import request from 'supertest';
import app from '../src/index'; 

describe('Appointments Endpoints', () => {
    it('It should get all the appointments', async () => {
      const response = await request(app).get('/getAllAppointments');
      expect(response.status).toBe(200);
    });

    it('It should get an appointment by ID', async () => {
      const id="67ea92b2f16ab6c6f064fec8"
      const response = await request(app).get(`/getAppointmentsById/${id}`);
      expect(response.status).toBe(200);
    });

    it('It should get your appointments through IdClinic', async () => {
      const id=23578
      const response = await request(app).get(`/getAppointmentsByIdClinic/${id}`);
      expect(response.status).toBe(200);
    });

    it('It should create a new appointment', async () => {
      const body = {
          date:"2022-05-25T14:00:00Z",
          description:"sourceEvent 23734149",
          idPatient:"67eab4f8c7d16f989382013a",
          idDoctor:56,
          idClinic:23578
        };
        const response = await request(app).post('/createAppointment').send(body);
        expect(response.status).toBe(201);
      });

      it('It should return an error when creating a new appointment', async () => {
        const body = {};
          const response = await request(app).post('/createAppointment').send(body);
          expect(response.status).toBe(400);
        });

});