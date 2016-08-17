// copy file in.txt to out.txt. use async.series()

var fs = require('fs');
var async = require('async')

var locals = {};

async.series([
	// first task: read from in.txt and save content in locals.data
	function (callback) {
		fs.readFile('in.txt', { encoding: 'utf8' }, function(err, data) {
			if (err) return callback(err);
			locals.data = data;
			callback();
		});
	},
	// second task: write content in locals.data to out.txt
	function (callback) {
		fs.writeFile('out.txt', locals.data, { encoding: 'utf8' }, function(err) {
			if (err) return callback(err);
			callback();
		} );
	}
], function(err) {
	if (err) throw err;
	console.log('finish copying.');

});

/*
console.log('finish copying.');
fs.readFile('in.txt', { encoding: 'utf8' }, function(err, data) {
	if (err) throw err;
	console.log(data);
	fs.writeFile('out.txt', data, { encoding: 'utf8' }, function(err) {
		if (err) throw err;
		console.log('finish copying.');
	} );
});
*/