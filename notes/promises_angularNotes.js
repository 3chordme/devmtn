Internet basics:

Servers are computers. Any computer can be a server.

Client doesnt know where the website server is located, it asks another computer
if it knows where the server is, if it doesnt know it asks the next one.

IP Address is a number that is assigned (like a street address).

Youre trying to make an http call.

4 basic parts of a web transmission:
Address (URL), Headers, Auth, Body

Default gateway?

Biggest server languages: C#, JS, Ruby, Go, Scala

Everything dealing with data gets turned into a string.
Computers speak to each other using these strings. The format or language for
structuring these strings is called JSON.

JSON - JavaScript Object Notation

all wrapped in an object. No equals (b/c not assinging memory) only colons. No
functions, only data. Strings, arrays, objects, numbers, and booleans (primitive types).
Property names are wrapped in quotes.

Parse and stringify. json.stringify - turn it to a string json.parse - turn it back into an object.

API - Application Program Interface
A way for programs to interact.

REST - Representational State Transfer
Model snapshot exchange between computers. REST is a protocol. A protocol is a set
of guidelines, what to do when different things happen. A set of standardized instructions.
GET, POST, PUSH, DELETE are REST methods.

Narrows the API down to stuff you can use in a webpage.

AJAX

How to make an ajax request with angular

How to call .then on the promise and add that data.

Status Code. //  https://http.cat



$http.get('https://AnyUrlCanGoHere.com/get/Dogs')
.then function()

$http({
  method: "GET",
    url: 'https://AnyUrlCanGoHere.com/get/Dogs',
}).then(function(response){
    var status = response.status;  //status code, data, header info
    var data = response.data;
})
