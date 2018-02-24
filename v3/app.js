var express = require('express');
var path = require('path');

var app = express();

// set ejs as the templating engine
// the templates are stored in the 'views' directory

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


// setup a route - map a HTTP verb and path
// to a function that will do actions

app.get('/', function (req, res) {
  res.render('index');
});


module.exports = app;
