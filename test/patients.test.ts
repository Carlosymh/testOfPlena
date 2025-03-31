import request from 'supertest';
import app from '../src/index'; 

describe('Patients Endpoints', () => {
    it('It should get all the patients', async () => {
      const response = await request(app).get('/getAllPatients');
      expect(response.status).toBe(200);
    });

    it('It should get a patient by ID', async () => {
      const id="67ea92b2f16ab6c6f064fec8"
      const response = await request(app).get(`/getPatientsById/${id}`);
      expect(response.status).toBe(200);
    });
    it('It should create a patient', async () => {
      const body = {
          firstName:"Karla",
          lastName:"Esquivel Luna",
          phoneNumber:"5555555555",
          email:"Karla@example.com",
          birthday:"04/11/1993"
        };
        const response = await request(app).post('/createPatients').send(body);
        expect(response.status).toBe(201);
      });

      it('It should return an error when creating a patient', async () => {
        const body = {};
          const response = await request(app).post('/createPatients').send(body);
          expect(response.status).toBe(400);
        });

});