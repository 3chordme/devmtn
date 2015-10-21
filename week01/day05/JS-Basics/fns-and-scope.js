//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name) {
  if (name === "Tyler") {
    return true;
  }
  else {
    return false;
  }
}

isTyler(name);

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName() {
  return prompt("What is your name?");
}

getName();

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

/*
function getName() {
  var userName = prompt("What is your name?");
  return userName;
}
*/

function getName() {
  return prompt("What is your name?");
}

function welcome() {
  alert("Welcome " + getName());
}

welcome();


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
Parameters are used when declaring a function, arguments are used when invoking (aka calling) a function.

So:

var myFunction = function(parameter1, parameter2){...};

and

myFunction(argument1, argument2);

respectively.

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here

The falsy values are:

0
undefined
NaN
"" (an empty string)
null
false*

console.log(!!<value>) will output true to the console if <value> is true or truthy,
and false if <value> is false or falsy.

*Not sure if false is falsy or just false. But today in the lecture Lord Stark said
it was falsy. So it is falsy.

//Next Problem



//Create a function called myName that returns your name

function myName() {
  return "David Moore";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
  return function() {
    return "David Moore";
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.

innerFn();
