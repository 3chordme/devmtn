var mongoose = require('mongoose');

var birdModel = mongoose.schema({
  color: String,
  scientificName: {type: String, required:true, unique:true, lowercase:true}
  region: String,
  firstSightingEver: Date,
  food: [String],
  foodDetails: [{
    name: String,
    type: {type: String}, //special syntax because using key 'type'
    genus: String
  }],
  wingspan: Number,
  endangered: Boolean,
  nest: {
    materials: [String],
    size: Number,
    timeToBuild: Number,
    locationDesc: String
  }
})

// birdModel.pre('save', function(next){
//   var bird = this;
//   bird.scientificName.toLower();
//   next();
// })
//^an example of basic pre. Not necessary because we already made it lowercase.

module.exports = mongoose.model('bird', birdModel); //'bird' maps to a collection 'birds' in database. it will create one if one doesn't exist.
