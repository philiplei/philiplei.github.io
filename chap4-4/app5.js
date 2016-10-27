// app5.js
// Handling GET form data submission

var express = require('express');
var app = express();

app.get('/form1.html', (req, res) => {
	res.send(`<!doctype html>
<html>
<body>
	<p>Enter 2 numbers to add:</p>
	<form action='/add' method='GET'>
    <p>a: <input name='a' type='text'/>
    <p>b: <input name='b' type='text'/>
		<p><button type='submit'>Calculate a+b</button>
	</form>
</body>
</html>`);
});

app.get('/add', (req, res) => {
  var a = parseFloat(req.query.a);
  var b = parseFloat(req.query.b);
  res.send(`${a} + ${b} = ${a+b}`);
});

// matches any URL
app.get('*', function(req, res) {
	res.status(404).send(`<!doctype html>
<html>
<body>
  <p>This page is not available: ${req.url}</p>
	<p>Try the following paths:</p>
	<ul>
	  <li><a href="/form1.html">/form1.html</a> - a form to input 2 numbers to add
	</ul>
</body>
</html>`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
