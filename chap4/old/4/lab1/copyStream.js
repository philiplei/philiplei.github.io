// read the file 'in.txt' using stream. Assume utf-8.

var fs = require('fs');
var rs = fs.createReadStream('in.txt', {encoding: 'utf8'});
var ws = fs.createWriteStream('out.txt', {encoding: 'utf8'});

rs.on('data', function(data) {
  // for brevity of output, only print first 20 bytes of each chunk
  console.log('-- Receive: ', data.slice(0,20));
  ws.write(data);
});

rs.on('end', function() {
  console.log('-- END OF STREAM --')
  ws.end();
});

rs.on('error', function () {
  console.log('-- ERROR reading from stream')
});