//$http, $watch, $location, $log, $filter, $timeout, $scope

app.controller('myCtrl', function(){
  $scope.cars = [
  ];
  $scope.watch('selectedCar', function(){

  });
  // ^shallow watch. fires if first level child changes.

  $scope.watch('selectedCar', function(){

}, true);
// ^deep watch. calls function any descendant is changed.

$scope.watchCollection('likes', function(){
  //fires on add, remove, move, change, delete
});

})

Digest cycle: angular checking for changes.

React is currently 20% market share for front end jobs. Angular is like 65%.

$log is a utility to get info back to your server to help debug crashes on other
peoples computers.

Dependency injection: when a piece of code asks for another piece of code by name
only. If we want our service to be accessible by our controller, we need to put it
in our controller function as an argument, like:

angular.module('foodApp')
  .controller('mainCtrl', function($scope, foodService){
    //also link (script) foodService.js to your html
  })

foodService.js looks like this:

angular.module('foodApp')
  .service('foodService', function(){
    this.listOfFoods = [
      //this will be accessible to foodApp
    ];
    var myPrivateVar = "Hello";//this will not be accessible
  })

  controller, service, factory, directive(?) are all providers.

It is best to use services because then you can have separations of concern, more
clarity. The less you have in your controller the better.

service never takes in $scope, because only controller uses $scope to interact with
view.
