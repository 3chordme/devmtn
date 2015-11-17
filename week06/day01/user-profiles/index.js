//Modules
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');

//Exports
var config = require('./config.js');
var userCtrl = require('./controllers/userCtrl.js');
var profileCtrl = require('./controllers/profileCtrl.js');

var app = express();

app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:3333'
};

app.use(cors(corsOptions));
//^this is to specify what cross-origin resource sharing is allowed.
//^only accepting requests from our selected origin.
//^the most simple usage of cors is
//^app.use(cors());
//^but that would be dangerous b/c it would allow cross-origin requests from any domain across all of your endpoints.
//^cors doesn't have to be used globally with app.use. You could put it into indivdual functions:
//^app.get('/example', cors(), function(req, res, next){...});
//^and just leave it out of others.

app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post('/api/login', userCtrl.login);

app.use(express.static(__dirname + '/public')); //how to log __dirname?

app.get('/api/profiles', profileCtrl.pushProfiles);





app.listen(3333, function() { console.log('listening', 3333) });
