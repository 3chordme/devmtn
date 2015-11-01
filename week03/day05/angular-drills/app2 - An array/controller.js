angular.module('arrayApp').controller('arrayController', function($scope, myServices) {

  $scope.test = 'Test Success!';

  $scope.data = myServices.dataService();

});
