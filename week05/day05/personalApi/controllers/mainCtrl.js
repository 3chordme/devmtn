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
  },
//changeName is not working
  changeName: function(req, res, next) {
    console.log('req is', req); //always undefined??
    console.log('body is', req.body);
    Characters.name = 'Justin Bobbler'; //this works though
    res.status(200).json({ message: 'name changed' });
  },

  changeLocation: function(req, res, next) {

    res.status(200).json({ message: 'location changed' });
  },

  addHobby: function(req, res, next) {
    res.status(200).json({ message: 'hobby added' });
  },

  addOccupation: function(req, res, next) {
    res.status(200).json({ message: 'occupation added' });
  }

};
