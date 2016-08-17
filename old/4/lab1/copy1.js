// copy file in.txt to out.txt. Asynchronous version

var fs = require('fs');
fs.readFile('in.txt', { encoding: 'utf8' }, function(err, data) {
	if (err) throw err;
	console.log(data);
	fs.writeFile('out.txt', data, { encoding: 'utf8' }, function(err) {
		if (err) throw err;
		console.log('finish copying.');
	} );
});