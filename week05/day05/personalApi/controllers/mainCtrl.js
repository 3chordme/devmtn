var Characters = require('../models/Characters.js')

module.exports = {

  getName: function(req, res, next) {
    res.status(200).json(Characters.name);
  },

  getLocation: function(req, res, next) {
    res.status(200).json(Characters.location);
  },

  getOccupations: function(req, res, next) {
    res.status(200).json(Characters.occupations);
  },

  getOccupationsLatest: function(req, res, next) {
    res.status(200).json(Characters.occupations[Characters.occupations.length - 1]);
  },

  getHobbies: function(req, res, next) {
    res.status(200).json(Characters.hobbies);
  },

  getHobbiesType: function(req, res, next) {
    typeHobbies = [];
    for (var i = 0; i < Characters.hobbies.length; i++) {
      if (Characters.hobbies[i].type === req.params.type) {
        typeHobbies.push(Characters.hobbies[i]);
      }
    }
    res.status(200).json(typeHobbies);
  }
};
