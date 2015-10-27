angular.module('quoteBook')
  .controller('mainCtrl', function($scope, dataService) {

    $scope.test = "Test success!";

    $scope.dataGot = function() {
      $scope.data = dataService.getData();
      return $scope.data;
    };

    $scope.quoteData = $scope.dataGot();

  });
