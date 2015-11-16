public has angular code, because it is what people will see.

http requests consist of header and body.

How can we tell who is making the requests?

Cookies can help us identify who is sending requests.

We give them a unique identifier in the header we give back.

Sessions keep track of one browser one time.

var sessions = {
  1: { cart: [ {id: 345, title: 'Mama Mia' } ] },
  2: { cart: [ {id: 521, title: 'Titanic 2' } ] }
};
var sessionId = 1;

app.use(function(req, res, next) {
  res.setHeader(id: sessionId);
  sessionId++;
});

if you want to know more about sessions, go to
express sessions.

public folder contains all front end code.
