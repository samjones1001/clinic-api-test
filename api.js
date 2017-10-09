const fs = require('fs');

var requestData = (paramValue, keyToMatch) => {
  return new Promise((resolve, reject) => {
    var fullDataset = fs.readFileSync('./playground/sample-data.json');
    var requestedData = JSON.parse(fullDataset).result.filter((dataItem) => { return dataItem[keyToMatch].toUpperCase() === paramValue.toUpperCase( )});
    console.log(requestedData);
    if (requestedData) {
      resolve(requestedData);
    }
    reject("error");
  });
}

module.exports = {
  requestData
}
