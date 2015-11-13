var express = require('express');
var bodyParser = require('body-parser');

//Controller
var UsersCtrl = require('./controllers/UsersCtrl');
//no js because node can only pull in js files

var app = express();

app.use(bodyParser.json()); //we don't know why yet.

var users = [];

app.get('/users', UsersCtrl.index); //will be turned into valid JSON
  //could also do res.status(200).send(...) //this is now referencing the function in our UsersCtrl.js file.

app.get('/users/:id', UsersCtrl.show);
//req.params.id = whatever is sent above in :id.

app.post('/users', UsersCtrl.build);

app.listen(3000, function () {
  console.log('listening on port 3000');
}); //once it starts listening it will call this function
