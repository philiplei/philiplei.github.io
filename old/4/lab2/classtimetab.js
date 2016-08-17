// classtimetab.js
// - saves the response of a POST request to the file timetab.html

// the website uses HTTPS
var http = require('https'); 
var fs = require('fs');

var ws = fs.createWriteStream('timetab.html', {encoding: 'utf8'});

var query = 'p_escl_cod=5&p_turno=D&p_curso=4LCDI&p_ling=&p_year_sem=2015%2F2016-1&p_sp_year=3&p_class_code=31121&Submit2=Search&action=search&la=en';

// You can also specify parts of the URL
var options = {
  hostname: 'wapps.ipm.edu.mo',
  path: '/siweb/time_prog.asp',
  method: 'POST',
  headers: { 
    'Content-type': 'application/x-www-form-urlencoded',
    'Content-length': query.length
  }
};


var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  // IncomingMessage is a readable stream. Therefore we can pipe it to the output file stream
  res.pipe(ws);
});


// req is an ClientRequest object. It also implements a Writeable stream.
// Write the HTTP request body for this POST request.
req.write(query);
req.end();