// app.js - application server for RPC-style Web API

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("todo.sqlite");

var express = require('express');
var app = express();

var morgan = require('morgan');
app.use(morgan('short'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function (req, res) {
  res.redirect('/crud.html');
});

app.get('/getTodo', (req, res) => {
  db.all("SELECT * FROM task ORDER BY due DESC", function(err, rows) {
    if (err) {
      res.status(500).send(err);
    } else {
      // sending JavaScript object creates a JSON response
      res.send({ count: rows.length, task: rows });
    }
  });
});

app.get('/searchTodo', (req, res) => {
  // sanity check of input parameters
  var before = req.query.before;
  if (/^\d\d\d\d-\d\d-\d\d$/.test(before)===false) {
    // error in input parameters
    res.status(400).end();
    return;
  }
  db.all("SELECT * FROM task WHERE due <= ? ORDER BY due DESC",
    [ before ], function(err, rows) {
    if (err) {
      // internal server error
      res.status(500).send(err);
    } else {
      // sending JavaScript object creates a JSON response
      res.send({ count: rows.length, task: rows });
    }
  });
});

app.get('/error', (req, res) => {
  res.status(400).send('oh no');
})

app.get('/empty', (req, res) => {
  res.status(204).end();
})

app.post('/addTodo', (req, res) => {
  // obtain the input parameters from the message body
  var due = req.body.due;
  var what = req.body.what;
  var category = req.body.category;
  var done = req.body.done;
  if (done==undefined) done = 0;  // default value

  // sanity check of input parameters
  if (due===undefined || what===undefined || category===undefined) {
    res.status(400).send('Cannot add new. '+'content '+JSON.stringify(req.body));
    // console.log(req.body);
    return;
  }

  db.run("INSERT INTO task (due, what, category, done) VALUES (?,?,?,?)",
    [due, what, category, done],
    function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).end();
      }
  });

});

app.post('/updateTodo', (req, res) => {
  // sanity check of input parameters
  var id = parseInt(req.body.id, 10);
  if (isNaN(id)) {
    res.status(400).send('Cannot update. content: '+JSON.stringify(req.body));
    return;
  }

  var due = req.body.due;
  var what = req.body.what;
  var category = req.body.category;
  var done = parseInt(req.body.done, 10);
  // console.log([due, what, category, done, id]);

  // this sql keeps the old value of a field
  // if the new value is undefined or NaN or null
  var sql = `UPDATE task SET due=coalesce(?,due), what=coalesce(?,what),
    category=coalesce(?,category), done=coalesce(?,done) WHERE id=?`;
  db.run(sql,
    [due, what, category, done, id],
    function (err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).end();
      }
  });

});


app.post('/deleteTodo', (req, res) => {
  var id = parseInt(req.body.id, 10);
  if (isNaN(id)) {
    res.status(400).send('Cannot delete. content: '+JSON.stringify(req.body));
    return;
  }
  db.run("DELETE FROM task WHERE id=?", [id], function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).end();
    }
  });
});


app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
