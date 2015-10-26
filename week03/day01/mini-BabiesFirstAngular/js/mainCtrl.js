var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.name = "David";
  $scope.friends = [
    'Ronnie',
    'Donnie',
    'Lonnie',
    'Bonnie',
    'Connie',
  ];
  $scope.addFriend = function() {

  }

});
