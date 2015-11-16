var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use = (bodyParser.json());

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

// app.use(middleware.addHeaders);

// app.use(function(req, res, next) {
//   console.log('req.body is', req.body);
//   next();
// });

//both above make nodemon stop working

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);


var port = 4567;
app.listen(port, function(){console.log('Listening', port)});
