var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.test = 'Success!';

  $scope.getUsers = function() {
    mainService.getUsers() //this part gets the promise object from $q.defer()
      .then(function(dataFromService) { //this will happen when the promise resolves
        $scope.users = dataFromService;
      });
  }

  $scope.getUsers();

});
