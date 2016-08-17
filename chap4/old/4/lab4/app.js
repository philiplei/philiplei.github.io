// app.js: a sample web app for CRUD on todo events
// this app is built on the Model-View-Controller pattern

// The Model is a simple in-memory database
var db = require('./model');

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// the Views are rendered using the handlebars.js template engine.
//var exphbs  = require('hbs');
//app.engine('hbs', exphbs({defaultLayout: false}));
app.set('view engine', 'hbs');

// the following routes implement the Controller in this app.

app.get('/', function (req, res) {
  res.redirect('/list.html');
});

app.get('/list.html', function(req, res) {
  db.getEvents({}, function (err, result) {
    console.log(result);
    res.render('list', result);      
  });
});

app.post('/add', function(req, res) {
  if (req.body.due===undefined || req.body.task===undefined) {
    res.send('Cannot add new. '+'content '+JSON.stringify(req.body), 500);
    return;
  }
  var obj = { due: req.body.due, task: req.body.task, category: req.body.category, priority: req.body.priority };
  // db.addEvent will set a new obj.id
  db.addEvent(obj, function(err, result) {
    //res.send('Add operation is successful. POST content '+JSON.stringify(req.body));
    res.redirect('/list.html');    
  });
});

app.get('/edit.html', function(req, res) {
  var id = req.query.id;
  db.searchEvent(id, function(err, result) {
    if (err || result.length==0)
      res.send('Cannot find the record');
    else
      res.render('edit', result[0]);
  });
});

app.post('/update', function(req, res) {
  if (req.body.id===undefined || req.body.due===undefined 
         || req.body.task===undefined) {
    res.send('Cannot update. '+'content '+JSON.stringify(req.body), 500);
    return;
  }
  var obj = { due: req.body.due, task: req.body.task };
  obj.id = parseInt(req.body.id, 10);
  obj.category = req.body.category;
  obj.priority = parseInt(req.body.priority,10);
  console.log(obj);
  db.updateEvent(obj, function(err, result) {
    //res.send('Update operation successful. POST content '+JSON.stringify(req.body));
    if (err)
      res.send(err);
    else 
      res.redirect('/list.html');    
  });
});

app.post('/delete', function(req, res) {
  if (req.body.id===undefined) {
    res.send('Cannot delete. '+'content '+JSON.stringify(req.body), 500);
    return;
  }
  var id = parseInt(req.body.id,10);
  db.deleteEvent(id, function (err, result) {
    res.redirect('/list.html');    
  });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});