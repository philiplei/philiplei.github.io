// weather2.js

var http = require('http'); 

// You can also specify parts of the URL
var options = {
  hostname: 'api.openweathermap.org',
  path: '/data/2.5/weather?q=Macau,mo&APPID=4947774ba7c33eb3fd77a42bf73dae1b'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// req is an ClientRequest object. It also implements a Writeable stream
// If you use http.request() instead of http.get(), 
// you must end the writable stream to indicate the end of the HTTP request.
req.end();