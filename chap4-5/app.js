// app.js: template
var tt = require('./timetab.js');

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

// Use handlebars.js template engine to render view
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.redirect('/usage.html');
});

app.get('/year/:y', (req, res) => {
  var year = parseInt(req.params.y);
  var context = tt.searchByYear(year);
  res.render('list', context);
});

app.get('/instructor/:instructor', (req, res) => {
  var instructor = req.params.instructor;
  if (instructor==undefined) { throw { message: 'no instructor defined in query' }; }
  var context = tt.searchByInstructor(instructor);
  res.render('list', context);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
