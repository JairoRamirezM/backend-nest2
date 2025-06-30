import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';

describe('OperacionesController (e2e)', () => {
    let app: INestApplication<App>;
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    });
  
    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'suma', a: 30, b: 30 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(60);
        });
    });

    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'resta', a: 40, b: 30 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(10);
        });
    });

    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'multiplicacion', a: 10, b: 3 })
        .expect(200)
        .expect('Content-type', /application\/json/)
        .then((response) => {
          expect(response.body.resultado).toBe(30);
        });
    });

    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'division', a: 100, b: 10 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(10);
      });
    });

    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'potencia', a: 3, b: 3 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(27);
      });
    });

    it('/operaciones (GET)', () => {
      return request(app.getHttpServer())
      .get('/operaciones')
      .query({ operacion: 'factorial', a: 3, b: 0 })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response) => {
        expect(response.body.resultado).toBe(6);
      });
    });

    it('/operaciones (GET) operacion invalida division', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'Error', a: 5, b: 0 })
        .expect(502)
        .expect('Content-type', /application\/json/)
        .then((response) => {       
          expect(response.body.mensaje).toBe('operacion no pudo ser calculada');
        });
    });  

    it('/operaciones (GET) with invalid operation', () => {
      return request(app.getHttpServer())
        .get('/operaciones')
        .query({ operacion: 'Error', a: 20, b: 7 })
        .expect(502)
        .expect('Content-type', /application\/json/)
        .then((response) => {       
          expect(response.body.mensaje).toBe('operacion no pudo ser calculada');
        });
    });  
});
