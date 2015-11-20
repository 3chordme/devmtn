var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var Bird = require('./birdsModel');

var newBird = new Bird({
  scientificName = "Genus Menus Birdus Maximus",
  color: "Blood Red",
  region: "Sparta"
  //etc. required may be default?
});

newBird.save(function(err, result) {

}) //this may be where the error gets thrown. it pushes the newBird object to the database.

Bird.find({}, function(err, response)); //we have a bird!

// Bird.find().where('wingspan').equals(12).limit(10); //one line syntax

Bird.find()
    .where('color').equals("Blood Red")
    .where('wingspan').gt(12) //greater than 12
    .limit(10) //first ten it finds. always applies at the end.
    .sort(-'wingspan') // the - means descending. The largest 10. this applies first.
    .exec //after all criteria is given, execute the function. always executes in this order: criteria, sort, limit. you could either do .exec(function(err, response){...}) mongodb style promise
    .then(function(results){
      //handle results
    }), function(err){
      //handle err
    } //.then is a regular javascript promise. exec returns a promise.

    //I may want to research promise chains.


var mongojs = require('mongojs');

var db = mongojs('birds');
var sightings = db.collection('sightings');

var app = express();

app.use(cors());

app.post('/api/sighting', function(req, res, next) {
  console.log('post worked');

  db.sightings.insert(req.body, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  });
});

app.get('/api/sighting', function(req, res, next) {
  console.log('get worked');
  sightings.find(req.query, function(err, result) {
    if(err) res.send(err)
    else res.send(result)
  });
});

app.put('/api/sighting', function(req, res, next) {
  console.log('put worked');
  res.send("a lark has been sighted");
});

app.delete('/api/sighting', function(req, res, next) {
  console.log('delete worked');
  res.send("a lark has been sighted");
});

app.use(bodyParser.json())

port = 3333;
app.listen(port, function() {
  console.log('listening', port);
});
