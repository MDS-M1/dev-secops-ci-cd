const request = require('supertest');
const { app, closeServer } = require('../index');

describe('User', () => {
  beforeAll(async () => {
    // Wait database connection before start tests
    await new Promise(res => setTimeout(res, 2000));
  });

  afterAll(() => {
    closeServer();
  });
  // Test the register endpoint
  describe('POST /register', () => {
    it('should register a new user', async () => {
      const newUser = {
        email: 'test@example.com',
        password: 'test123',
      };

      const response = await request(app)
        .post('/api/user/register')
        .send(newUser)
        .expect(200);
      console.log("TEST", response);

      expect(response.body.email).toBe(newUser.email);
    });

    it('should return an error if email or password is missing', async () => {
      const invalidUser = {
        email: 'test@example.com',
      };

      await request(app)
        .post('/api/user/register')
        .send(invalidUser)
        .expect(400);
    });
  });

  describe('POST /login', () => {
    it('should log in an existing user with correct credentials', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'test123',
      };

      await request(app)
        .post('/api/user/register')
        .send(credentials);

      await request(app)
        .post('/api/user/login')
        .send(credentials)
        .expect(200);
    });

    it('should return an error if email or password is incorrect', async () => {
      const credentials = {
        email: 'test@example.com',
        password: 'test123',
      };

      const invalidCredentials = {
        email: 'test@example.com',
        password: 'wrongpassword',
      };

      await request(app)
        .post('/api/user/register')
        .send(credentials);

      await request(app)
        .post('/api/user/login')
        .send(invalidCredentials)
        .expect(400);
    });
  });
});
