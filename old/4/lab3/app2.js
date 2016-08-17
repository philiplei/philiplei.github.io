// app2.js
// routing

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

// instead of .write() and .end()
app.get('/', function(req, res) { 
	res.send('hello world');
}); 

// matches /user/543
app.get('/book/:bookid', function(req, res) { 
	res.send('retrieve book info. id = '+req.params.bookid);
});

// matches /user/321/upload/photo1.png, /user/321/upload/, /user/321/upload
app.get('/user/:userid/upload/:filename?', function(req, res) {
	res.send('download the file "'+req.params.filename
		+'" of user "'+req.params.userid);
}); 

// matches /admin, /admin/any/thing, /adminANYthing
app.get('/admin*', function(req, res) {
	res.send('any admin pages');
});

// matches /search?a=1&b=2
app.get('/search', function(req, res) { 
	res.send('search page, with query= '+JSON.stringify(req.query));
}); 

// matches /comp312/submit/p101234
app.get(/(comp\d\d\d)\/submit\/(p\d{6})/, function(req, res) {
	res.send('course '+ req.params[0] + ', student ' + req.params[1]);
});


// matches any URL
app.get('*', function(req, res) {
	res.send('this matches any thing');
})

app.get('/unreachable', function(req, res) {
	res.send('this route is never visited.');
})


app.listen(3000);


console.log('Server running at http://localhost:3000/');