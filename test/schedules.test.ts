import request from 'supertest';
import app from '../src/index'; 

describe('doctors/availability Endpoints', () => {
    it('debería obtener lo Horarios disponibles ', async () => {
      const respuesta = await request(app).get('/doctors/availability');
      expect(respuesta.status).toBe(200);
    });

   
});