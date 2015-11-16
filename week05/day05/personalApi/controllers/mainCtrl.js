var Characters = require('../models/Characters.js')
var Skillz = require('../models/Skillz.js')

module.exports = {

  getName: function(req, res, next) {
    res.status(200).json({ name: Characters.name} );
  },

  getLocation: function(req, res, next) {
    res.status(200).json({ location: Characters.location });
  },

  getOccupations: function(req, res, next) {
    res.status(200).json({ occupations: Characters.occupations });
  },

  getOccupationsLatest: function(req, res, next) {
    res.status(200).json({ "latest occupation": Characters.occupations[Characters.occupations.length - 1] });
  },

  getHobbies: function(req, res, next) {
    res.status(200).json({ hobbies: Characters.hobbies });
  },

  getHobbiesType: function(req, res, next) {
    var typeHobbies = [];
    var typeParam = req.params.type;
    for (var i = 0; i < Characters.hobbies.length; i++) {
      if (Characters.hobbies[i].type === req.params.type) {
        typeHobbies.push(Characters.hobbies[i]);
      }
    }
    res.status(200).json({ typeParam: typeHobbies });//why doesn't this work?
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
  },

  getSkillz: function(req, res, next) {
    if (req.query.experience === 'intermediate') {
      res.status(200).json({ skillz: Skillz })
    }
  }

};
