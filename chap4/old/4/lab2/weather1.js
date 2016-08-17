// weather1.js

var http = require('http'); 


var options = 'http://api.openweathermap.org/data/2.5/weather?q=Macau,mo&APPID=4947774ba7c33eb3fd77a42bf73dae1b';

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

// http.get() automatically 'end' the request message.