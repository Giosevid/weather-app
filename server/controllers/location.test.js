const request = require("supertest");
const should = require('should');
const app = require("../app");

describe('should call services', () => {
  it("[GET]/v1/location", (done) => {
    request(app)
      .get('/v1/location')
      .expect(({body}) => {
        should(null).not.be.ok();
        should(body).have.property('status')
        should(body).have.property('country')
        should(body).have.property('countryCode')
        should(body).have.property('region')
        should(body).have.property('regionName')
        should(body).have.property('city')
        should(body).have.property('zip')
        should(body).have.property('lat')
        should(body).have.property('lon')
        should(body).have.property('timezone')
        should(body).have.property('isp')
        should(body).have.property('org')
        should(body).have.property('as')
        should(body).have.property('query')
      })
      .expect(200, done)
  })
})