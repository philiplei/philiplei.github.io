var net = require('net');
var sock = new net.Socket();

sock.connect({host: 'localhost', port: 3000});
sock.setEncoding('utf8');

sock.on('connect', ()=>{
  console.log('Connection established');
  sock.write('hello');
});

sock.on('data', (data)=>{
  console.log('Receive: ', data);
});

sock.on('error', ()=>{
  console.log('Error: ');
});
