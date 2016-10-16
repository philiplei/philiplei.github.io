// p201.js
var http = require('http');
var server = http.createServer();

server.on('request', (req, resp) => {
  console.log(`request: url=${req.url}`);
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.write('Hello World \n');
  // you can resp.write() more ...
  resp.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
