var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();

// set ejs as the templating engine
// the templates are stored in the 'views' directory

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


// use bodyParser middleware to get data from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// setup a route - map a HTTP verb and path
// to a function that will do actions

app.get('/', function (req, res) {
  res.render('index', {'name' : '', 'greeting' : ''});
});

app.post('/', function (req, res) {
  var greeting = 'Hello ' + req.body.name + '!';
  res.render('index', {'name' : req.body.name, 'greeting' : greeting});
});

module.exports = app;
