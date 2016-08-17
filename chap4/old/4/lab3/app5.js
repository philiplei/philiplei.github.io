// app5.js
// POST and bodyParser

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
	res.redirect('/form.html');
});

app.post('/save', function(req, res) {
	res.send('body content: '+ JSON.stringify(req.body));
	// e.g. req.body.nickname
})

app.use(express.static(__dirname + '/public'));


app.listen(3000);


console.log('Server running at http://localhost:3000/');
