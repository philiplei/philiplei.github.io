// read and print the file 'data.txt'. Assume utf-8.

var fs = require('fs');
fs.readFile('in.txt', { encoding: 'utf-8' }, function(err, data) {
	console.log(data)
});