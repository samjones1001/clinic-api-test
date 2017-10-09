var getPostcode = (data) => {
  var output = { "results" : [] }

  for (var i in data) {
    var item = data[i];
    output.results.push({
      "organisation_id" : item.organisation_id,
      "name" : item.name
    });
  }
  return output;
}

var getCity = (data) => {
  var resultsArr = data.map((item) => item.partial_postcode )
  var output = {};

  for(var i = 0; i < resultsArr.length; i++) {
    output[resultsArr[i]] = 1 + (output[resultsArr[i]] || 0);
  }
  return {"results": output};
}

module.exports = {
  getCity,
  getPostcode
}
