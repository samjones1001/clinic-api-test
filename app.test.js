const request = require('supertest');
const expect = require('expect');

var app = require('./app.js').app

describe('app', () => {
  describe('GET /clinics/partial_postcode', () => {
    it('returns formatted data if located for supplied param', (done) => {
      request(app)
      .get('/clinics/partial_postcode/?partial_postcode=cr9')
      .expect((res) => {
        expect(200)
        expect(res.text).toInclude('"organisation_id": "58961"')
      }).end(done);
    })
  })

  describe('GET /clinics/city', () => {
    it('returns formatter data if located for supplied param', (done) => {
      request(app)
      .get('/clinics/city/?city=croydon')
      .expect((res) => {
        expect(200)
        expect(res.text).toInclude('"CR9":2')
      }).end(done)
    })
  })
})
