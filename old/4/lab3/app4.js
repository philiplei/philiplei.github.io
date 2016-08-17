// app4.js
// the 'static' middleware, which serves static files

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

app.get('/', function (req, res) {
	res.redirect('/index.html');
});

app.use(express.static(__dirname + '/public'));

app.get('/tiger.png', function(req, res) {
	res.send('you should not see the tiger image');
});

app.listen(3000);


console.log('Server running at http://localhost:3000/');
