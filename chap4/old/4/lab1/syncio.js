// read and print the file 'data.txt'. Assume utf-8.

var fs = require('fs');
var data = fs.readFileSync('in.txt', { encoding: 'utf8' } );
fs.writeFileSync('out.txt', data, { enconding: 'utf8'} );