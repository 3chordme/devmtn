//step 1: create your root folder.
//step 2: create an entry point inside your root folder (index.js).
//step 3: in terminal, navigate to your root folder, and enter npm init.
//this creates a package.json file in your root folder. fill out the fields as needed.
//set the entry point, change the version if you want, enter description if you want.
//step 4: install modules. npm install module-name --save. ALWAYS SAVE!
//step 5: assign the modules to variables using var moduleName = require('module-name');


//npm brings in code and puts it into our project inside the modules folder
//puts dependencies into the package.json file.
//you can install packages without --save ing them, but never do that.
//dependencies make it so 'npm install' brings in everything you need, rather than
//putting all of it on github or something.

//node is good as a server because it is asynchronous.

// npm modules can depend on other modules

//remove and install packages only from command line, except maybe changing version '^' to '~'

//the way that we pull in packages that exist in the node modules folder itself:

var express = require('express');
//require is a function in express on the global namespace of node.
//needs to attach code from express folder onto this variable.
//now available through this variable.
//basically means requires the express module.
//just like a src in html.

//var http = require('http');
//you could do this^ if you wanted to work with the http module directly.
//we won't do that.

//if you follow the module.exports line in the express library index.js, you'll find a function.

var app = express(); //returns an object

//Endpoint is a part of your program that is instantiated based off a call.
//Translates or links a url to an action.

//1st registered endpoint
app.all('/users', function() {}) //this is an endpoint.

//2nd registered endpoint
app.get('/products', function() {
  //returns response
})

//3rd registered endpoint
app.get('/users', function() {})

//express chain.
//3rd won't run. Responses kill the chain.

//you could also call the url the endpoint, but we are calling the whole statement the endpoint.

app.listen(3000);

//calls the create server function in the http module.
//3000 is a port, or a place on your computer where it can communicate with other computers.
//Different ports are relegated to different things. Port 80 if for internet.
//Even your browser is listening to a specific port.
//Go high enough and they aren't reserved. Lots of people use 8080 or 3000. ~65000 total.
//Some are publicly accessible.

//go to npmjs.org and look for a module and plug it in
