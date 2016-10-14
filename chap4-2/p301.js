// p301.js
// - GET the weather report from smg.gov.mo

var request = require('request');

var url = 'http://rss.smg.gov.mo/e_ActualWeather_rss.xml';

request.get(url, (err, res, body) => {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ');
  console.dir(res.headers);
  console.log(body);
});
