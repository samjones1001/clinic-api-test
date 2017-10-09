const request = require('supertest');
const expect = require('expect');

var app = require('./app.js').app

describe('app', () => {
  describe('GET /clinics/postcode', () => {
    it('returns formatted data if located for supplied param', (done) => {
      request(app)
      .get('/clinics/postcode/?partial_postcode=cr9')
      .expect(200)
      .expect((res) => {
        expect(res.text).toInclude('"organisation_id": "58961"')
      }).end(done);
    });

    it('returns an error if no data located for supplied param', (done) => {
      request(app)
      .get('/clinics/postcode/?partial_postcode=e1')
      .expect(200)
      .expect((res) => {
        expect(res.text).toBe('Unable to locate postcode data for e1')
      }).end(done);
    });
  });

  describe('GET /clinics/city', () => {
    it('returns formatter data if located for supplied param', (done) => {
      request(app)
      .get('/clinics/city/?city=croydon')
      .expect(200)
      .expect((res) => {
        expect(res.text).toInclude('"CR9":2')
      }).end(done);
    });

    it('returns an error if no data located for supplied param', (done) => {
      request(app)
      .get('/clinics/city/?city=london')
      .expect(200)
      .expect((res) => {
        expect(res.text).toBe('Unable to locate city data for london')
      }).end(done);
    });
  })
})
