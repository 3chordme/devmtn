var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var sightingCtrl = require('./controllers/sightingCtrl');

var app = express();
app.use(bodyParser.json());
app.use(cors());

var mongoUri = "mongodb://localhost:27017/mini-birds-mongoose"
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
  console.log('Successfully connected to mongoDB');
});

app.get('api/sighting', sightingCtrl.read);
app.put('api/sighting', sightingCtrl.read);
app.post('api/sighting', sightingCtrl.read);
app.delete('api/sighting', sightingCtrl.read);





port = 3333;
app.listen(port, function() {
  console.log('listening', port);
});
