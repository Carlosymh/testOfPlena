import request from 'supertest';
import app from '../src/index'; 

describe('Paciente Endpoints', () => {
    it('debería obtener todas las pacientes', async () => {
      const respuesta = await request(app).get('/getAllPatients');
      expect(respuesta.status).toBe(200);
    });

    it('debería obtener una paciente por ID', async () => {
      const id="67ea92b2f16ab6c6f064fec8"
      const respuesta = await request(app).get(`/getPatientsById/${id}`);
      expect(respuesta.status).toBe(200);
    });
    it('debería crear una paciente', async () => {
      const body = {
          firstName:"Karla",
          lastName:"Esquivel Luna",
          phoneNumber:"5555555555",
          email:"Karla@example.com",
          birthday:"04/11/1993"
        };
        const respuesta = await request(app).post('/createPatients').send(body);
        expect(respuesta.status).toBe(201);
      });

      it('debería regresar un error al crear una paciente', async () => {
        const body = {};
          const respuesta = await request(app).post('/createPatients').send(body);
          expect(respuesta.status).toBe(400);
        });

});