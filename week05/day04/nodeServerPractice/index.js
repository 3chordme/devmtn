var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); //we don't know why yet.

app.get('/users', function(req, res, next) {
  res.status(200).json({name: 'Rick Sanchez', gun: 'portal gun'});//will be turned into valid JSON
  //could also do res.status(200).send(...)
});

app.post('/users', function(req, res, next) {
  var sentUser = req.body;
  sentUser.status = "new";
  res.status(200).json(sentUser);
});

app.listen(3000, function () {
  console.log('listening on port 3000');
}); //once it starts listening it will call this function
