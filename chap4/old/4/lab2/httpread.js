var http = require('http'); 
var options = {
  hostname: 'www.ipm.edu.mo',
  path: '/index.php/en/',
  method: 'GET'
};

var req = http.get(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});