angular.module('apiApp').controller('mainCtrl', function($scope, myService) {

  $scope.testResult = myService.get();

  //promise evaluation chain - PART B
  var promise = myService.getBirds();
  promise.then(function(dataFromPartAInTheChain){
    $scope.birds = dataFromPartAInTheChain;
  });
  //this should return just an array but it is returning the whole object...weird

});
