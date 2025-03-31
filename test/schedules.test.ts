import request from 'supertest';
import app from '../src/index'; 

describe('doctors availability Endpoints', () => {
    it('debería obtener lo Horarios disponibles ', async () => {
        const response = await request(app).get('/doctors/availability');
        expect(response.status).toBe(200);
        expect(response.type).toBe('application/json');
        expect(response.body).toBeDefined();
    });
});