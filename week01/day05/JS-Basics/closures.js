//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function() {
  var friend = 'Jake';
  function callF(number) {
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  var callJake = callFriend();
  callJake("435-215-9248");



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  function makeCounter() {
    var i = 0;
    function add() {
      i++;
      return i;
    }
    return add;
  }

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second function
  that accepts the first function as it's first parameter. The second function should return
  a new third function which, when invoked, invokes the first, original function that was passed
  in, but will only ever do so once.
*/

  var first = function() {
    console.log("This is a simple function.");
  }

var second = function(input) {
  var i = 0;
  return function() {
    if (i < 1) {
      i++;
      input();
    }
  }
}

var third = second(first);

  third();
  third();
  third();
  third();


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts two parameters.
  The first parameter will be an anonymous function and the second parameter, 'N', will be a number.
  Now, in 'fnCounter', allow the anonymous funciton to be invoked 'N' number of times. After it's been
  invoked 'N' number of times, return 'STOP'.
*/

  // var myFunc = function() {console.log("hi");}

  // var invokedN = 5;

  function fnCounter(func, N) {
    var i = 0;
    return function() {
        if (i < N) {
            i++;
            return func();
        }
        else {
          return 'STOP';
        }
    }
  };

  var a = fnCounter(function() {return "anonymous";}, 5);

//Next Problem





  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout(function timer(){
          console.log(i);
      }, i*1000 );
    }
  };

/*  Above you have a function named counter. Examine the function (without running the code)
  then below write what you expect to happen when the funciton is invoked.
  *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.
*/

    I expect the console to log 1 at 1 seconds, 2 at 2 seconds, etc. through 5.


/*  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?
*/

    Wrong. The console logged 6 at every second for 6 seconds.

/*
  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

var counter = function() {
  for (var i = 0; i <= 5; i++) {
    setTimeout( function timer(num) {console.log(num);}, i * 1000, i);
  }
};

counter();

//Next Problem



/*
  Make the following code work
*/
funcArray = [ function() {console.log(0);},
  function() {console.log(1);},
  function() {console.log(2);},
  function() {console.log(3);},
  function() {console.log(4);},
  function() {console.log(5);} ];

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

/*
  *Hint: Don't let this fool you. Break down what's really happening here.
*/
