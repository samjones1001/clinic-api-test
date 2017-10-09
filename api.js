const fs = require('fs');

var requestData = (paramValue, keyToMatch) => {
  return new Promise((resolve, reject) => {
    var fullDataset = fs.readFileSync('./sample-data.json');
    var requestedData = JSON.parse(fullDataset).result.filter((dataItem) => { return dataItem[keyToMatch].toUpperCase() === paramValue.toUpperCase( )});
    if (requestedData) {
      resolve(requestedData);
    }
      reject();
  });
}

module.exports = {
  requestData
}
