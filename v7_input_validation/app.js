'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var expressValidator = require('express-validator');
var path = require('path');
var spiro = require('./spiro');

var app = express();

// set ejs as the templating engine
// the templates are stored in the 'views' directory

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


// use bodyParser middleware to get data from post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// use expressValidator to validate
// and sanitize data from post requests
app.use(expressValidator());


// setup a route - map a HTTP verb and path
// to a function that will do actions

app.get('/', function (req, res) {

  // setup default values for inputs
  var data = {
        n1 : 13,
        n2 : -7,
        n3 : -3,
        x  : [0],
        y  : [0]
  };

  // send the client application the default values
  res.render('index', data);
});

app.post('/', function (req, res) {

  // validate parameters from form
  req.checkBody('n1', 'Invalid number').isInt();
  req.checkBody('n2', 'Invalid number').isInt();
  req.checkBody('n3', 'Invalid number').isInt();

  // sanitize to avoid cross site scripting errors
  req.sanitize('n1').escape();
  req.sanitize('n2').escape();
  req.sanitize('n3').escape();

  var data = {
        n1 : parseFloat(req.body.n1),
        n2 : parseFloat(req.body.n2),
        n3 : parseFloat(req.body.n3)
  };

  var coords = spiro( data.n1,
                      data.n2,
                      data.n3 );

  data.x = coords.x;
  data.y = coords.y;

  res.render('index', data );
});

module.exports = app;
