angular.module('userProfiles')
  .controller('mainController', function($scope, mainService) {

  $scope.test = function(){
    console.log('testing');
  };

  (function() {
  //console.log(mainService.getData());;
    $scope.users = mainService.getData();
    return $scope.users;
  })();

  //$scope.getUsers();

})
