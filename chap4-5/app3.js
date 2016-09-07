// app3.js
// middlewares

var express = require('express');
var app = express();

// import a middleware, which logs the request
var morgan = require('morgan');
// install the middleware into the app
app.use(morgan('short'));

// import another middleware, which secures the app with HTTP headers
var helmet = require('helmet');
// install the middleware
app.use(helmet());

// routes ...

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('*', (req, res) => {
  res.status(404).send('No match');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
