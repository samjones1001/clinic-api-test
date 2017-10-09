## Clinic Api Test
[Dependencies](#dependencies) | [Setup](#setup) | [Usage Instructions](#usage-instructions) | 

## Brief
For this exercise we would like you to build a small microservice that provides data on UK clinics.
Your app should provide 2 data endpoints:
- /clinics/postcode/:postcode
  Provide a JSON response with results that match the full postcode only
  Each result item should include: organisation_id, name
- /clinics/city/:name
  Provide a JSON response with results that match the city
  Return a results object that contains all of the partial_postcodes found and how many of them where found

## Dependencies
"devDependencies": {
    "expect": "^1.20.2",
    "mocha": "^4.0.1",
    "supertest": "^3.0.0"
  },
 "dependencies": {
    "express": "^4.16.1"
 }
 
## Setup
* clone the repo
```shell
$ git clone https://github.com/samjones1001/clinic-api-test
```

* navigate into the cloned directory and install dependencies
```shell
$ cd clinic-api-test
$ npm install
```

* run tests
```shell
$ npm test
```

## Usage instructions
* navigate into the cloned directory and start the app server
```shell
$ cd clinic-api-test
$ node server/app.js
```

The application provides two end points
- /clinics/partial_postcode/:partial_postcode
- /clinics/city/:city

The endpoints can be accessed through a browser or from the command line using curl.

* browser
with the server running, open a browser and navigate to `localhost:3000` followed by your desired endpoint.
eg:
`localhost:3000/clinics/postcode/?partial_postcode=cr0`

* command line
with the server running, open a second command line terminal and use curl to make a request to your desired endpoint
eg:
```shell
curl http://localhost:3000/clinics/postcode/?partial_postcode=cr0
```


