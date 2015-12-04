OBJECTS - JS NOTES

How to create an object literal:

var message = {
  from: "Joe",
  subject: "What's up?",
  body text: "alskdjf;lkasjfl"
}

How to create an empty object:

var person = new Object();

Properties (aka keys) can be accessed or added using dot notation

console.log(person.name); //logs the value of the name property
person.name = <add or reassign name here>

delete person.name; //remove a property

Properties with spaces need to be accessed using bracket notation

console.log(message['body text']);

For loops can be used to display each of the key/values on the console

for (var prop in message) {console.log(prop);} //logs each property/key

for (var val in message) {console.log(message[val]);} //logs the value of each property/key

Note: if you say 'for (var prop in message)' then JavaScript will declare prop
as a global variable, even if it is within a function. This is called hoisting.
My theory is that when it makes
its first pass through the doc it takes all potential variables that aren't specified as
variables and makes them global variables so it knows how to deal with them. so:

function foo() {
  for (prop in message) {
  console.log(prop);
  }
}

foo(); //logs "body text" ??
console.log(prop); //logs "body text" ??

Immediately invoked function:

(function () {
console.log("hello");
})(); //logs hello

Long story short, declare variables in your for loops.

Functions have a built in method called prototype. Useful in constructor functions.

function Message(from, subject, body) {
  this.from = from;
  this.subject = subject;
  this.body = body;
}

Message.prototype = {
  from: '',
  subject: '',
  body: ''
}

console.log(Message.prototype); //logs the object with three properties that have empty strings as values

var message = new Message();

//console.log(message); //logs the same thing

var message1 = new Message("John", "Subject One"); //logs the object with from "John" subject "Subject One" body ""
