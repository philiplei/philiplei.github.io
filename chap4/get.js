// get.js
var http = require('http');

//var url = 'http://www.ipm.edu.mo/';
var url = 'http://abc.ipm.edu.mo/abc.html';

var req = http.get(url);

req.on('response', (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (err) => {
  console.log('Error is ', JSON.stringify(err));
});
