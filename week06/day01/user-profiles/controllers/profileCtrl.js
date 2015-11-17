module.exports = {
  pushProfiles: function(req, res, next) {
    friendProfiles = [];
    //SAMPLE USER FOR TESTING
    // req.session.currentUser = {
    //     name: 'Ryan Rasmussen',
    //     password: '$akgfl#',
    //     friends: ['Lindsey Mayer']
    // };
    req.session.currentUser.friends.forEach(function(friend) {
      profiles.forEach(function(profile) {
        if (friend === profile.name) {
          friendProfiles.push(profile);
        }
      })
    })
    //ALTERNATE LOOP-INSIDE-LOOP
    // for (i = 0; i < req.session.currentUser.friends.length; i++) {
    //   for (j = 0; j < profiles.length; j++) {
    //     if (req.session.currentUser.friends[i] === profiles[j].name) {
    //       friendProfiles.push(profiles[j]);
    //     }
    //   }
    // }
    res.status(200).send({
      currentUser: req.session.currentUser,
      friends: friendProfiles
    });
  }
};

var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];
