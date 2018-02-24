var express = require('express');
var app = express();

// setup a route - map a HTTP verb and path
// to a function that will do actions

app.get('/', function (req, res) {
  res.send('Hello World');
});


module.exports = app;
