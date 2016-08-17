// classtimetab.js
// - saves the response of a POST request to the file timetab.html

var request = require('request');
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

var form = {
  p_escl_cod: 5,
  p_turno: 'D',
  p_curso: '4LCDI',
  p_ling: '',
  p_year_sem: '2015/2016-1',
  p_sp_year: 3,
  p_class_code: '31121',
  Submit2: 'Search',
  action: 'search',
  la: 'en'
};

var url = 'https://wapps.ipm.edu.mo/siweb/time_prog.asp';

request.post({ url: url, form: form }, (err, res, body) => {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  fs.writeFile('timetab.html', body, 'utf8', (err)=> {} );
});
