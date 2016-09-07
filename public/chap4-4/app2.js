// app2.js
// Building response

var express = require('express');
var app = express();

// multi-line response using template literals
// Express chooses content type text/html
app.get('/now', (req, res) => {
	var now = new Date();
	res.send(`<!doctype html>
<html>
  <body>
		<p>The time now is ${now.toLocaleString()}</p>
	</body>
</html>`);
});

// return a file as response
// Express determines content type according to file extension
app.get('/tiger.png', (req, res) => {
	// __dirname is the directory that the running script resides in
	res.sendFile(__dirname+'/public/tiger.png');
});

// redirect to IPM site
app.get('/ipm', function(req, res) {
	res.redirect('http://www.ipm.edu.mo/');
});

// matches any URL
app.get('*', function(req, res) {
	res.status(404).send(`<!doctype html>
<html>
<body>
  <p>This page is not available: ${req.url}</p>
	<p>Try the following paths:</p>
	<ul>
	  <li><a href="/now">/now</a> - shows current time
		<li><a href="/ipm">/ipm</a> - redirects to IPM site
		<li><a href="/tiger.png">/tiger.png</a> - returns an image file
	</ul>
</body>
</html>`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
