import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('e2e 테스트', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('AppController', () => {
    it('/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });

    it('/name?name=fastcampus (GET)', () => {
      return request(app.getHttpServer())
        .get('/name?name=fastcampus')
        .expect(200)
        .expect('fastcampus hello');
    });

    it('[로그인]', () => {
      return request(app.getHttpServer())
        .post('/login')
        .send({
          username: 'fastcampus2024',
          password: 'fastcampuspassword',
        })
        .expect(201);
    });
  });

  describe('BoardController', () => {
    it('게시글 가져오기', () => {
      return request(app.getHttpServer()).get('/board').expect(200);
    });
  });

  describe('UserController', () => {});
});
