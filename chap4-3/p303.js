// p303.js
// - saves the response of a POST request to the file timetab.html

var request = require('request');
var fs = require('fs');

var form = {
  p_escl_cod: 5,
  p_turno: 'D',
  p_curso: '4LCDI',
  p_ling: '',
  Submit2: 'Search',
  action: 'search',
  la: 'en',
  p_year_sem: '2015/2016-1',
  // p_sp_year: 3,
  p_class_code: '1121'
};

var options = {
  url: 'https://wapps.ipm.edu.mo/siweb/time_prog.asp',
  form: form
};

request.post(options, (err, res, body) => {
  if (err) throw err;
  console.log('HTTP status: ' + res.statusCode);
  // write the HTML response body to an HTML file
  fs.writeFile('timetab.html', body, 'utf8', (err)=> {} );
});
