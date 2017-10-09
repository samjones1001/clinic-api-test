const express = require('express');

const api = require('../api/api');
const buildResponse = require('../build-response/build-response');

var app = express()

app.get('/clinics/partial_postcode', (req, res) => {
  var postcode = req.query.partial_postcode;
  api.requestData(postcode, "partial_postcode").then((result, error) => {
    res.send(JSON.stringify(buildResponse.getPostcode(result), undefined, 2));
  }).catch((error) => {
    res.send(`Unable to locate postcode data for ${postcode}`);
  });
});

app.get('/clinics/city', (req, res) => {
  var city = req.query.city;
  api.requestData(city, "city").then((result, error) => {
    res.send(buildResponse.getCity(result));
  }).catch((error) => {
    res.send(`Unable to locate city data for ${city}`);
  });
})

module.exports.app = app;
app.listen(3000, () => {
  console.log("app running pont port 3000")
});
