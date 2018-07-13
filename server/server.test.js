const request = require('supertest');
const app = require('./server.js').app;
const expect = require('expect');

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .expect(404)
        .end(done)
    });
  });

  describe('GET /users', () => {
    it('should return all users', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Sofiane',
            age: 25
          })
        })
        .end(done);
    });
  });
});
