
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var UsersCtrl = require('./controllers/UsersCtrl');
var MoviesCtrl = require('./controllers/MoviesCtrl');

app.use(bodyParser.json()); //app.use calls this function and goes to next automatically
//no need to call next()

app.use(function(req, res, next) {
  console.log('index.js says path is', req.path);
  console.log('index.js says body is', req.body);
  next();
});
//sidenote: what is app.all?
app.get('/users', function(req, res, next) {
  console.log('UserCtrl is running');
  next();
}, UsersCtrl.index);
app.get('/users/:id', UsersCtrl.show);
app.post('/users', UsersCtrl.build);
app.put('/users/:id', UsersCtrl.update);
app.delete('/users/:id', UsersCtrl.destroy);

//
// app.get('/movies', MoviesCtrl.index);
// app.get('/movies/:id', MoviesCtrl.show);
// app.post('/movies', MoviesCtrl.build);
// app.put('/movies/:id', MoviesCtrl.update);
// app.delete('/movies/:id', MoviesCtrl.destroy);

var port = 3333
app.listen(port, function() {
  console.log('listening on port', port);
});
