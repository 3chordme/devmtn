CALLBACKS - JS NOTES

The callback is the function GIVEN as the argument of another function.

The formula is somewhere along the lines of:

var first = function(arr, cb) {   //this function takes a string and a callback function
  cb(names[0]);                   //the callback function is given arguments here
};


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

first(names, function(firstName){                  //the function is invoked which has an argument
  console.log('The first name is ' + firstName)   //which invokes the callback function(the result is the argument)
});

//create a calculateTax function

function calculateTax(amount) {
  return amount * 0.10;
}

//create a function that takes in an order amount and calculates total

function calculateTotal(amount) {
  return amount  + calculateTax(amount);
}

//create a function that calculates 7% tax for Utah

function calculateUtahTax(amount) {
  return amount * 0.07;
}

//update calculateTotal to include a state parameter

calculateTotal = function(amount, state) {
  if (state = "Utah") {
    return amount + calculateUtahTax(amount);
  }
  else {
    return amount + calculateTax(amount);
  }
}

//This is pretty complicated. We don't want our calculateTotal function to contains
//all the info. So make a parameter of calculateTotal accept tax calculation functions.

calculateTotal = function (amount, taxCalculator) {
  return amount + taxCalculator(amount);
}

//This is called a higher order function. It takes in another function. Also called
//black box. It doesn't know the actual workings of its inner function.
//You can add new tax calculators and not have to change your intial code.

//Using functions as arguments to other functions is one way we can get results
//from asynchronous functions.

//Asynchronous  mean parts of the program run simultaneously.
//Synchronous is line by line, for the most part top to bottom.

function done() {
  console.log("done");
}

//In the case below, done is passed to setTimeout as a callback.

setTimeout(done, 2000);
console.log("This is after setTimeout");

//Typically you would just create the callback function inside the invocation function's
//argument list

//we see "This is after setTimeout" on the console before done.

var getColors = function() {
  setTimeout(function() {
    return ["Red", "Blue", "Green"]
  }, 500);
}

var colors = getColors();
console.log("Colors: " + colors);

//This logs "Colors: undefined". COMMON MISTAKE. You are in an asynchronous function.
//Solve this with a callback.

var getColors = function(callback) {
  setTimeout(function() {
    callback(["Red", "Blue", "Green"]);
  }, 500);
}

getColors(function(colors) {
  console.log("Colors: " + colors);
}


//Create a function called forEach that takes an array as the first parameter and
//a function as the second parameter that loops through and logs each item in the array.

var forEach = function (items, callback) {
  for (var i = 0; i < items.length; i++) {
    callback(items[i]);
  }
}

var colors = ["Red", "Green", "Blue"];

forEach(colors, function(color) {
  console.log(color);
});

//Now create an order object that has a total property and a peroperty called items
//that is an array containing item prices. Add

var order = {
  total: 0,
  items: [1.99, 2.50, 9.99]
  updateTotal: function () {
    total = 0;
    forEach(this.items, function (item) {
      this.total += item;
    });
  }
};

order.updateTotal();
console.log(order.total);

//We get "0" in the log. because "this" becomes the window when the callback is invoked.
//Here are some fixes:

order.updateTotal = function () {
  this.total = 0;
  var self = this;
  forEach(this.items, function (item) {
    self.total += item;
  })
}

//Now, because of the closure, instead ??

order.updateTotal = function () {
  this.total = 0;

  forEach(this.items, function (item) {
    this.total += item;
  }.bind(this))
}

//returns forEach bound to order

//This last method requires changing the forEach function.

forEach = function(items, callback, whatThisShouldBe) {
  for (var i = 0; i < items.length; i++) {
    callback.call(whatThisShouldBe, items[i]);
  }
}

order.updateTotal = function () {
  total = 0;
  forEach(this.items, function (item) {
    self.total += item;
  }, this);
}
