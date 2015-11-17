module.exports = {

  login: function(req, res, next) {
    var userFound = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.body.userName && users[i].password === req.body.password) {
        req.session.currentUser = users[i];
        userFound = true;
        console.log(users[i]);
      }
    }
    res.send({ userFound: userFound });
  }

};

var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];
