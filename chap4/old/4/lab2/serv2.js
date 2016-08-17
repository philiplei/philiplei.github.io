// serv2.js
// A node.js example to demo how to handle request GET and POST 
// Use form.html to generate requests */

var http = require('http');
var url = require('url');

http.createServer(function (req, resp) {
  var body = '';
  req.on('data', function (chunk) { body+=chunk; } );
  req.on('end', function() { writeResponse(req, body, resp); });  
}).listen(3000);

function writeResponse(req, body, resp) {
  var query = url.parse(req.url, true).query;
  var headers = req.headers;
  resp.writeHead(200, {'Content-Type': 'text/html'});
  resp.write('<html>'+
             '<head><style>table { border-collapse: collapse; font-family: sans-serif; }'+
             'table td { padding: 5px 2px; border: 1px solid gray; }'+
             '</style></head>');
  resp.write('<body><table>');
  resp.write('<tr><td>method</td><td>'+req.method+'</td></tr>');
  resp.write('<tr><td>url</td><td>'+req.url+'</td></tr>');
  resp.write('<tr><td>query</td><td>'+JSON.stringify(query)+'</td></tr>');
  resp.write('<tr><td>headers</td><td>'+JSON.stringify(headers)+'</td></tr>');
  resp.write('<tr><td>body</td><td>'+body+'</td></tr>');
  resp.write('</table>');
  resp.end();
}

console.log('Server running at http://localhost:3000/');