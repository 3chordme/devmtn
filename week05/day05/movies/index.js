
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
//cross origin resource sharing
//origin is where you are sending request from
//cross origin is from one domain to another
//like to an api
//cors can protect from request overload attacks
//"ddos-distributing denial of service attacks"
var session = require('express-session');
//this module reads cookie headers of requests
//sees who is sending, goes to the array of sessions and finds that info, puts it in

//more middleware
var logger = function(req, res, next) {
  console.log('\n\n------------------------------\n------------------------------\n\n');
  console.log('\n___HEADERS___\n', req.headers);
  console.log('\n___BODY___\n', req.body);
  console.log('\n___SESSION___\n', req.session);
  next();
};

// EXPRESS
var app = express();

app.use(session({
  secret: 'gweriwrb-erfawrg45-oasWsd', //random
  saveUninitialized: true,
  resave: true
}));

//if these are set to false, better for production, because they will only set a cookie when something has changed.

//each api has their own different secret.

// app.use(cors());
//read up on cors if you go to production
//you can put a function inside cors() to check API keys
//always works for get, head, and post requests
//sometimes works for other requests.
//app.options('*', cors()); // is a catch all
//don't do this in production, when you go to deploy

// app.use(express.static('public'));
//

var UsersCtrl = require('./controllers/UsersCtrl');

app.use(bodyParser.json()); //app.use calls this function and goes to next automatically
//no need to call next()

app.use(logger);

//sidenote: what is app.all?
app.get('/users', function(req, res, next) {
  console.log('UserCtrl is running');
  next();
}, UsersCtrl.index);
app.get('/users/:id', UsersCtrl.show);
app.post('/users', UsersCtrl.build);
app.put('/users/:id', UsersCtrl.update);
app.delete('/users/:id', UsersCtrl.destroy);
app.post('/cart', function(req, res, next) {
  if (!req.session.cart) req.session.cart = [];
  //syntax is okay if only one statement.
  req.session.cart.push(req.body);
  res.status(200).json(req.session.cart);
}) //session is in node memory (back end)

var port = 3333
app.listen(port, function() {
  console.log('listening on port', port);
});
