// app3.js
// making response

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

// instead of .write() and .end()
app.get('/', function(req, res) { 
	res.send('hello world');
}); 

app.get('/tiger.png', function(req, res) { 
	res.sendFile(__dirname+'/public/tiger.png');
});

app.get('/ipm', function(req, res) {
	res.redirect('http://www.ipm.edu.mo/');
}); 

app.listen(3000);


console.log('Server running at http://localhost:3000/');