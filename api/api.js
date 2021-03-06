const fs = require('fs');
const _ = require('lodash');

var requestData = (paramValue, keyToMatch) => {
  return new Promise((resolve, reject) => {
    var fullDataset = fs.readFileSync('api/sample-data.json');
    var param = paramValue.split(' ')[0];
    var requestedData = JSON.parse(fullDataset).result.filter((dataItem) => { return dataItem[keyToMatch].toUpperCase() === param.toUpperCase( )});
    if (!isEmptyObject(requestedData)) {
      resolve(requestedData);
    }
      reject();
  });
}

var isEmptyObject = (object) => {
    return _.isEmpty(object);
}

module.exports = {
  requestData
}
