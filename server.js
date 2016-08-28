// https://github.com/expressjs/express

// once you use a constant, you can't assign anything else to that constant.
// if it's an object property, you can change it.
const express = require('express');
const app = express();

require('babel-core/register');
require('babel-polyfill');

const kudosController = require(process.env.PWD + '/controllers/kudosController.js');

app.engine('.html', require('ejs').__express); // parses the html files like erb.
app.set('views',__dirname + '/.build'); // where to look for views.
app.set('view engine', 'html'); // the default engine to use.
app.use(express.static(process.cwd() + '/.build'));// MIDDLEWARE if for example, '/js/bundle.js' url then use static build folder to load stuff.
// Static build folder - static files - never change

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
app.get('/kudos', renderMainTemplate); // renderMainTemplate is called middleware
// that will be a function
// what does middleware look like?

// ROUTES FOR JSON
app.get('/api/kudos', kudosController.fetchKudos);
app.post('/api/kudos', kudosController.createKudo);

// LISTEN FOR A PORT
app.listen(9393);

console.log("App is running on the port 9393");
