// serv1.js
// a very simple HTTP server that returns a plain text response

var http = require('http');
var count = 10;
var server = http.createServer();

server.on('request', (req, resp) => {
  console.log(`request: url=${req.url}`);
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.write('Hello World \n');
  // you can resp.write() more ...
  resp.end();
  count--;
  if (count<=0) {
    // stop accepting new connection
    server.close();
  }
});

server.on('connection', (socket)=> {
  console.log(`connection: from ${socket.remoteAddress}:${socket.remotePort}`);
})

server.on('close', () => {
  console.log('close: ');
});

server.on('error', (error) => {
  console.log('error: ', JSON.stringify(error));
});

server.listen(88, () => {
  console.log('Server running at http://localhost:3000/');
});
