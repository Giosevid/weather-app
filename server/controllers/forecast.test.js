const request = require("supertest");
const should = require('should');
const app = require("../app");

describe('should call services', () => {
  it("[GET]/v1/forecast", (done) => {
    request(app)
      .get('/v1/forecast')
      .expect(({body}) => {
        should(null).not.be.ok();
        should(body).have.property('temp')
        should(body).have.property('temp_min')
        should(body).have.property('temp_max')
        should(body).have.property('city')
        should(body).have.property('weekDay')
        should(body).have.property('list').with.lengthOf(5);
      })
      .expect(200, done)
  })
})