//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      The "this" keyword is typically used to reference objects when using a method
      or function attached to that object by a constructor function or the bind,
      call, or apply methods. By default, the "this" keyword is set to the global window object,
      but by setting the keyword "this" to refer to another more specific object,
      we can generate objects using a constructor function.
      Defines the context in which the function is executed.
      Runtime scope. Means the this keyword is assigned a value in runtime, when it is
      executed, and that value will become the context for the function.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //I had to use my notes for this one.
      The four rules governing what the "this" keyword is bound to are:

      1) Implicit Binding:
      The "this" keyword is implicitly bound to the containing object outside of the
      function. So if you have a method inside of an object,
      that object may be referred to as "this."

      2) Explicit Binding:
      In situations where you want to override the default or implicit binding of
      the keyword "this" to an object, you can use the apply, call, or bind methods.
      These built-in JavaScript methods are used to specifically state through their
      arguments which object the "this" keyword should refer to. You are changing the
      context of execution for the function.

      3) New Binding:
      When the word "this" exists in a constructor function, it does not have a
      value. When a new object is created using the "new" keyword, "this" is assigned
      the value of the object being created.

      4) Default Binding:
      By default, the "this" keyword is bound to the global
      window object, because all functions are technically methods of the global
      window object, and this refers to the nearest object outside of the function
      that contains it.


  // 3) What is the difference between call and apply?

      Call and apply are methods that belong to the function.prototype, and both
      behave exactly the same when invoked, which is they execute a function and
      set the "this" keyword in that function to refer to the object that is called
      or applied. The difference between the two is that they accept different input
      values as their secondary arguments. The first argument of both is the name of
      the object to set "this" to, and any arguments that follow will set the parameters
      of the function being attached to that object. Call accepts individual parameters
      separated by commas, while apply accepts a single array that holds each individual
      parameter. My mnemonic is Call is just Commas, Apply is an Array.

  // 4) What does .bind do?

      Bind is similar to call and apply, but instead of invoking a function and
      returning the output of that function, it actually returns the function itself.
      It still attaches an object to a function with the keyword "this", as specified
      in the bind method argument, and allows you to set the other parameters of the
      function there as well, but if you want to invoke the function, you have to
      set the bound function to a variable, and then invoke that variable subsequently.
      You could execute the function immediately by adding an extra set of parentheses.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user'
  //instead use the 'this' keyword*

var user = {
  username: "Joey Joe Joe Jabadoo Jr.",
  email: "jjjjj@jmail.com",
  getUsername: function() {
    return this.username;
  }
}

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.

user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here

var Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function () {
    this.move += 10;
  };
};

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

console.log(prius.moveCar());

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car
//function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar
//on the write object (prius vs mustang).


//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above,
//use the proper syntax that will allow for you to call the getYear function with the prius
//then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

console.log(getYear.call(prius))



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername
//function return?

undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

the global window

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
var x = getUsername.bind(user);
setTimeout(x, 5000);
