// app.js - application server for RPC-style Web API

var db = require('./model');

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
  res.redirect('/crud.html');
});

app.get('/getTodo', function(req, res) {
  //var options = { start: req.query.start, end: req.query.end };
  db.getEvents({}, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      // sending JavaScript object creates a JSON response
      res.send(result);
    }
  });
});

app.post('/addTodo', function(req, res) {
  // basic error checking
  if (req.body.due===undefined || req.body.task===undefined) {
    res.status(400).send('Cannot add new. '+'content '+JSON.stringify(req.body));
    console.log(req.body);
    return;
  }
  var obj = { due: req.body.due, task: req.body.task, 
    category: req.body.category };
  obj.priority = parseInt(req.body.priority, 10);

  db.addEvent(obj, function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }        
  });
});

app.post('/updateTodo', function(req, res) {
  // basic error checking
  if (req.body.id===undefined || req.body.task===undefined || req.body.due===undefined) {
    res.status(400).send('Cannot update todo. '+'content '+JSON.stringify(req.body));
    console.log(req.body);
    return;    
  }
  var obj = { due: req.body.due, task: req.body.task, 
    category: req.body.category };
  obj.id = parseInt(req.body.id, 10);
  obj.priority = parseInt(req.body.priority, 10);

  db.updateEvent(obj, function(err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }        
  });
});

app.post('/deltodo', function(req, res) {
  var id = req.body.id;
  // error checking omitted
  // console.log('to delete ', id);
  db.deleteEvent(id, function (err, result) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }        
  });
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Server running at http://localhost:3000/');
});