'use strict';

var bodyParser = require('body-parser');
var express = require('express');
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
  var data = {
        n1 : req.body.n1,
        n2 : req.body.n2,
        n3 : req.body.n3
  };

  var coords = spiro( data.n1,
                      data.n2,
                      data.n3 );

  data.x = coords.x;
  data.y = coords.y;

  res.render('index', data );
});

module.exports = app;
