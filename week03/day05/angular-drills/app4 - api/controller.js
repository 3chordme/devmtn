angular.module('apiApp').controller('myCtrl', function($scope, myService, getPropsService){

  $scope.test = myService.get();

  var promise = myService.getBirds();

  //Promise evaluation chain - PART B
  // promise.then(function(dataFromPartAInTheChain){
  //   $scope.birds = dataFromPartAInTheChain;
  // });
  //commented out after adding getPropsService

  promise.then(getPropsService.getPropertiesFromFirstObjectInArray).then(function(birdsAndProps){
    $scope.birds = birdsAndProps.birds;
    $scope.props = birdsAndProps.props;
  });

  //extra credit: add drop down menu that filters by prop

});
