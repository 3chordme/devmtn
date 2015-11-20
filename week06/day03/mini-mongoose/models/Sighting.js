var mongoose = require('mongoose');

var sightingModel = mongoose.Schema({

  name: {type: String, lowercase:true},
  order: {type: String, maxlength:20},
  numberSeen: {type: Number, min: 1},
  status: {
    type: String,
    lowercase: true,
    enum: [
      'extinct',
      'extinct in the wild',
      'endangered',
      'least concern'
    ] //
  },
  confirmed: {type: Boolean, default:false}

});

sightingModel.pre('save', function(next){
  var sighting = this;
  sighting.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('sighting', sightingModel);
