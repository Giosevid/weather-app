const request = require("supertest");
const should = require('should');
const app = require("../app");

describe('should call services', () => {
  it("[GET]/v1/current", (done) => {
    request(app)
      .get('/v1/forecast')
      .expect(({body}) => {
        should(null).not.be.ok();
        should(body).be.instanceOf(Object)
      })
      .expect(200, done)
  })
})