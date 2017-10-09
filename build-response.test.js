const buildResponse = require('./build-response');
const expect = require('expect');

var inputData = [{
  "name" : "a clinic",
  "organisation_id" : "12345",
  "partial_postcode" : "E1"
}]

describe('buildResponse', () => {
  describe('#getPostcode', () => {
    it('returns an object with names and organisation ids', () => {
      expect(buildResponse.getPostcode(inputData)).toEqual({
         "results": [ { "organisation_id": "12345", "name": "a clinic" } ]
      });
    });
  });

  describe('#getCity', () => {
    it('returns an object a count of postcodes', () => {
      expect(buildResponse.getCity(inputData)).toEqual({
         "results": { "E1": 1 }
      });
    });
  })
})
