var net = require('net');

var server = net.createServer();

server.on('connection', (socket) => {
  socket.setEncoding('utf8');
  //socket.end('goodbye\n');
  socket.on('data', (data)=>{
    console.log('Receive: ', data);
    socket.write(`[${data}]`);
  });

});

server.on('error', (err) => {
  // handle errors here
  throw err;
});

server.on('listening', () => {
  address = server.address();
  console.log('opened server on %j', address);
});

// grab a random port.
server.listen(3000);
