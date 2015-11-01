angular.module('app1').controller('mainCtrl', function($scope, mainService) {

  $scope.bananaInfo =  mainService.returnDataOrSomething();

});
