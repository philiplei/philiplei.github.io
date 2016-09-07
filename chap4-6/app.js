// app.js: template
var tt = require('./timetab.js');
var timetab = tt.timetab;

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

// Use handlebars.js template engine to render view
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.redirect('/year/3');
});

app.get('/year/:y', (req, res) => {
  var year = parseInt(req.params.y);
  var coursesInTheYear = timetab.courses.filter((c)=>c.year==year);
  var context = {
    year: year,
    acadYear: timetab.acadYear,
    semester: timetab.semester,
    courses: coursesInTheYear
  };
  res.render('list', context);
});

app.get('/searchByRoom', (req, res) => {
  var room = req.query.room;
  if (room==undefined) { throw { message: 'no room defined in query' }; }
  var x = tt.flattenLectures(timetab);
  x.lectures = x.lectures.filter((y)=>{ return (y.room==room); });
  console.dir(x.lectures);
  res.status(500).end();
  //res.render('listbyroom', x);
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
