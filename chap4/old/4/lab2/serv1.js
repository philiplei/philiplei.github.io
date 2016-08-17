// serv1.js
// a very simple HTTP server that returns a plain text response

var http = require('http');

http.createServer(function (req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.write('Hello World \n');
  // you can resp.write() more ...
  resp.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');