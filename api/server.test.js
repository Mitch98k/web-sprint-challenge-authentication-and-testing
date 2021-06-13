const request = require('supertest');
const server = require('./server');
const authRouter = require('./auth/auth-router');
const db = require('../data/dbConfig');
const Users = require('./auth/auth-model');

test('sanity', () => {
  expect(true).not.toBe(false)
});

describe('server', () => {
  describe('[POST] /register', () => {
    it('responds with status 201', async () => {
        const res = await request(authRouter).post('/register').send({ username: 'gary', password: 'password' });

        expect(res.status).toBe(201);
    });
  });
  
  describe('[post] /login', () => {
    it('responds with a token on successful login', () => {
        return require(authRouter).post('/login')
    })
  });
});
