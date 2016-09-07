// app4.js
// the 'static' middleware, which serves static files

var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.redirect('/page1.html');
});

// any file in '/public' has a name the matches the URL?
app.use(express.static(__dirname + '/public'));

// try to move this route before the static middleware
app.get('/page2.html', (req, res) => {
  res.send('you should not see page 2');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
