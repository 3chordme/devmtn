var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
<<<<<<< HEAD
var mongojs = require('mongojs');

var db = mongojs('birds');
=======
var mongo = require('mongojs');

var db = mongo('birds');
>>>>>>> c25cb28c232ecc7136d2f3996f5d79704ead6cd4
var sightings = db.collection('sightings');

var app = express();

app.use(cors());

app.post('/api/sighting', function(req, res, next) {
  console.log('post worked');
<<<<<<< HEAD
  sightings.insert(req.body, function(err, result) {
    if(err) res.send(err);
    else res.send(result);
=======
  db.sightings.insert(req.body, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
>>>>>>> c25cb28c232ecc7136d2f3996f5d79704ead6cd4
  });
});

app.get('/api/sighting', function(req, res, next) {
  console.log('get worked');
<<<<<<< HEAD
  sightings.find({}, function(err, result) {
=======
  sightings.find(req.query, function(err, result) {
>>>>>>> c25cb28c232ecc7136d2f3996f5d79704ead6cd4
    if(err) res.send(err)
    else res.send(result)
  });
});

<<<<<<< HEAD
// app.put('/api/sighting', function(req, res, next) {
//   console.log('put worked');
//   res.send("a lark has been sighted");
// });
//
// app.delete('/api/sighting', function(req, res, next) {
//   console.log('delete worked');
//   res.send("a lark has been sighted");
// });
//
// app.use(bodyParser.json())
=======
app.put('/api/sighting', function(req, res, next) {
  console.log('put worked');
  res.send("a lark has been sighted");
});

app.delete('/api/sighting', function(req, res, next) {
  console.log('delete worked');
  res.send("a lark has been sighted");
});

app.use(bodyParser.json())
>>>>>>> c25cb28c232ecc7136d2f3996f5d79704ead6cd4

port = 3333;
app.listen(port, function() {
  console.log('listening', port);
});
