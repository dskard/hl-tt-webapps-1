# Spirograph: A Node.js web application using Express Framework and EJS templating system


### Requirements
1. Node.js - using version 8.9.4 in this example.

### Tools

We'll be building a web application using the Express Web Framework and EJS Templating System

#### Why Express Framework
1. Small
2. Works with many templating libraries
3. Lots of examples on the web

https://github.com/expressjs/express

Features listed on the website

### Listing of Examples

1. My First Web App - use the ```express``` command to generate the boilerplate code for a web application.
2. Small Example - Accepting a request and responding.
3. Returning HTML - update Small Example to return HTML instead of plain text.
4. Hello World - read in the form data from the user, and return it formatted as a greeting.
5. Reading Spirograph Inputs - Update the Hello World app with inputs for performing spirograph calculations.
6. Plotting Spirograph Output - Add a Plotly.js widget that plots spirograph calculation output on a graph.
7. Add Input Validation - Numbers work ok in the app, but what happens when ```n1 = 'a'``` ?
8. Make it AJAXy - Avoid full page refreshes by using AJAX to update only the output plot.
9. Did someone say sPYrograph? - Use a Python kernel for the spirograph calculation.

### My First Web App

Use the quick start guide and commands to get set up:

Install the express-generator globally.
```
$ npm install -g express-generator@4
```

Generate a skeleton web application in a directory named 'foo'. We set the ```--view``` flag to ```ejs``` so the example application will be built using the EJS templating system.

```
$ express ./foo --view=ejs

   create : .
   create : ./package.json
   create : ./app.js
   create : ./public
   create : ./routes
   create : ./routes/index.js
   create : ./routes/users.js
   create : ./views
   create : ./views/index.ejs
   create : ./views/error.ejs
   create : ./bin
   create : ./bin/www
   create : ./public/javascripts
   create : ./public/images
   create : ./public/stylesheets
   create : ./public/stylesheets/style.css

   install dependencies:
     $ cd . && npm install

   run the app:
     $ DEBUG=v3:* npm start
```

Navigate to the web application directory
```
$ cd foo
```

Install dependencies
```
$ npm install


```

Start the web application server
```
$ npm start
```

Navigate your web browser to ```localhost:3000```

### What's happening under the hood?

Show pic of framework from Mozilla site?
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms#Form_handling_process

Explain the different files involved in the application
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website



### Smaller example

There was a lot of boilerplate code in that last example. We could have built
something more simple, like this:

```
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
```

Put that in your app.js file.

Let's create a new web app.

First initialize the directory to be a node.js app

```
$ npm init

(Answer the questions)
```

Install the express module in this directory

```
$ npm install --save express
```

The express libraries get installed to the local directory. Library upgrades and removals won't affect other applications I am building.

Make sure our app.js exists...

Start the web application with:

```
node app.js
```

Navigate web browser to ```localhost:3000``` to see the application running.


### Smaller example with templating

Fantastic!  So with a couple lines of code, we can get an application up and
running. But that is a static web page being delivered and I want to support dynamic content.

How do we do that?


```
mkdir views

cd views
```

Add the following code to index.ejs

```
<!DOCTYPE html>
<html>
    <head>
        <title>Hello World</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    </head>
    <body>
        <div class="page-header text-center">
            <h1>Hello World</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 text-center well well-sm">
                    <p>The current time is:</p>
                </div> <!-- col-sm-4 -->
                <div class="col-sm-8">
                  <div id="time"><%= currentTime %></div>
                </div> <!-- col-sm-8 -->
            </div> <!-- row -->
        </div> <!-- container -->
    </body>
</html>
```

Notice we have a template inside of the HTML as a place to store our current time.

Next, update app.js to look like this:

```
var express = require('express');
var path = require('path');

var app = express();

// set ejs as the templating engine
// the templates are stored in the 'views' directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


app.get('/', function (req, res) {
  var currentTime = Date().toLocaleString();
  res.render('index',{currentTime: currentTime});
});

app.listen(3000);
```

In the above code, we use the ```render``` method, telling it which template to
render (index) and how to map the values (substitute our local currentTime
variable when you see the marker named currentTime).

In this example, we only handled GET requests to our server. We could also handle other HTTP verbs, like POST, in a similar way. These are called routes. They map a HTTP verb and a path to a function that will handle the request.

### Building Our Application: Spirograph

We can use these same techniques to build a more complicated application. Consider the application we wish to build, Spirograph.

#### Graphical User Interface

#### Spirograph Kernel

Show math equation for spirograph.

```
const math = require('mathjs');

function spiro(n1,n2,n3) {
  const t = linspace(0,1,1000);
  const z = math.add(
              math.exp(math.multiply(math.i,2,math.pi,n1,t)),
              math.exp(math.multiply(math.i,2,math.pi,n2,t)),
              math.exp(math.multiply(math.i,2,math.pi,n3,t)),
            );
  return [math.re(z),math.im(z)];
} // end spiro


```

### Setup a new Node.js application

Use the ```node init``` command to setup a new node application It will ask you
a bunch of questions about the node application you are about to initialize
like name, description, repository address, and license.

```
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (spiro-express-js) 
version: (1.0.0) 
description: spirograph as an expressjs web application with javascript kernel
entry point: (index.js) main.js
test command: 
git repository: (github:dskard/spiro-express-js) 
keywords: 
author: Derrick Kearney
license: (ISC) MIT
About to write to /home/zx/projects/dskard/spiro-express-js/package.json:

{
  "name": "spiro-express-js",
  "version": "1.0.0",
  "description": "spirograph as an expressjs web application with javascript kernel",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/dskard/spiro-express-js.git"
  },
  "author": "Derrick Kearney",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/dskard/spiro-express-js/issues"
  },
  "homepage": "https://github.com/dskard/spiro-express-js#readme"
}
```

When filling out the form, I changed the license from ICS to MIT, to match my source code repository.


### Download a few external Node.js libraries.

```npm```, the Node.js Package Manager, can be used to download Node.js
packages and install them in your computer. By default, installation happens in
the present working directory (check?), but it can be done in the global
installation directory. By installing libraries into the application's
directory, libraries used by the application can be frozen and applications can
be isolated from the side effects of unexpectedly upgrading library versions or
are installations of new libraries.

Use the ```npm install``` command to install the libraries we will need to
build our application.

For our application, we will need four libraries:

1. body-parser
2. ejs
3. express
4. express-validator

```
# the --save flag tells npm to save
# this library to the package.json file.

$ npm install --save body-parser ejs express express-validator
```

After installation, the libraries, along with their versions, should be saved
in our package.json file.

```
$ jq '.dependencies' < package.json

{
  "body-parser": "^1.18.2",
  "ejs": "^2.5.7",
  "express": "^4.16.2",
  "express-validator": "^5.0.1"
}
```


### Links
1. [mathnotepad.com](http://mathnotepad.com)
2. [Mozilla: How form validation works](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms#Form_handling_process)
3. [Scotch.io Express EJS Example](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)


[//]: #  online syntax highlighting by: http://markup.su/highlighter/
[//]: #  Language: Javascript YUI       Style: IDLE
[//]: #  Language: HTML                 Style: Mac Classic

[//]: #  vim: syntax=markdown
