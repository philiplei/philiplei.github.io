// app1.js
// first express example

var express = require('express');

var app = express();

app.get('/', function(req, res) { 
	res.send('hello world');
}); 

app.listen(3000);

console.log('Server running at http://localhost:3000/');
