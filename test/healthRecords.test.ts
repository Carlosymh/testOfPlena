import request from 'supertest';
import app from '../src/index'; 

describe('HealthRecords Endpoints', () => {
    it('It should obtain all medical records', async () => {
      const response = await request(app).get('/getAllHealthRecords');
      expect(response.status).toBe(200);
    });

    it('It should obtain medical history by ID', async () => {
      const id="67eab915c7d16f9893820146"
      const response = await request(app).get(`/getHealthRecordsById/${id}`);
      expect(response.status).toBe(200);
    });

    it('It You should obtain your medical history through IdClinic', async () => {
      const id=23578
      const response = await request(app).get(`/getHealthRecordsByIdClinic/${id}`);
      expect(response.status).toBe(200);
    });

    it('It should create a medical history', async () => {
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
        const response = await request(app).post('/createHealthRecords').send(body);
        expect(response.status).toBe(201);
      });

      it('It should return an error when creating a medical record', async () => {
        const body = {};
          const response = await request(app).post('/createHealthRecords').send(body);
          expect(response.status).toBe(400);
        });

});