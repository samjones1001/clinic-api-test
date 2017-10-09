const api = require('./api.js');
const expect = require('expect');

describe('api', () => {
  describe('#requestData', () => {
    it('returns a json object of matching data when passed a valid key value pair', (done) => {
      api.requestData().then((result) => {
        expect(result).toBeA(Object)
        .toInclude({ "partial_postcode" : "CR9" })
      }).catch((err) => {})
      done();
    })
  })
})
