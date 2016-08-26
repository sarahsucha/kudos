// https://github.com/expressjs/express

// once you use a constant, you can't assign anything else to that constant.
// if it's an object property, you can change it.
const express = require('express');
const app = express();
const kudosController = require(process.env.PWD + '/controllers/kudosController.js');

app.engine('.html', require('ejs').__express); // parses the html files like erb.
app.set('views',__dirname + '/build'); // where to look for views.
app.set('view engine', 'html'); // the default engine to use.

// MIDDLEWARE
// request, response, next
// next can come later
// fourth can be error - (error, req, res, next) - it's a middleware for handling errors
function renderMainTemplate(req, res) {
  res.render('index', {
    reactHtml: '<span>Here is some span text</span>',
  });
};

// ROUTES FOR HTML
app.get('/', renderMainTemplate); // renderMainTemplate is called middleware
// that will be a function
// what does middleware look like?

// ROUTES FOR JSON
app.get('/api/v1/kudos', kudosController.fetchKudos);

// LISTEN FOR A PORT
app.listen(9393);
