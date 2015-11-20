var Sighting = require('../models/Sighting');

module.exports = {

  create: function(req, res) {
    var newSighting = new Sighting(req.body);
    newSighting.save(function(err, result) {
      if(err) return res.status(500).send(err)
      else res.send(result);
    })
  },

  read: function(req, res) {
    
  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  }

}
