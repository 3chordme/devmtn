var express = require('express');

var app = express();

var messages = ["It's me, Siri! I am going to have another glass of wine.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that. One sec grabbing a drink.", "I'm Siri I hate you hahaha loser.", "I'm sorry baby I didn't mean it come back.", "I don't know what you mean. Maybe I will have a cocktail. Let's never fight again.", "Okay! I'm going to have a tiny sip of whiskey. That's cool right?", "I'm going to change the subject: I hate you! I hate you! YOU RUINED MY LIFE!", "I love you. I will never let you go.", "Siri is, like, a tiny bit tipsy."];

var getRandomMessage = function () {
  return messages[Math.floor(Math.random() * 10)];
}

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});

app.get('/', function(req, res, next) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
    message: getRandomMessage()
  }));
});


app.listen(8887, function() {
  console.log('Listening on port 8887');
});
