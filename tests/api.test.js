const { expect } = require('chai');
const supertest = require('supertest');

describe('One Chat Room API', function() {
  it('should create a message', async function() {

    const requestBody = { author: 'SuperTest', contents: 'Hello API' };
    const response = await supertest('http://localhost:3000')
        .post('/api/messages')
        .send(requestBody);

    expect(response.status).to.equal(201);
    expect(response.body.author).to.equal('SuperTest');
    expect(response.body.contents).to.equal('Hello API');
    expect(response.body.id).to.be.a('string');
    expect(response.body.createdAt).to.be.a('string');
    expect(response.body.updatedAt).to.be.a('string');
  });
});