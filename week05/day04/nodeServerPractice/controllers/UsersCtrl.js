var User = require('../models/User.js');

module.exports = { //remember to ALWAYS PUT THE S or it will break
  index: function(req, res, next) {
    res.status(200).json(User);
  },

  show: function(req, res, next) {
    var requestedUser = User[req.params.id];
    res.status(200).json(requestedUser);
  },

  build: function(req, res, next) {
    User.push(req.body);
    res.status(200).json({ message: 'user saved' })
  }
}
//this becomes UsersCtrl in index.js
